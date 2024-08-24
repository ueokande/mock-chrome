import { TodoEvent } from "./events";

type Interface = typeof chrome.extension;

export class TodoExtension implements Interface {
  get inIncognitoContext(): boolean {
    throw new Error("not implemented");
  }
  get lastError(): chrome.extension.LastError {
    throw new Error("not implemented");
  }

  getBackgroundPage(): Window | null;
  getBackgroundPage(): never {
    throw new Error("not implemented");
  }

  getURL(path: string): string;
  getURL(): never {
    throw new Error("not implemented");
  }

  setUpdateUrlData(data: string): void;
  setUpdateUrlData(): never {
    throw new Error("not implemented");
  }

  getViews(fetchProperties?: chrome.extension.FetchProperties): Window[];
  getViews(): never {
    throw new Error("not implemented");
  }

  isAllowedFileSchemeAccess(): Promise<boolean>;
  isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void;
  isAllowedFileSchemeAccess(): never {
    throw new Error("not implemented");
  }

  isAllowedIncognitoAccess(): Promise<boolean>;
  isAllowedIncognitoAccess(callback: (isAllowedAccess: boolean) => void): void;
  isAllowedIncognitoAccess(): never {
    throw new Error("not implemented");
  }

  sendRequest<Request = any, Response = any>(extensionId: string, request: Request, responseCallback?: (response: Response) => void): void;
  sendRequest<Request = any, Response = any>(request: Request, responseCallback?: (response: Response) => void): void;
  sendRequest(): never {
    throw new Error("not implemented");
  }

  getExtensionTabs(windowId?: number): Window[];
  getExtensionTabs(): never {
    throw new Error("not implemented");
  }

  onRequest: chrome.extension.OnRequestEvent = new TodoEvent();
  onRequestExternal: chrome.extension.OnRequestEvent = new TodoEvent();
}
