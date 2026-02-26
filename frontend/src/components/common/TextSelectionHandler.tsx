/**
 * TextSelectionHandler
 *
 * Listens for text selections inside Docusaurus doc pages.
 * When the user selects text, shows a floating "Ask AI ✨" button.
 * Clicking it pre-fills the chatbot widget with the selected text.
 *
 * Mount this once inside the Layout wrapper (already done via src/theme/Layout).
 */
import React, { useEffect, useRef, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import './ChatbotWidget.css'; // reuses .text-selection-tooltip and .ask-ai-btn

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  selectedText: string;
}

const TextSelectionHandler: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    selectedText: '',
  });
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    const handleMouseUp = (e: MouseEvent) => {
      if (hideTimer.current) clearTimeout(hideTimer.current);

      const selection = window.getSelection();
      const selected = selection?.toString().trim() ?? '';

      // Only trigger inside doc markdown pages, not the chatbot widget
      const target = e.target as HTMLElement;
      const inDocPage =
        target.closest('.theme-doc-markdown') ||
        target.closest('article') ||
        target.closest('.markdown');
      const inChatbot = target.closest('.chatbot-widget');

      if (selected.length >= 20 && inDocPage && !inChatbot) {
        const range = selection!.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        setTooltip({
          visible: true,
          x: rect.left + rect.width / 2,
          y: rect.top + window.scrollY - 44, // above selection
          selectedText: selected.slice(0, 600),
        });
      } else if (!inChatbot) {
        // Hide with a small delay so button click can register
        hideTimer.current = setTimeout(() => {
          setTooltip((t) => ({ ...t, visible: false }));
        }, 200);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const handleAskAI = () => {
    setTooltip((t) => ({ ...t, visible: false }));
    window.getSelection()?.removeAllRanges();

    const question = `Explain this: "${tooltip.selectedText}"`;
    const chatbot = typeof window !== 'undefined' ? (window as any).__chatbotOpen : null;
    if (typeof chatbot === 'function') {
      chatbot(question);
    }
  };

  if (!tooltip.visible) return null;

  return (
    <div
      className="text-selection-tooltip"
      style={{ left: tooltip.x, top: tooltip.y, transform: 'translateX(-50%)' }}
    >
      <button className="ask-ai-btn" onMouseDown={handleAskAI}>
        ✨ Ask AI
      </button>
    </div>
  );
};

export default TextSelectionHandler;
