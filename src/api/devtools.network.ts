import { TodoEvent } from "./events";

type Interface = typeof chrome.devtools.network;

export class TodoDevtoolsNetwork implements Interface {
  getHAR(callback: (harLog: chrome.devtools.network.HARLog) => void): void;
  getHAR(): never {
    throw new Error("not implemented");
  }

  onRequestFinished: chrome.devtools.network.RequestFinishedEvent = new TodoEvent();
  onNavigated: chrome.devtools.network.NavigatedEvent = new TodoEvent();
}

export class MockDevtoolsNetwork extends TodoDevtoolsNetwork {}
