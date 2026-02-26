import React, { useState, useRef, useEffect, useCallback } from 'react';
import './ChatbotWidget.css';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

interface Source {
  title: string;
  chapter: string;
  part: string;
  text: string;
  slug: string;
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  sources?: Source[];
  showSources?: boolean;
}

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return `ssr-${Date.now()}`;
  let sid = sessionStorage.getItem('chatbot-session-id');
  if (!sid) {
    sid = `sess-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    sessionStorage.setItem('chatbot-session-id', sid);
  }
  return sid;
}

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your Radiology Textbook assistant. Ask me anything about the textbook — or select text on any page and click 'Ask AI'!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(getOrCreateSessionId);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Expose openWithQuestion for TextSelectionHandler (browser only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    (window as any).__chatbotOpen = (question: string) => {
      setIsOpen(true);
      setInputValue(question);
    };
    return () => { delete (window as any).__chatbotOpen; };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleSources = useCallback((id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, showSources: !m.showSources } : m))
    );
  }, []);

  const sendMessage = useCallback(async (question: string) => {
    if (!question.trim() || isLoading) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      content: question,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/chatbot/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, sessionId }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
        throw new Error(err.error || `HTTP ${res.status}`);
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          content: data.answer,
          sender: 'bot',
          timestamp: new Date(),
          sources: data.sources ?? [],
          showSources: false,
        },
      ]);
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Unknown error';
      setMessages((prev) => [
        ...prev,
        {
          id: `e-${Date.now()}`,
          content: `Sorry, I encountered an error: ${msg}`,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, sessionId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="chatbot-widget">
      {isOpen ? (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>📚 Radiology Assistant</h3>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}-message`}>
                <div className="message-content" style={{ whiteSpace: 'pre-wrap' }}>
                  {message.content}
                </div>

                {message.sources && message.sources.length > 0 && (
                  <div className="message-sources">
                    <button
                      className="sources-toggle"
                      onClick={() => toggleSources(message.id)}
                    >
                      📖 {message.showSources ? 'Hide' : 'Show'} {message.sources.length} source
                      {message.sources.length !== 1 ? 's' : ''}
                    </button>
                    {message.showSources && (
                      <div className="sources-list">
                        {message.sources.map((s, i) => (
                          <div key={i} className="source-card">
                            <div className="source-card-header">{s.title}</div>
                            <div className="source-card-chapter">
                              {s.part} › {s.chapter}
                            </div>
                            <div className="source-card-text">{s.text}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="message-timestamp">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message bot-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a radiology question…"
              disabled={isLoading}
              className="chatbot-input"
              autoFocus
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="chatbot-send-btn"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          className="chatbot-toggle-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatbotWidget;