import { TodoEvent } from "./events";

type Interface = typeof chrome.gcm;

export class TodoGcm implements Interface {
  MAX_MESSAGE_SIZE = 4096;

  register(senderIds: string[], callback: (registrationId: string) => void): void;
  register(): never {
    throw new Error("not implemented");
  }

  unregister(callback: () => void): void;
  unregister(): never {
    throw new Error("not implemented");
  }

  send(message: chrome.gcm.OutgoingMessage, callback: (messageId: string) => void): void;
  send(): never {
    throw new Error("not implemented");
  }

  onMessage: chrome.gcm.MessageReceptionEvent = new TodoEvent();
  onMessagesDeleted: chrome.gcm.MessageDeletionEvent = new TodoEvent();
  onSendError: chrome.gcm.GcmErrorEvent = new TodoEvent();
}

export class MockGcm extends TodoGcm {}
