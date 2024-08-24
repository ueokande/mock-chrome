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
