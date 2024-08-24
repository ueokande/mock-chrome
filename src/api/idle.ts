import { TodoEvent } from "./events";

export class TodoIdle {
  queryState(detectionIntervalInSeconds: number, callback: (newState: chrome.idle.IdleState) => void): void;
  queryState(): never {
    throw new Error("not implemented");
  }

  setDetectionInterval(intervalInSeconds: number): void;
  setDetectionInterval(): never {
    throw new Error("not implemented");
  }

  getAutoLockDelay(callback: (delay: number) => void): void;
  getAutoLockDelay(): never {
    throw new Error("not implemented");
  }

  onStateChanged: chrome.idle.IdleStateChangedEvent = new TodoEvent();
}
