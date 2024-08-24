import { TodoEvent } from "./events";
import { TodoChromeSetting } from "./types";

type Interface = typeof chrome.proxy;

export class TodoProxy implements Interface {
  settings: chrome.types.ChromeSetting = new TodoChromeSetting();
  onProxyError: chrome.proxy.ProxyErrorEvent = new TodoEvent();
}
