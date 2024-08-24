import { TodoEvent } from "./events";

export class TodoDeclarativeWebRequest {
  onRequest: chrome.declarativeWebRequest.RequestedEvent = new TodoEvent();
}
