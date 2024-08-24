import { TodoEvent } from "./events";

type Interface = typeof chrome.idle;

export class TodoIdle implements Interface {
  queryState(detectionIntervalInSeconds: number): Promise<chrome.idle.IdleState>;
  queryState(detectionIntervalInSeconds: number, callback: (newState: chrome.idle.IdleState) => void): void;
  queryState(): never {
    throw new Error("not implemented");
  }

  setDetectionInterval(intervalInSeconds: number): void;
  setDetectionInterval(): never {
    throw new Error("not implemented");
  }

  getAutoLockDelay(): Promise<number>;
  getAutoLockDelay(callback: (delay: number) => void): void;
  getAutoLockDelay(): never {
    throw new Error("not implemented");
  }

  onStateChanged: chrome.idle.IdleStateChangedEvent = new TodoEvent();
}
