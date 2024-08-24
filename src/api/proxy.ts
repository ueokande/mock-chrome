import { TodoEvent } from "./events";
import { TodoChromeSetting } from "./types";

export class TodoProxy {
  settings: chrome.types.ChromeSetting = new TodoChromeSetting();
  onProxyError: chrome.proxy.ProxyErrorEvent = new TodoEvent();
}
