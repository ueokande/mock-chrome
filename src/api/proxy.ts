import { TodoEvent } from "./events";
import { MockChromeSetting, TodoChromeSetting } from "./types";

type Interface = typeof chrome.proxy;

export class TodoProxy implements Interface {
  settings: chrome.types.ChromeSetting = new TodoChromeSetting();
  onProxyError: chrome.proxy.ProxyErrorEvent = new TodoEvent();
}

export class MockProxy implements Interface {
  settings: chrome.types.ChromeSetting = new MockChromeSetting();
  onProxyError: chrome.proxy.ProxyErrorEvent = new TodoEvent();
}
