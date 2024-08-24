import { TodoChromeSetting } from "./types";
import { TodoEvent } from "./events";

export class TodoProxy {
  settings: chrome.types.ChromeSetting = new TodoChromeSetting();
  onProxyError: chrome.proxy.ProxyErrorEvent = new TodoEvent();
}
