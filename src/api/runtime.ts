import { TodoEvent } from "./events";

export class TodoRuntime {
  lastError: chrome.runtime.LastError | undefined;
  id = "********************************";

  OnInstalledReason: typeof chrome.runtime.OnInstalledReason = {
    INSTALL: "install",
    UPDATE: "update",
    CHROME_UPDATE: "chrome_update",
    SHARED_MODULE_UPDATE: "shared_module_update",
  } as unknown as typeof chrome.runtime.OnInstalledReason;

  connect(connectInfo?: chrome.runtime.ConnectInfo): chrome.runtime.Port;
  connect(extensionId: string, connectInfo?: chrome.runtime.ConnectInfo): chrome.runtime.Port;
  connect(): never {
    throw new Error("not implemented");
  }

  connectNative(application: string): chrome.runtime.Port;
  connectNative(): never {
    throw new Error("not implemented");
  }

  getBackgroundPage(callback: (backgroundPage?: Window) => void): void;
  getBackgroundPage(): never {
    throw new Error("not implemented");
  }

  getManifest(): chrome.runtime.Manifest;
  getManifest(): never {
    throw new Error("not implemented");
  }

  getPackageDirectoryEntry(callback: (directoryEntry: DirectoryEntry) => void): void;
  getPackageDirectoryEntry(): never {
    throw new Error("not implemented");
  }

  getPlatformInfo(callback: (platformInfo: chrome.runtime.PlatformInfo) => void): void;
  getPlatformInfo(): Promise<chrome.runtime.PlatformInfo>;
  getPlatformInfo(): never {
    throw new Error("not implemented");
  }

  getURL(path: string): string;
  getURL(): never {
    throw new Error("not implemented");
  }

  reload(): void;
  reload(): never {
    throw new Error("not implemented");
  }

  requestUpdateCheck(callback: (status: chrome.runtime.RequestUpdateCheckStatus, details?: chrome.runtime.UpdateCheckDetails) => void): void;
  requestUpdateCheck(): never {
    throw new Error("not implemented");
  }

  restart(): void;
  restart(): never {
    throw new Error("not implemented");
  }

  restartAfterDelay(seconds: number, callback?: () => void): void;
  restartAfterDelay(): never {
    throw new Error("not implemented");
  }

  sendMessage<M = any, R = any>(message: M, responseCallback: (response: R) => void): void;
  sendMessage<M = any, R = any>(message: M, options: chrome.runtime.MessageOptions, responseCallback: (response: R) => void): void;
  sendMessage<M = any, R = any>(extensionId: string | undefined | null, message: M, responseCallback: (response: R) => void): void;
  sendMessage<Message = any, Response = any>(extensionId: string | undefined | null, message: Message, options: chrome.runtime.MessageOptions, responseCallback: (response: Response) => void): void;
  sendMessage<M = any, R = any>(message: M): Promise<R>;
  sendMessage<M = any, R = any>(message: M, options: chrome.runtime.MessageOptions): Promise<R>;
  sendMessage<M = any, R = any>(extensionId: string | undefined | null, message: M): Promise<R>;
  sendMessage<Message = any, Response = any>(extensionId: string | undefined | null, message: Message, options: chrome.runtime.MessageOptions): Promise<Response>;
  sendMessage(): never {
    throw new Error("not implemented");
  }

  sendNativeMessage(application: string, message: Object, responseCallback: (response: any) => void): void;
  sendNativeMessage(application: string, message: Object): Promise<any>;
  sendNativeMessage(): never {
    throw new Error("not implemented");
  }

  setUninstallURL(url: string, callback?: () => void): void;
  setUninstallURL(): never {
    throw new Error("not implemented");
  }

  openOptionsPage(callback?: () => void): void;
  openOptionsPage(): never {
    throw new Error("not implemented");
  }

  onConnect: chrome.runtime.ExtensionConnectEvent = new TodoEvent();
  onConnectExternal: chrome.runtime.ExtensionConnectEvent = new TodoEvent();
  onSuspend: chrome.runtime.RuntimeEvent = new TodoEvent();
  onStartup: chrome.runtime.RuntimeEvent = new TodoEvent();
  onInstalled: chrome.runtime.RuntimeInstalledEvent = new TodoEvent();
  onSuspendCanceled: chrome.runtime.RuntimeEvent = new TodoEvent();
  onMessage: chrome.runtime.ExtensionMessageEvent = new TodoEvent();
  onMessageExternal: chrome.runtime.ExtensionMessageEvent = new TodoEvent();
  onRestartRequired: chrome.runtime.RuntimeRestartRequiredEvent = new TodoEvent();
  onUpdateAvailable: chrome.runtime.RuntimeUpdateAvailableEvent = new TodoEvent();
  onBrowserUpdateAvailable: chrome.runtime.RuntimeEvent = new TodoEvent();
}
