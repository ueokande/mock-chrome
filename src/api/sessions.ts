import { TodoEvent } from "./events";

type Interface = typeof chrome.sessions;

export class TodoSessions implements Interface {
  MAX_SESSION_RESULTS = 25;

  getRecentlyClosed(filter?: chrome.sessions.Filter): Promise<chrome.sessions.Session[]>;
  getRecentlyClosed(filter: chrome.sessions.Filter, callback: (sessions: chrome.sessions.Session[]) => void): void;
  getRecentlyClosed(callback: (sessions: chrome.sessions.Session[]) => void): void;
  getRecentlyClosed(): never {
    throw new Error("not implemented");
  }

  getDevices(filter?: chrome.sessions.Filter): Promise<chrome.sessions.Device[]>;
  getDevices(filter: chrome.sessions.Filter, callback: (devices: chrome.sessions.Device[]) => void): void;
  getDevices(callback: (devices: chrome.sessions.Device[]) => void): void;
  getDevices(): never {
    throw new Error("not implemented");
  }

  restore(sessionId?: string): Promise<chrome.sessions.Session>;
  restore(sessionId: string, callback: (restoredSession: chrome.sessions.Session) => void): void;
  restore(callback: (restoredSession: chrome.sessions.Session) => void): void;
  restore(): never {
    throw new Error("not implemented");
  }

  onChanged: chrome.sessions.SessionChangedEvent = new TodoEvent();
}
