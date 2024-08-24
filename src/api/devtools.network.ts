import { TodoEvent } from "./events";

export class TodoDevtoolsNetwork {
  getHAR(callback: (harLog: chrome.devtools.network.HARLog) => void): void;
  getHAR(): never {
    throw new Error("not implemented");
  }

  onRequestFinished: chrome.devtools.network.RequestFinishedEvent = new TodoEvent();
  onNavigated: chrome.devtools.network.NavigatedEvent = new TodoEvent();
}
