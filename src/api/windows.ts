import { TodoEvent } from "./events";

export class TodoWindows {
  WINDOW_ID_CURRENT: typeof chrome.windows.WINDOW_ID_CURRENT = -2;
  WINDOW_ID_NONE: typeof chrome.windows.WINDOW_ID_NONE = -1;

  get(windowId: number, callback: (window: chrome.windows.Window) => void): void;
  get(windowId: number): Promise<chrome.windows.Window>;
  get(windowId: number, queryOptions: chrome.windows.QueryOptions, callback: (window: chrome.windows.Window) => void): void;
  get(windowId: number, queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window>;
  get(): never {
    throw new Error("not implemented");
  }

  getCurrent(callback: (window: chrome.windows.Window) => void): void;
  getCurrent(): Promise<chrome.windows.Window>;
  getCurrent(queryOptions: chrome.windows.QueryOptions, callback: (window: chrome.windows.Window) => void): void;
  getCurrent(queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window>;
  getCurrent(): never {
    throw new Error("not implemented");
  }

  create(): Promise<chrome.windows.Window>;
  create(callback: (window?: chrome.windows.Window) => void): void;
  create(createData: chrome.windows.CreateData): Promise<chrome.windows.Window>;
  create(createData: chrome.windows.CreateData, callback: (window?: chrome.windows.Window) => void): void;
  create(): never {
    throw new Error("not implemented");
  }

  getAll(callback: (windows: chrome.windows.Window[]) => void): void;
  getAll(): Promise<chrome.windows.Window[]>;
  getAll(queryOptions: chrome.windows.QueryOptions, callback: (windows: chrome.windows.Window[]) => void): void;
  getAll(queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window[]>;
  getAll(): never {
    throw new Error("not implemented");
  }

  update(windowId: number, updateInfo: chrome.windows.UpdateInfo): Promise<chrome.windows.Window>;
  update(windowId: number, updateInfo: chrome.windows.UpdateInfo, callback: (window: chrome.windows.Window) => void): void;
  update(): never {
    throw new Error("not implemented");
  }

  remove(windowId: number): Promise<void>;
  remove(windowId: number, callback: Function): void;
  remove(): never {
    throw new Error("not implemented");
  }

  getLastFocused(callback: (window: chrome.windows.Window) => void): void;
  getLastFocused(): Promise<chrome.windows.Window>;
  getLastFocused(queryOptions: chrome.windows.QueryOptions, callback: (window: chrome.windows.Window) => void): void;
  getLastFocused(queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window>;
  getLastFocused(): never {
    throw new Error("not implemented");
  }

  onRemoved: chrome.windows.WindowIdEvent = new TodoEvent();
  onCreated: chrome.windows.WindowReferenceEvent = new TodoEvent();
  onFocusChanged: chrome.windows.WindowIdEvent = new TodoEvent();
  onBoundsChanged: chrome.windows.WindowReferenceEvent = new TodoEvent();
}
