import { TodoEvent } from "./events";

export class TodoStorageArea {
  getBytesInUse(callback: (bytesInUse: number) => void): void;
  getBytesInUse(keys?: string | string[] | null): Promise<number>;
  getBytesInUse(keys: string | string[] | null, callback: (bytesInUse: number) => void): void;
  getBytesInUse(): never {
    throw new Error("not implemented");
  }

  clear(): Promise<void>;
  clear(callback: () => void): void;
  clear(): never {
    throw new Error("not implemented");
  }

  set(items: { [key: string]: any }): Promise<void>;
  set(items: { [key: string]: any }, callback: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  remove(keys: string | string[]): Promise<void>;
  remove(keys: string | string[], callback: () => void): void;
  remove(): never {
    throw new Error("not implemented");
  }

  get(callback: (items: { [key: string]: any }) => void): void;
  get(keys?: string | string[] | { [key: string]: any } | null): Promise<{ [key: string]: any }>;
  get(keys: string | string[] | { [key: string]: any } | null, callback: (items: { [key: string]: any }) => void): void;
  get(): never {
    throw new Error("not implemented");
  }

  setAccessLevel(accessOptions: { accessLevel: chrome.storage.AccessLevel }): Promise<void>;
  setAccessLevel(accessOptions: { accessLevel: chrome.storage.AccessLevel }, callback: () => void): void;
  setAccessLevel(): never {
    throw new Error("not implemented");
  }

  onChanged: chrome.storage.StorageAreaChangedEvent = new TodoEvent();
}

export class TodoLocalStorageArea extends TodoStorageArea {
  QUOTA_BYTES: number = 10485760;
}

export class TodoSyncStorageArea extends TodoStorageArea {
  MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number = 1000000;
  QUOTA_BYTES: number = 102400;
  QUOTA_BYTES_PER_ITEM: number = 8192;
  MAX_ITEMS: number = 512;
  MAX_WRITE_OPERATIONS_PER_HOUR: number = 1800;
  MAX_WRITE_OPERATIONS_PER_MINUTE: number = 120;
}

export class TodoSessionStorageArea extends TodoStorageArea {
  QUOTA_BYTES: number = 10485760;
}

export class TodoStorage {
  AccessLevel: typeof chrome.storage.AccessLevel = {
    TRUSTED_AND_UNTRUSTED_CONTEXTS: "TRUSTED_AND_UNTRUSTED_CONTEXTS",
    TRUSTED_CONTEXTS: "TRUSTED_CONTEXTS",
  } as unknown as typeof chrome.storage.AccessLevel;

  local: chrome.storage.LocalStorageArea = new TodoLocalStorageArea();
  sync: chrome.storage.SyncStorageArea = new TodoSyncStorageArea();
  managed: chrome.storage.StorageArea = new TodoStorageArea();
  session: chrome.storage.SessionStorageArea = new TodoSessionStorageArea();

  onChanged: chrome.storage.StorageChangedEvent = new TodoEvent();
}
