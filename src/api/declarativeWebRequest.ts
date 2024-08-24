import { TodoEvent } from "./events";

type Interface = typeof chrome.declarativeWebRequest;

export class TodoDeclarativeWebRequest implements Interface {
  onRequest: chrome.declarativeWebRequest.RequestedEvent = new TodoEvent();
}
