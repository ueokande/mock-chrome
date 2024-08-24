import { TodoEvent } from "./events";

type Interface = typeof chrome.webRequest;

export class TodoWebRequest implements Interface {
  MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES = 20;

  handlerBehaviorChanged(callback?: Function): void;
  handlerBehaviorChanged(): never {
    throw new Error("not implemented");
  }

  onBeforeRequest: chrome.webRequest.WebRequestBodyEvent = new TodoEvent();
  onBeforeSendHeaders: chrome.webRequest.WebRequestHeadersSynchronousEvent = new TodoEvent();
  onSendHeaders: chrome.webRequest.WebRequestHeadersEvent = new TodoEvent();
  onHeadersReceived: chrome.webRequest.WebResponseHeadersEvent = new TodoEvent();
  onAuthRequired: chrome.webRequest.WebAuthenticationChallengeEvent = new TodoEvent();
  onResponseStarted: chrome.webRequest.WebResponseCacheEvent = new TodoEvent();
  onBeforeRedirect: chrome.webRequest.WebRedirectionResponseEvent = new TodoEvent();
  onCompleted: chrome.webRequest.WebResponseCacheEvent = new TodoEvent();
  onErrorOccurred: chrome.webRequest.WebResponseErrorEvent = new TodoEvent();
}
