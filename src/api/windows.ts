import { type ErrorCapture, asyncify } from "../utils/promises";
import type { TabManager } from "../utils/tabs";
import { isNonEmptyObject, isOptionalCallback, isPositiveInteger } from "../utils/validators";
import { TodoEvent } from "./events";

type Interface = typeof chrome.windows;

export class TodoWindows implements Interface {
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

export class MockWindows implements Interface {
  WINDOW_ID_CURRENT: typeof chrome.windows.WINDOW_ID_CURRENT = -2;
  WINDOW_ID_NONE: typeof chrome.windows.WINDOW_ID_NONE = -1;

  constructor(
    private readonly chrome: ErrorCapture,
    private readonly tabManager: TabManager,
  ) {}

  get(windowId: number, callback: (window: chrome.windows.Window) => void): void;
  get(windowId: number): Promise<chrome.windows.Window>;
  get(windowId: number, queryOptions: chrome.windows.QueryOptions, callback: (window: chrome.windows.Window) => void): void;
  get(windowId: number, queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window>;
  get(...args: unknown[]): Promise<chrome.windows.Window> | undefined {
    // get(windowId: number, queryOptions: chrome.windows.QueryOptions, callback: (window: chrome.windows.Window) => void): void;
    // get(windowId: number, queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window>;
    if (typeof args[0] === "number" && typeof args[1] === "object") {
      if (args[0] < -2) {
        throw new Error("Error at parameter 'windowId': Value must be at least -2.");
      }
      if (!isNonEmptyObject(args[1])) {
        throw new Error("Error at parameter 'queryOptions': Value must be an object.");
      }
      if (!isOptionalCallback(args[2])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0], args[1]], args[2], async (windowId: number, queryOptions: chrome.windows.QueryOptions) => {
        const typesQuery = queryOptions.windowTypes ?? ["normal", "popup"];

        if (windowId === this.WINDOW_ID_CURRENT) {
          const win = this.tabManager.getCurrentWindow();
          if (queryOptions.populate) {
            win.tabs = this.tabManager.getTabsOfWindow(win.id);
          }
          if (!typesQuery.includes(win.type ?? "normal")) {
            throw new Error("No current window");
          }
          return win;
        }

        const win = this.tabManager.getWindow(windowId);
        if (queryOptions.populate) {
          win.tabs = this.tabManager.getTabsOfWindow(windowId);
        }
        if (!typesQuery.includes(win.type ?? "normal")) {
          throw new Error(`No window with id: ${windowId}.`);
        }
        return win;
      });
    }

    // get(windowId: number, callback: (window: chrome.windows.Window) => void): void;
    // get(windowId: number): Promise<chrome.windows.Window>;
    if (typeof args[0] !== "number") {
      throw new Error("Error at parameter 'windowId': Value must be a number.");
    }
    if (!isOptionalCallback(args[1])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }
    return asyncify(this.chrome, [args[0]], args[1], async (windowId: number) => {
      const typesQuery = ["normal", "popup"];
      if (windowId < -2) {
        throw new Error("Error at parameter 'windowId': Value must be at least -2.");
      }
      const win = windowId === this.WINDOW_ID_CURRENT ? this.tabManager.getCurrentWindow() : this.tabManager.getWindow(windowId);
      if (!typesQuery.includes(win.type ?? "normal")) {
        throw new Error(`No window with id: ${windowId}.`);
      }
      return win;
    });
  }

  getCurrent(callback: (window: chrome.windows.Window) => void): void;
  getCurrent(): Promise<chrome.windows.Window>;
  getCurrent(queryOptions: chrome.windows.QueryOptions, callback: (window: chrome.windows.Window) => void): void;
  getCurrent(queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window>;
  getCurrent(...args: unknown[]): Promise<chrome.windows.Window> | undefined {
    // getCurrent(queryOptions: chrome.windows.QueryOptions, callback: (window: chrome.windows.Window) => void): void;
    // getCurrent(queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window>;
    if (typeof args[0] === "object") {
      if (!isNonEmptyObject(args[0])) {
        throw new Error("Error at parameter 'queryOptions': Value must be an object.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }
      return asyncify(this.chrome, [args[0]], args[1], async (queryOptions: chrome.windows.QueryOptions) => {
        return this.get(this.WINDOW_ID_CURRENT, queryOptions);
      });
    }

    // getCurrent(callback: (window: chrome.windows.Window) => void): void;
    // getCurrent(): Promise<chrome.windows.Window>;
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [], args[0], async () => {
      return this.get(this.WINDOW_ID_CURRENT);
    });
  }

  create(): Promise<chrome.windows.Window>;
  create(callback: (window?: chrome.windows.Window) => void): void;
  create(createData: chrome.windows.CreateData): Promise<chrome.windows.Window>;
  create(createData: chrome.windows.CreateData, callback: (window?: chrome.windows.Window) => void): void;
  create(...args: unknown[]): Promise<chrome.windows.Window> | undefined {
    // create(createData: chrome.windows.CreateData): Promise<chrome.windows.Window>;
    // create(createData: chrome.windows.CreateData, callback: (window?: chrome.windows.Window) => void): void;
    if (typeof args[0] === "object") {
      if (!isNonEmptyObject(args[0])) {
        throw new Error("Error at parameter 'createData': Value must be an object.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], async (createData: chrome.windows.CreateData) => {
        return this.tabManager.createWindow(createData);
      });
    }

    // create(): Promise<chrome.windows.Window>;
    // create(callback: (window?: chrome.windows.Window) => void): void;
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [], args[0], async () => {
      return this.tabManager.createWindow({});
    });
  }

  getAll(callback: (windows: chrome.windows.Window[]) => void): void;
  getAll(): Promise<chrome.windows.Window[]>;
  getAll(queryOptions: chrome.windows.QueryOptions, callback: (windows: chrome.windows.Window[]) => void): void;
  getAll(queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window[]>;
  getAll(...args: unknown[]): Promise<chrome.windows.Window[]> | undefined {
    // getAll(queryOptions: chrome.windows.QueryOptions, callback: (windows: chrome.windows.Window[]) => void): void;
    // getAll(queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window[]>;
    if (typeof args[0] === "object") {
      if (!isNonEmptyObject(args[0])) {
        throw new Error("Error at parameter 'queryOptions': Value must be an object.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], async (queryOptions: chrome.windows.QueryOptions) => {
        const typesQuery = queryOptions.windowTypes ?? ["normal", "popup"];
        const windows = this.tabManager.getAllWindows().filter((win) => typesQuery.includes(win.type ?? "normal"));
        if (queryOptions.populate) {
          for (const win of windows) {
            win.tabs = this.tabManager.getTabsOfWindow(win.id);
          }
        }
        return windows;
      });
    }

    // getAll(callback: (windows: chrome.windows.Window[]) => void): void;
    // getAll(): Promise<chrome.windows.Window[]>;
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }
    return asyncify(this.chrome, [], args[0], async () => {
      return this.tabManager.getAllWindows();
    });
  }

  update(windowId: number, updateInfo: chrome.windows.UpdateInfo): Promise<chrome.windows.Window>;
  update(windowId: number, updateInfo: chrome.windows.UpdateInfo, callback: (window: chrome.windows.Window) => void): void;
  update(...args: unknown[]): Promise<chrome.windows.Window> | undefined {
    if (typeof args[0] !== "number") {
      throw new Error("Error at parameter 'windowId': Value must be a number.");
    }
    if (args[0] < -2) {
      throw new Error("Error at parameter 'windowId': Value must be at least -2.");
    }
    if (!isNonEmptyObject(args[1])) {
      throw new Error("Error at parameter 'updateInfo': Value must be an object.");
    }
    if (!isOptionalCallback(args[2])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [args[0], args[1]], args[2], async (windowId: number, updateInfo: chrome.windows.UpdateInfo) => {
      return this.tabManager.updateWindow(windowId === this.WINDOW_ID_CURRENT ? this.tabManager.getCurrentWindow().id : windowId, updateInfo);
    });
  }

  remove(windowId: number): Promise<void>;
  remove(windowId: number, callback: Function): void;
  remove(...args: unknown[]): Promise<void> | undefined {
    if (typeof args[0] !== "number") {
      throw new Error("Error at parameter 'windowId': Value must be a number.");
    }
    if (args[0] < -2) {
      throw new Error("Error at parameter 'windowId': Value must be at least -2.");
    }
    if (!isOptionalCallback(args[1])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [args[0]], args[1], async (windowId: number) => {
      this.tabManager.removeWindow(windowId === this.WINDOW_ID_CURRENT ? this.tabManager.getCurrentWindow().id : windowId);
    });
  }

  getLastFocused(callback: (window: chrome.windows.Window) => void): void;
  getLastFocused(): Promise<chrome.windows.Window>;
  getLastFocused(queryOptions: chrome.windows.QueryOptions, callback: (window: chrome.windows.Window) => void): void;
  getLastFocused(queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window>;
  getLastFocused(...args: unknown[]): Promise<chrome.windows.Window> | undefined {
    // getLastFocused(queryOptions: chrome.windows.QueryOptions, callback: (window: chrome.windows.Window) => void): void;
    // getLastFocused(queryOptions: chrome.windows.QueryOptions): Promise<chrome.windows.Window>;
    if (typeof args[0] === "object") {
      if (!isNonEmptyObject(args[0])) {
        throw new Error("Error at parameter 'queryOptions': Value must be an object.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], async (queryOptions: chrome.windows.QueryOptions) => {
        const lastFocusedWindow = this.tabManager.getLastFocusedWindow();
        return this.get(lastFocusedWindow.id, queryOptions);
      });
    }

    // getLastFocused(callback: (window: chrome.windows.Window) => void): void;
    // getLastFocused(): Promise<chrome.windows.Window>;
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }
    return asyncify(this.chrome, [], args[0], async () => {
      return this.tabManager.getLastFocusedWindow();
    });
  }

  onRemoved: chrome.windows.WindowIdEvent = new TodoEvent();
  onCreated: chrome.windows.WindowReferenceEvent = new TodoEvent();
  onFocusChanged: chrome.windows.WindowIdEvent = new TodoEvent();
  onBoundsChanged: chrome.windows.WindowReferenceEvent = new TodoEvent();
}
