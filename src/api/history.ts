import { TodoEvent } from "./events";

type Interface = typeof chrome.history;

export class TodoHistory implements Interface {
  search(query: chrome.history.HistoryQuery): Promise<chrome.history.HistoryItem[]>;
  search(query: chrome.history.HistoryQuery, callback: (results: chrome.history.HistoryItem[]) => void): void;
  search(): never {
    throw new Error("not implemented");
  }

  addUrl(details: chrome.history.Url): Promise<void>;
  addUrl(details: chrome.history.Url, callback: () => void): void;
  addUrl(): never {
    throw new Error("not implemented");
  }

  deleteRange(range: chrome.history.Range): Promise<void>;
  deleteRange(range: chrome.history.Range, callback: () => void): void;
  deleteRange(): never {
    throw new Error("not implemented");
  }

  deleteAll(): Promise<void>;
  deleteAll(callback: () => void): void;
  deleteAll(): never {
    throw new Error("not implemented");
  }

  getVisits(details: chrome.history.Url): Promise<chrome.history.VisitItem[]>;
  getVisits(details: chrome.history.Url, callback: (results: chrome.history.VisitItem[]) => void): void;
  getVisits(): never {
    throw new Error("not implemented");
  }

  deleteUrl(details: chrome.history.Url): Promise<void>;
  deleteUrl(details: chrome.history.Url, callback: () => void): void;
  deleteUrl(): never {
    throw new Error("not implemented");
  }

  onVisited: chrome.history.HistoryVisitedEvent = new TodoEvent();
  onVisitRemoved: chrome.history.HistoryVisitRemovedEvent = new TodoEvent();
}

export class MockHistory extends TodoHistory {}
