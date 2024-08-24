import { TodoEvent } from "./events";

type Interface = typeof chrome.system.storage;

export class TodoSystemStorage implements Interface {
  getInfo(callback: (info: chrome.system.storage.StorageUnitInfo[]) => void): void;
  getInfo(): Promise<chrome.system.storage.StorageUnitInfo[]>;
  getInfo(): never {
    throw new Error("not implemented");
  }

  ejectDevice(id: string, callback: (result: string) => void): void;
  ejectDevice(id: string): Promise<string>;
  ejectDevice(): never {
    throw new Error("not implemented");
  }

  getAvailableCapacity(id: string, callback: (info: chrome.system.storage.StorageCapacityInfo) => void): void;
  getAvailableCapacity(id: string): Promise<chrome.system.storage.StorageCapacityInfo>;
  getAvailableCapacity(): never {
    throw new Error("not implemented");
  }

  onAttached: chrome.system.storage.SystemStorageAttachedEvent = new TodoEvent();
  onDetached: chrome.system.storage.SystemStorageDetachedEvent = new TodoEvent();
}
