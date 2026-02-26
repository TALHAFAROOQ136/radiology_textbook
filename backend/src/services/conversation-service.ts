export interface Turn {
  role: 'user' | 'assistant';
  content: string;
}

interface Session {
  turns: Turn[];
  lastAccess: number;
}

const SESSION_TTL_MS = 30 * 60 * 1000; // 30 minutes
const MAX_TURNS = 10; // 5 exchanges

const sessions = new Map<string, Session>();

function cleanup(): void {
  const now = Date.now();
  for (const [id, session] of sessions) {
    if (now - session.lastAccess > SESSION_TTL_MS) {
      sessions.delete(id);
    }
  }
}

export function getHistory(sessionId: string): Turn[] {
  cleanup();
  const session = sessions.get(sessionId);
  if (!session) return [];
  session.lastAccess = Date.now();
  return session.turns;
}

export function addTurn(sessionId: string, userMsg: string, assistantMsg: string): void {
  let session = sessions.get(sessionId);
  if (!session) {
    session = { turns: [], lastAccess: Date.now() };
    sessions.set(sessionId, session);
  }

  session.turns.push({ role: 'user', content: userMsg });
  session.turns.push({ role: 'assistant', content: assistantMsg });
  session.lastAccess = Date.now();

  // Keep only the last MAX_TURNS turns
  if (session.turns.length > MAX_TURNS) {
    session.turns = session.turns.slice(session.turns.length - MAX_TURNS);
  }
}

export function clearSession(sessionId: string): void {
  sessions.delete(sessionId);
}
