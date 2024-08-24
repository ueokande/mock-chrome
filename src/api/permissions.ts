import { TodoEvent } from "./events";

type Interface = typeof chrome.permissions;

export class TodoPermissions implements Interface {
  contains(permissions: chrome.permissions.Permissions): Promise<boolean>;
  contains(permissions: chrome.permissions.Permissions, callback: (result: boolean) => void): void;
  contains(): never {
    throw new Error("not implemented");
  }

  getAll(): Promise<chrome.permissions.Permissions>;
  getAll(callback: (permissions: chrome.permissions.Permissions) => void): void;
  getAll(): never {
    throw new Error("not implemented");
  }

  request(permissions: chrome.permissions.Permissions): Promise<boolean>;
  request(permissions: chrome.permissions.Permissions, callback?: (granted: boolean) => void): void;
  request(): never {
    throw new Error("not implemented");
  }

  remove(permissions: chrome.permissions.Permissions): Promise<boolean>;
  remove(permissions: chrome.permissions.Permissions, callback?: (removed: boolean) => void): void;
  remove(): never {
    throw new Error("not implemented");
  }

  onRemoved: chrome.permissions.PermissionsRemovedEvent = new TodoEvent();
  onAdded: chrome.permissions.PermissionsAddedEvent = new TodoEvent();
}
