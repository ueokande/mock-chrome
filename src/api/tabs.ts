import { asyncify } from "../utils/promises";
import type { TabManager } from "../utils/tabs";
import { isNonEmptyObject, isOptionalCallback, isPositiveInteger } from "../utils/validators";
import { TodoEvent } from "./events";

type Interface = typeof chrome.tabs;

export class TodoTabs implements Interface {
  executeScript(details: chrome.tabs.InjectDetails): Promise<any[]>;
  executeScript(details: chrome.tabs.InjectDetails, callback?: (result: any[]) => void): void;
  executeScript(tabId: number, details: chrome.tabs.InjectDetails): Promise<any[]>;
  executeScript(tabId: number, details: chrome.tabs.InjectDetails, callback?: (result: any[]) => void): void;
  executeScript(): never {
    throw new Error("not implemented");
  }

  get(tabId: number, callback: (tab: chrome.tabs.Tab) => void): void;
  get(tabId: number): Promise<chrome.tabs.Tab>;
  get(): never {
    throw new Error("not implemented");
  }

  getAllInWindow(callback: (tab: chrome.tabs.Tab) => void): void;
  getAllInWindow(): Promise<chrome.tabs.Tab>;
  getAllInWindow(windowId: number, callback: (tab: chrome.tabs.Tab) => void): void;
  getAllInWindow(windowId: number): Promise<chrome.tabs.Tab>;
  getAllInWindow(): never {
    throw new Error("not implemented");
  }

  getCurrent(callback: (tab?: chrome.tabs.Tab) => void): void;
  getCurrent(): Promise<chrome.tabs.Tab | undefined>;
  getCurrent(): never {
    throw new Error("not implemented");
  }

  getSelected(callback: (tab: chrome.tabs.Tab) => void): void;
  getSelected(): Promise<chrome.tabs.Tab>;
  getSelected(windowId: number, callback: (tab: chrome.tabs.Tab) => void): void;
  getSelected(windowId: number): Promise<chrome.tabs.Tab>;
  getSelected(): never {
    throw new Error("not implemented");
  }

  create(createProperties: chrome.tabs.CreateProperties): Promise<chrome.tabs.Tab>;
  create(createProperties: chrome.tabs.CreateProperties, callback: (tab: chrome.tabs.Tab) => void): void;
  create(): never {
    throw new Error("not implemented");
  }

  move(tabId: number, moveProperties: chrome.tabs.MoveProperties): Promise<chrome.tabs.Tab>;
  move(tabId: number, moveProperties: chrome.tabs.MoveProperties, callback: (tab: chrome.tabs.Tab) => void): void;
  move(tabIds: number[], moveProperties: chrome.tabs.MoveProperties): Promise<chrome.tabs.Tab[]>;
  move(tabIds: number[], moveProperties: chrome.tabs.MoveProperties, callback: (tabs: chrome.tabs.Tab[]) => void): void;
  move(): never {
    throw new Error("not implemented");
  }

  update(updateProperties: chrome.tabs.UpdateProperties): Promise<chrome.tabs.Tab>;
  update(updateProperties: chrome.tabs.UpdateProperties, callback: (tab?: chrome.tabs.Tab) => void): void;
  update(tabId: number, updateProperties: chrome.tabs.UpdateProperties): Promise<chrome.tabs.Tab>;
  update(tabId: number, updateProperties: chrome.tabs.UpdateProperties, callback: (tab?: chrome.tabs.Tab) => void): void;
  update(): never {
    throw new Error("not implemented");
  }

  remove(tabId: number): Promise<void>;
  remove(tabId: number, callback: Function): void;
  remove(tabIds: number[]): Promise<void>;
  remove(tabIds: number[], callback: Function): void;
  remove(): never {
    throw new Error("not implemented");
  }

  captureVisibleTab(callback: (dataUrl: string) => void): void;
  captureVisibleTab(): Promise<string>;
  captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
  captureVisibleTab(windowId: number): Promise<string>;
  captureVisibleTab(options: chrome.tabs.CaptureVisibleTabOptions): Promise<string>;
  captureVisibleTab(options: chrome.tabs.CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
  captureVisibleTab(windowId: number, options: chrome.tabs.CaptureVisibleTabOptions): Promise<string>;
  captureVisibleTab(windowId: number, options: chrome.tabs.CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
  captureVisibleTab(): never {
    throw new Error("not implemented");
  }

  reload(tabId: number, reloadProperties?: chrome.tabs.ReloadProperties): Promise<void>;
  reload(tabId: number, reloadProperties?: chrome.tabs.ReloadProperties, callback?: () => void): void;
  reload(reloadProperties: chrome.tabs.ReloadProperties): Promise<void>;
  reload(reloadProperties: chrome.tabs.ReloadProperties, callback: () => void): void;
  reload(): Promise<void>;
  reload(callback: () => void): void;
  reload(): never {
    throw new Error("not implemented");
  }

  duplicate(tabId: number): Promise<chrome.tabs.Tab | undefined>;
  duplicate(tabId: number, callback: (tab?: chrome.tabs.Tab) => void): void;
  duplicate(): never {
    throw new Error("not implemented");
  }

  sendMessage<M = any, R = any>(tabId: number, message: M, responseCallback: (response: R) => void): void;
  sendMessage<M = any, R = any>(tabId: number, message: M, options: chrome.tabs.MessageSendOptions, responseCallback: (response: R) => void): void;
  sendMessage<M = any, R = any>(tabId: number, message: M): Promise<R>;
  sendMessage<M = any, R = any>(tabId: number, message: M, options: chrome.tabs.MessageSendOptions): Promise<R>;
  sendMessage(): never {
    throw new Error("not implemented");
  }

  sendRequest<Request = any, Response = any>(tabId: number, request: Request, responseCallback?: (response: Response) => void): void;
  sendRequest(): never {
    throw new Error("not implemented");
  }

  connect(tabId: number, connectInfo?: chrome.tabs.ConnectInfo): chrome.runtime.Port;
  connect(): never {
    throw new Error("not implemented");
  }

  insertCSS(details: chrome.tabs.InjectDetails): Promise<void>;
  insertCSS(details: chrome.tabs.InjectDetails, callback: Function): void;
  insertCSS(tabId: number, details: chrome.tabs.InjectDetails): Promise<void>;
  insertCSS(tabId: number, details: chrome.tabs.InjectDetails, callback: Function): void;
  insertCSS(): never {
    throw new Error("not implemented");
  }

  highlight(highlightInfo: chrome.tabs.HighlightInfo): Promise<chrome.windows.Window>;
  highlight(highlightInfo: chrome.tabs.HighlightInfo, callback: (window: chrome.windows.Window) => void): void;
  highlight(): never {
    throw new Error("not implemented");
  }

  query(queryInfo: chrome.tabs.QueryInfo, callback: (result: chrome.tabs.Tab[]) => void): void;
  query(queryInfo: chrome.tabs.QueryInfo): Promise<chrome.tabs.Tab[]>;
  query(): never {
    throw new Error("not implemented");
  }

  detectLanguage(callback: (language: string) => void): void;
  detectLanguage(): Promise<string>;
  detectLanguage(tabId: number, callback: (language: string) => void): void;
  detectLanguage(tabId: number): Promise<string>;
  detectLanguage(): never {
    throw new Error("not implemented");
  }

  setZoom(zoomFactor: number): Promise<void>;
  setZoom(zoomFactor: number, callback: () => void): void;
  setZoom(tabId: number, zoomFactor: number): Promise<void>;
  setZoom(tabId: number, zoomFactor: number, callback: () => void): void;
  setZoom(): never {
    throw new Error("not implemented");
  }

  getZoom(callback: (zoomFactor: number) => void): void;
  getZoom(): Promise<number>;
  getZoom(tabId: number, callback: (zoomFactor: number) => void): void;
  getZoom(tabId: number): Promise<number>;
  getZoom(): never {
    throw new Error("not implemented");
  }

  setZoomSettings(zoomSettings: chrome.tabs.ZoomSettings): Promise<void>;
  setZoomSettings(zoomSettings: chrome.tabs.ZoomSettings, callback: () => void): void;
  setZoomSettings(tabId: number, zoomSettings: chrome.tabs.ZoomSettings): Promise<void>;
  setZoomSettings(tabId: number, zoomSettings: chrome.tabs.ZoomSettings, callback: () => void): void;
  setZoomSettings(): never {
    throw new Error("not implemented");
  }

  getZoomSettings(callback: (zoomSettings: chrome.tabs.ZoomSettings) => void): void;
  getZoomSettings(): Promise<chrome.tabs.ZoomSettings>;
  getZoomSettings(tabId: number, callback: (zoomSettings: chrome.tabs.ZoomSettings) => void): void;
  getZoomSettings(tabId: number): Promise<chrome.tabs.ZoomSettings>;
  getZoomSettings(): never {
    throw new Error("not implemented");
  }

  discard(tabId?: number): Promise<chrome.tabs.Tab>;
  discard(callback: (tab: chrome.tabs.Tab) => void): void;
  discard(tabId: number, callback: (tab: chrome.tabs.Tab) => void): void;
  discard(): never {
    throw new Error("not implemented");
  }

  goForward(): Promise<void>;
  goForward(callback: () => void): void;
  goForward(tabId: number): Promise<void>;
  goForward(tabId: number, callback: () => void): void;
  goForward(): never {
    throw new Error("not implemented");
  }

  goBack(): Promise<void>;
  goBack(callback: () => void): void;
  goBack(tabId: number): Promise<void>;
  goBack(tabId: number, callback: () => void): void;
  goBack(): never {
    throw new Error("not implemented");
  }

  group(options: chrome.tabs.GroupOptions): Promise<number>;
  group(options: chrome.tabs.GroupOptions): Promise<number>;
  group(options: chrome.tabs.GroupOptions, callback: (groupId: number) => void): void;
  group(): never {
    throw new Error("not implemented");
  }

  ungroup(tabIds: number | number[]): Promise<void>;
  ungroup(tabIds: number | number[], callback: () => void): void;
  ungroup(): never {
    throw new Error("not implemented");
  }

  onHighlighted: chrome.tabs.TabHighlightedEvent = new TodoEvent();
  onRemoved: chrome.tabs.TabRemovedEvent = new TodoEvent();
  onUpdated: chrome.tabs.TabUpdatedEvent = new TodoEvent();
  onAttached: chrome.tabs.TabAttachedEvent = new TodoEvent();
  onMoved: chrome.tabs.TabMovedEvent = new TodoEvent();
  onDetached: chrome.tabs.TabDetachedEvent = new TodoEvent();
  onCreated: chrome.tabs.TabCreatedEvent = new TodoEvent();
  onActivated: chrome.tabs.TabActivatedEvent = new TodoEvent();
  onReplaced: chrome.tabs.TabReplacedEvent = new TodoEvent();
  onSelectionChanged: chrome.tabs.TabSelectedEvent = new TodoEvent();
  onActiveChanged: chrome.tabs.TabSelectedEvent = new TodoEvent();
  onHighlightChanged: chrome.tabs.TabHighlightedEvent = new TodoEvent();
  onZoomChange: chrome.tabs.TabZoomChangeEvent = new TodoEvent();

  TAB_ID_NONE: typeof chrome.tabs.TAB_ID_NONE = -1;
}

const WINDOW_ID_NONE = -1;

export class MockTabs implements Interface {
  private readonly zoomSettings: Map<number, chrome.tabs.ZoomSettings> = new Map();
  private readonly zoomFactors: Map<number, number> = new Map();
  constructor(
    private readonly chrome: typeof window.chrome,
    private readonly tabManager: TabManager,
    private readonly context: {
      windowId: number;
      tabId: number;
    },
  ) {}

  executeScript(details: chrome.tabs.InjectDetails): Promise<any[]>;
  executeScript(details: chrome.tabs.InjectDetails, callback?: (result: any[]) => void): void;
  executeScript(tabId: number, details: chrome.tabs.InjectDetails): Promise<any[]>;
  executeScript(tabId: number, details: chrome.tabs.InjectDetails, callback?: (result: any[]) => void): void;
  executeScript(...args: unknown[]): Promise<any[]> | undefined {
    // executeScript(details: chrome.tabs.InjectDetails): Promise<any[]>;
    // executeScript(details: chrome.tabs.InjectDetails, callback?: (result: any[]) => void): void;
    if (typeof args[0] === "object") {
      if (!isNonEmptyObject(args[0])) {
        throw new Error("Error at parameter 'details': Value must be an object.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [], args[1], () => []);
    }

    // executeScript(tabId: number, details: chrome.tabs.InjectDetails): Promise<any[]>;
    // executeScript(tabId: number, details: chrome.tabs.InjectDetails, callback?: (result: any[]) => void): void;
    if (typeof args[0] === "number" && typeof args[1] === "object") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isNonEmptyObject(args[1])) {
        throw new Error("Error at parameter 'details': Value must be an object.");
      }
      if (!isOptionalCallback(args[2])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [], args[2], () => []);
    }
  }

  get(tabId: number, callback: (tab: chrome.tabs.Tab) => void): void;
  get(tabId: number): Promise<chrome.tabs.Tab>;
  get(...args: unknown[]): Promise<chrome.tabs.Tab> | undefined {
    if (!isPositiveInteger(args[0])) {
      throw new Error("Error at parameter 'tabId': Value must be at least 0.");
    }
    if (!isOptionalCallback(args[1])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [args[0]], args[1], (tabId: number) => {
      return this.tabManager.getTab(tabId);
    });
  }

  getAllInWindow(callback: (tab: chrome.tabs.Tab) => void): void;
  getAllInWindow(): Promise<chrome.tabs.Tab>;
  getAllInWindow(windowId: number, callback: (tab: chrome.tabs.Tab) => void): void;
  getAllInWindow(windowId: number): Promise<chrome.tabs.Tab>;
  getAllInWindow(): never {
    throw new Error("deprecated");
  }

  getCurrent(callback: (tab?: chrome.tabs.Tab) => void): void;
  getCurrent(): Promise<chrome.tabs.Tab | undefined>;
  getCurrent(...args: unknown[]): Promise<chrome.tabs.Tab | undefined> | undefined {
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [], args[0], () => {
      const tabId = this.context.tabId;
      return this.tabManager.getTab(tabId);
    });
  }

  getSelected(callback: (tab: chrome.tabs.Tab) => void): void;
  getSelected(): Promise<chrome.tabs.Tab>;
  getSelected(windowId: number, callback: (tab: chrome.tabs.Tab) => void): void;
  getSelected(windowId: number): Promise<chrome.tabs.Tab>;
  getSelected(): never {
    throw new Error("deprecated");
  }

  create(createProperties: chrome.tabs.CreateProperties): Promise<chrome.tabs.Tab>;
  create(createProperties: chrome.tabs.CreateProperties, callback: (tab: chrome.tabs.Tab) => void): void;
  create(...args: unknown[]): Promise<chrome.tabs.Tab> | undefined {
    if (!isNonEmptyObject<chrome.tabs.CreateProperties>(args[0])) {
      throw new Error("Error at parameter 'createProperties': Value must be an object.");
    }
    if (!isOptionalCallback(args[1])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [args[0]], args[1], (props: chrome.tabs.CreateProperties) => {
      return this.tabManager.createTab(props);
    });
  }

  move(tabId: number, moveProperties: chrome.tabs.MoveProperties): Promise<chrome.tabs.Tab>;
  move(tabId: number, moveProperties: chrome.tabs.MoveProperties, callback: (tab: chrome.tabs.Tab) => void): void;
  move(tabIds: number[], moveProperties: chrome.tabs.MoveProperties): Promise<chrome.tabs.Tab[]>;
  move(tabIds: number[], moveProperties: chrome.tabs.MoveProperties, callback: (tabs: chrome.tabs.Tab[]) => void): void;
  move(...args: unknown[]): Promise<chrome.tabs.Tab | chrome.tabs.Tab[]> | undefined {
    // move(tabId: number, moveProperties: chrome.tabs.MoveProperties): Promise<chrome.tabs.Tab>;
    // move(tabId: number, moveProperties: chrome.tabs.MoveProperties, callback: (tab: chrome.tabs.Tab) => void): void;
    if (typeof args[0] === "number") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isNonEmptyObject<chrome.tabs.MoveProperties>(args[1])) {
        throw new Error("Error at parameter 'moveProperties': Value must be an object.");
      }
      if (!isOptionalCallback(args[2])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0], args[1]], args[2], (tabId: number, promps: chrome.tabs.MoveProperties) => {
        return this.tabManager.moveTab(tabId, promps);
      });
    }

    // move(tabIds: number[], moveProperties: chrome.tabs.MoveProperties): Promise<chrome.tabs.Tab[]>;
    // move(tabIds: number[], moveProperties: chrome.tabs.MoveProperties, callback: (tabs: chrome.tabs.Tab[]) => void): void;
    if (Array.isArray(args[0])) {
      throw new Error("not implemented");
    }
  }

  update(updateProperties: chrome.tabs.UpdateProperties): Promise<chrome.tabs.Tab>;
  update(updateProperties: chrome.tabs.UpdateProperties, callback: (tab?: chrome.tabs.Tab) => void): void;
  update(tabId: number, updateProperties: chrome.tabs.UpdateProperties): Promise<chrome.tabs.Tab>;
  update(tabId: number, updateProperties: chrome.tabs.UpdateProperties, callback: (tab?: chrome.tabs.Tab) => void): void;
  update(...args: unknown[]): Promise<chrome.tabs.Tab> | undefined {
    // update(tabId: number, updateProperties: chrome.tabs.UpdateProperties): Promise<chrome.tabs.Tab>;
    // update(tabId: number, updateProperties: chrome.tabs.UpdateProperties, callback: (tab?: chrome.tabs.Tab) => void): void
    if (typeof args[0] === "number" && typeof args[1] === "object") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isNonEmptyObject<chrome.tabs.UpdateProperties>(args[1])) {
        throw new Error("Error at parameter 'updateProperties': Value must be an object.");
      }
      if (!isOptionalCallback(args[2])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0], args[1]], args[2], (tabId: number, updateProperties: chrome.tabs.UpdateProperties) => {
        return this.tabManager.updateTab(tabId, updateProperties);
      });
    }

    // update(updateProperties: chrome.tabs.UpdateProperties): Promise<chrome.tabs.Tab>;
    // update(updateProperties: chrome.tabs.UpdateProperties, callback: (tab?: chrome.tabs.Tab) => void): void;
    if (typeof args[0] === "object") {
      if (!isNonEmptyObject<chrome.tabs.UpdateProperties>(args[0])) {
        throw new Error("Error at parameter 'updateProperties': Value must be an object.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], (updateProperties: chrome.tabs.UpdateProperties) => {
        const tabId = this.getCurrentOrActiveTabId();

        return this.tabManager.updateTab(tabId, updateProperties);
      });
    }
  }

  remove(tabId: number): Promise<void>;
  remove(tabId: number, callback: Function): void;
  remove(tabIds: number[]): Promise<void>;
  remove(tabIds: number[], callback: Function): void;
  remove(...args: unknown[]): Promise<void> | undefined {
    if (typeof args[0] === "number") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], (tabId: number) => {
        this.tabManager.removeTab(tabId);
      });
    }

    if (Array.isArray(args[0])) {
      if (!args[0].every(isPositiveInteger)) {
        throw new Error("Error at parameter 'tabIds': Value must be an array of positive integers.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], (tabIds: number[]) => {
        for (const id of tabIds) {
          this.tabManager.removeTab(id);
        }
      });
    }
  }

  captureVisibleTab(callback: (dataUrl: string) => void): void;
  captureVisibleTab(): Promise<string>;
  captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
  captureVisibleTab(windowId: number): Promise<string>;
  captureVisibleTab(options: chrome.tabs.CaptureVisibleTabOptions): Promise<string>;
  captureVisibleTab(options: chrome.tabs.CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
  captureVisibleTab(windowId: number, options: chrome.tabs.CaptureVisibleTabOptions): Promise<string>;
  captureVisibleTab(windowId: number, options: chrome.tabs.CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
  captureVisibleTab(...args: unknown[]): Promise<string> | undefined {
    const png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABKklEQVR42mNk";
    const jpeg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1";

    // captureVisibleTab(windowId: number, options: chrome.tabs.CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    // captureVisibleTab(windowId: number, options: chrome.tabs.CaptureVisibleTabOptions): Promise<string>;
    if (typeof args[0] === "number" && typeof args[1] === "object") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'windowId': Value must be at least 0.");
      }
      if (!isNonEmptyObject<chrome.tabs.CaptureVisibleTabOptions>(args[1])) {
        throw new Error("Error at parameter 'options': Value must be an object.");
      }
      if (!isOptionalCallback(args[2])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[1]], args[2], (opts: chrome.tabs.CaptureVisibleTabOptions) => {
        if (opts.format === "jpeg") {
          return jpeg;
        }
        if (opts.format === "png") {
          return png;
        }

        throw new Error("Error at parameter 'options.format': Value must be either 'jpeg' or 'png'.");
      });
    }

    // captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
    // captureVisibleTab(windowId: number): Promise<string>;
    if (typeof args[0] === "number") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'windowId': Value must be at least 0.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [], args[1], () => png);
    }
    if (typeof args[0] === "object") {
      if (!isNonEmptyObject<chrome.tabs.CaptureVisibleTabOptions>(args[0])) {
        throw new Error("Error at parameter 'options': Value must be an object.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], (opts: chrome.tabs.CaptureVisibleTabOptions) => {
        if (opts.format === "jpeg") {
          return jpeg;
        }
        if (opts.format === "png") {
          return png;
        }

        throw new Error("Error at parameter 'options.format': Value must be either 'jpeg' or 'png'.");
      });
    }

    // captureVisibleTab(): Promise<string>;
    // captureVisibleTab(callback: (dataUrl: string) => void): void;
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }
    return asyncify(this.chrome, [], args[0], () => png);
  }

  reload(tabId: number, reloadProperties?: chrome.tabs.ReloadProperties): Promise<void>;
  reload(tabId: number, reloadProperties?: chrome.tabs.ReloadProperties, callback?: () => void): void;
  reload(reloadProperties: chrome.tabs.ReloadProperties): Promise<void>;
  reload(reloadProperties: chrome.tabs.ReloadProperties, callback: () => void): void;
  reload(): Promise<void>;
  reload(callback: () => void): void;
  reload(...args: unknown[]): Promise<void> | undefined {
    // reload(tabId: number, reloadProperties?: chrome.tabs.ReloadProperties): Promise<void>;
    // reload(tabId: number, reloadProperties?: chrome.tabs.ReloadProperties, callback?: () => void): void;
    if (typeof args[0] === "number" && typeof args[1] === "object") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isNonEmptyObject(args[1])) {
        throw new Error("Error at parameter 'reloadProperties': Value must be an object.");
      }
      if (!isOptionalCallback(args[2])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [], args[2], () => {});
    }

    // reload(reloadProperties: chrome.tabs.ReloadProperties): Promise<void>;
    // reload(reloadProperties: chrome.tabs.ReloadProperties, callback: () => void): void;
    if (typeof args[0] === "object") {
      if (!isNonEmptyObject(args[0])) {
        throw new Error("Error at parameter 'reloadProperties': Value must be an object.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [], args[1], () => {});
    }

    // reload(): Promise<void>;
    // reload(callback: () => void): void;
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }
    return asyncify(this.chrome, [], args[0], () => {});
  }

  duplicate(tabId: number): Promise<chrome.tabs.Tab | undefined>;
  duplicate(tabId: number, callback: (tab?: chrome.tabs.Tab) => void): void;
  duplicate(...args: unknown[]): Promise<chrome.tabs.Tab | undefined> | undefined {
    if (!isPositiveInteger(args[0])) {
      throw new Error("Error at parameter 'tabId': Value must be at least 0.");
    }
    if (!isOptionalCallback(args[1])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [args[0]], args[1], (tabId: number) => {
      return this.tabManager.duplicateTab(tabId);
    });
  }

  sendMessage<M = any, R = any>(tabId: number, message: M, responseCallback: (response: R) => void): void;
  sendMessage<M = any, R = any>(tabId: number, message: M, options: chrome.tabs.MessageSendOptions, responseCallback: (response: R) => void): void;
  sendMessage<M = any, R = any>(tabId: number, message: M): Promise<R>;
  sendMessage<M = any, R = any>(tabId: number, message: M, options: chrome.tabs.MessageSendOptions): Promise<R>;
  sendMessage(): never {
    throw new Error("not implemented");
  }

  sendRequest<Request = any, Response = any>(tabId: number, request: Request, responseCallback?: (response: Response) => void): void;
  sendRequest(): never {
    throw new Error("not implemented");
  }

  connect(tabId: number, connectInfo?: chrome.tabs.ConnectInfo): chrome.runtime.Port;
  connect(): never {
    throw new Error("not implemented");
  }

  insertCSS(details: chrome.tabs.InjectDetails): Promise<void>;
  insertCSS(details: chrome.tabs.InjectDetails, callback: Function): void;
  insertCSS(tabId: number, details: chrome.tabs.InjectDetails): Promise<void>;
  insertCSS(tabId: number, details: chrome.tabs.InjectDetails, callback: Function): void;
  insertCSS(): never {
    throw new Error("not implemented");
  }

  highlight(highlightInfo: chrome.tabs.HighlightInfo): Promise<chrome.windows.Window>;
  highlight(highlightInfo: chrome.tabs.HighlightInfo, callback: (window: chrome.windows.Window) => void): void;
  highlight(): never {
    throw new Error("not implemented");
  }

  query(queryInfo: chrome.tabs.QueryInfo, callback: (result: chrome.tabs.Tab[]) => void): void;
  query(queryInfo: chrome.tabs.QueryInfo): Promise<chrome.tabs.Tab[]>;
  query(...args: unknown[]): Promise<chrome.tabs.Tab[]> | undefined {
    if (!isNonEmptyObject<chrome.tabs.QueryInfo>(args[0])) {
      throw new Error("Error at parameter 'queryInfo': Value must be an object.");
    }
    if (!isOptionalCallback(args[1])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [args[0]], args[1], (info: chrome.tabs.QueryInfo) => {
      const tabs = this.tabManager.getAllTabs();
      return tabs
        .filter((t) => {
          return (
            (typeof info.status === "string" ? t.status === info.status : true) &&
            (typeof info.windowId === "number" ? t.windowId === info.windowId : true) &&
            (typeof info.active === "boolean" ? t.active === info.active : true) &&
            (typeof info.index === "number" ? t.index === info.index : true) &&
            (typeof info.title === "string" ? t.title === info.title : true) &&
            (typeof info.url === "string" ? t.url === info.url : true) &&
            (typeof info.highlighted === "boolean" ? t.highlighted === info.highlighted : true) &&
            (typeof info.discarded === "boolean" ? t.discarded === info.discarded : true) &&
            (typeof info.autoDiscardable === "boolean" ? t.autoDiscardable === info.autoDiscardable : true) &&
            (typeof info.pinned === "boolean" ? t.pinned === info.pinned : true) &&
            (typeof info.audible === "boolean" ? t.audible === info.audible : true) &&
            (typeof info.muted === "boolean" ? t.mutedInfo?.muted === info.muted : true) &&
            (typeof info.groupId === "number" ? t.groupId === info.groupId : true)
          );
        })
        .filter((t) => {
          if (typeof info.lastFocusedWindow === "undefined") {
            return true;
          }

          const lastFocusedWindow = this.tabManager.getLastFocusedWindow();

          return lastFocusedWindow.id === t.windowId;
        })
        .filter((t) => {
          if (typeof info.windowType === "undefined") {
            return true;
          }

          const win = this.tabManager.getWindow(t.windowId);

          return win.type === info.windowType;
        })
        .filter((t) => {
          if (typeof info.currentWindow === "undefined") {
            return true;
          }

          return this.context.windowId === t.windowId;
        });
    });
  }

  detectLanguage(callback: (language: string) => void): void;
  detectLanguage(): Promise<string>;
  detectLanguage(tabId: number, callback: (language: string) => void): void;
  detectLanguage(tabId: number): Promise<string>;
  detectLanguage(...args: unknown[]): Promise<string> | undefined {
    // detectLanguage(tabId: number): Promise<string>;
    // detectLanguage(tabId: number, callback: (language: string) => void): void;
    if (typeof args[0] === "number") {
      if (isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], (tabId: number) => {
        this.tabManager.getTab(tabId);

        return "en";
      });
    }

    // detectLanguage(): Promise<string>;
    // detectLanguage(callback: (language: string) => void): void;
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }

    return asyncify(this.chrome, [], args[0], () => "en");
  }

  setZoom(zoomFactor: number): Promise<void>;
  setZoom(zoomFactor: number, callback: () => void): void;
  setZoom(tabId: number, zoomFactor: number): Promise<void>;
  setZoom(tabId: number, zoomFactor: number, callback: () => void): void;
  setZoom(...args: unknown[]): Promise<void> | undefined {
    // setZoom(tabId: number, zoomFactor: number): Promise<void>;
    // setZoom(tabId: number, zoomFactor: number, callback: () => void): void;
    if (typeof args[0] === "number" && typeof args[1] === "number") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isOptionalCallback(args[2])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0], args[1]], args[2], (tabId: number, zoomFactor: number) => {
        this.tabManager.getTab(tabId);

        this.zoomFactors.set(tabId, zoomFactor);
      });
    }

    // setZoom(zoomFactor: number): Promise<void>;
    // setZoom(zoomFactor: number, callback: () => void): void;
    if (!isPositiveInteger(args[0])) {
      throw new Error("Error at parameter 'tabId': Value must be at least 0.");
    }
    if (!isOptionalCallback(args[1])) {
      throw new Error("Error at parameter 'tabId': Value must be at least 0.");
    }
    return asyncify(this.chrome, [args[0]], args[1], (zoomFactor: number) => {
      const tabId = this.getCurrentOrActiveTabId();

      this.zoomFactors.set(tabId, zoomFactor);
    });
  }

  getZoom(callback: (zoomFactor: number) => void): void;
  getZoom(): Promise<number>;
  getZoom(tabId: number, callback: (zoomFactor: number) => void): void;
  getZoom(tabId: number): Promise<number>;
  getZoom(...args: unknown[]): Promise<number> | undefined {
    // getZoom(tabId: number, callback: (zoomFactor: number) => void): void;
    // getZoom(tabId: number): Promise<number>;
    if (typeof args[0] === "number") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], (tabId: number) => {
        this.tabManager.getTab(tabId);

        const zoomFactor = this.zoomFactors.get(tabId);

        return typeof zoomFactor === "number" ? zoomFactor : 1.0;
      });
    }

    // getZoom(callback: (zoomFactor: number) => void): void;
    // getZoom(): Promise<number>;
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }
    return asyncify(this.chrome, [], args[0], () => {
      const tabId = this.getCurrentOrActiveTabId();
      const zoomFactor = this.zoomFactors.get(tabId);

      return typeof zoomFactor === "number" ? zoomFactor : 1.0;
    });
  }

  setZoomSettings(zoomSettings: chrome.tabs.ZoomSettings): Promise<void>;
  setZoomSettings(zoomSettings: chrome.tabs.ZoomSettings, callback: () => void): void;
  setZoomSettings(tabId: number, zoomSettings: chrome.tabs.ZoomSettings): Promise<void>;
  setZoomSettings(tabId: number, zoomSettings: chrome.tabs.ZoomSettings, callback: () => void): void;
  setZoomSettings(...args: unknown[]): Promise<void> | undefined {
    // setZoomSettings(tabId: number, zoomSettings: chrome.tabs.ZoomSettings): Promise<void>;
    // setZoomSettings(tabId: number, zoomSettings: chrome.tabs.ZoomSettings, callback: () => void): void;
    if (typeof args[0] === "number" && isNonEmptyObject(args[1])) {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isNonEmptyObject<chrome.tabs.ZoomSettings>(args[1])) {
        throw new Error("Error at parameter 'zoomSettings': Value must be an object.");
      }
      if (!isOptionalCallback(args[2])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0], args[1]], args[2], (tabId: number, zoomSettings: chrome.tabs.ZoomSettings) => {
        this.tabManager.getTab(tabId);

        this.zoomSettings.set(tabId, zoomSettings);
      });
    }

    // setZoomSettings(zoomSettings: chrome.tabs.ZoomSettings): Promise<void>;
    // setZoomSettings(zoomSettings: chrome.tabs.ZoomSettings, callback: () => void): void;
    if (!isNonEmptyObject<chrome.tabs.ZoomSettings>(args[0])) {
      throw new Error("Error at parameter 'zoomSettings': Value must be an object.");
    }
    if (!isOptionalCallback(args[1])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }
    return asyncify(this.chrome, [args[0]], args[1], (zoomSettings: chrome.tabs.ZoomSettings) => {
      const tabId = this.getCurrentOrActiveTabId();

      this.zoomSettings.set(tabId, zoomSettings);
    });
  }

  getZoomSettings(callback: (zoomSettings: chrome.tabs.ZoomSettings) => void): void;
  getZoomSettings(): Promise<chrome.tabs.ZoomSettings>;
  getZoomSettings(tabId: number, callback: (zoomSettings: chrome.tabs.ZoomSettings) => void): void;
  getZoomSettings(tabId: number): Promise<chrome.tabs.ZoomSettings>;
  getZoomSettings(...args: unknown[]): Promise<chrome.tabs.ZoomSettings> | undefined {
    // getZoomSettings(tabId: number): Promise<chrome.tabs.ZoomSettings>;
    // getZoomSettings(tabId: number, callback: (zoomSettings: chrome.tabs.ZoomSettings) => void): void;
    if (typeof args[0] === "number") {
      if (!isPositiveInteger(args[0])) {
        throw new Error("Error at parameter 'tabId': Value must be at least 0.");
      }
      if (!isOptionalCallback(args[1])) {
        throw new Error("Error at parameter 'callback': Value must be a function.");
      }

      return asyncify(this.chrome, [args[0]], args[1], (tabId: number) => {
        this.tabManager.getTab(tabId);

        const zoomSettings = this.zoomSettings.get(tabId);
        if (typeof zoomSettings === "undefined") {
          return {
            mode: "automatic",
            scope: "per-origin",
            defaultZoomFactor: 1.0,
          };
        }
        return zoomSettings;
      });
    }

    // getZoomSettings(): Promise<chrome.tabs.ZoomSettings>;
    // getZoomSettings(callback: (zoomSettings: chrome.tabs.ZoomSettings) => void): void;
    if (!isOptionalCallback(args[0])) {
      throw new Error("Error at parameter 'callback': Value must be a function.");
    }
    return asyncify(this.chrome, [], args[0], () => {
      const tabId = this.getCurrentOrActiveTabId();

      const zoomSettings = this.zoomSettings.get(tabId);
      if (typeof zoomSettings === "undefined") {
        return {
          mode: "automatic",
          scope: "per-origin",
          defaultZoomFactor: 1.0,
        };
      }
      return zoomSettings;
    });
  }

  discard(tabId?: number): Promise<chrome.tabs.Tab>;
  discard(callback: (tab: chrome.tabs.Tab) => void): void;
  discard(tabId: number, callback: (tab: chrome.tabs.Tab) => void): void;
  discard(): never {
    throw new Error("not implemented");
  }

  goForward(): Promise<void>;
  goForward(callback: () => void): void;
  goForward(tabId: number): Promise<void>;
  goForward(tabId: number, callback: () => void): void;
  goForward(): never {
    throw new Error("not implemented");
  }

  goBack(): Promise<void>;
  goBack(callback: () => void): void;
  goBack(tabId: number): Promise<void>;
  goBack(tabId: number, callback: () => void): void;
  goBack(): never {
    throw new Error("not implemented");
  }

  group(options: chrome.tabs.GroupOptions): Promise<number>;
  group(options: chrome.tabs.GroupOptions): Promise<number>;
  group(options: chrome.tabs.GroupOptions, callback: (groupId: number) => void): void;
  group(): never {
    throw new Error("not implemented");
  }

  ungroup(tabIds: number | number[]): Promise<void>;
  ungroup(tabIds: number | number[], callback: () => void): void;
  ungroup(): never {
    throw new Error("not implemented");
  }

  private getCurrentOrActiveTabId(): number {
    if (this.context.windowId !== WINDOW_ID_NONE) {
      return this.context.tabId;
    }

    const w = this.tabManager.getLastFocusedWindow();
    const tab = this.tabManager.getTabsOfWindow(w.id).find((t) => t.active);
    if (typeof tab === "undefined") {
      throw new Error("No active tab.");
    }

    return tab.id;
  }

  onHighlighted: chrome.tabs.TabHighlightedEvent = new TodoEvent();
  onRemoved: chrome.tabs.TabRemovedEvent = new TodoEvent();
  onUpdated: chrome.tabs.TabUpdatedEvent = new TodoEvent();
  onAttached: chrome.tabs.TabAttachedEvent = new TodoEvent();
  onMoved: chrome.tabs.TabMovedEvent = new TodoEvent();
  onDetached: chrome.tabs.TabDetachedEvent = new TodoEvent();
  onCreated: chrome.tabs.TabCreatedEvent = new TodoEvent();
  onActivated: chrome.tabs.TabActivatedEvent = new TodoEvent();
  onReplaced: chrome.tabs.TabReplacedEvent = new TodoEvent();
  onSelectionChanged: chrome.tabs.TabSelectedEvent = new TodoEvent();
  onActiveChanged: chrome.tabs.TabSelectedEvent = new TodoEvent();
  onHighlightChanged: chrome.tabs.TabHighlightedEvent = new TodoEvent();
  onZoomChange: chrome.tabs.TabZoomChangeEvent = new TodoEvent();

  TAB_ID_NONE: typeof chrome.tabs.TAB_ID_NONE = -1;
}
