import { TodoEvent } from "./events";

type Interface = typeof chrome.notifications;

export class TodoNotifications implements Interface {
  create(notificationId: string, options: chrome.notifications.NotificationOptions<true>, callback?: (notificationId: string) => void): void;
  create(options: chrome.notifications.NotificationOptions<true>, callback?: (notificationId: string) => void): void;
  create(): never {
    throw new Error("not implemented");
  }

  update(notificationId: string, options: NotificationOptions, callback?: (wasUpdated: boolean) => void): void;
  update(): never {
    throw new Error("not implemented");
  }

  clear(notificationId: string, callback?: (wasCleared: boolean) => void): void;
  clear(): never {
    throw new Error("not implemented");
  }

  getAll(callback: (notifications: Object) => void): void;
  getAll(): never {
    throw new Error("not implemented");
  }

  getPermissionLevel(callback: (level: string) => void): void;
  getPermissionLevel(): never {
    throw new Error("not implemented");
  }

  onClosed: chrome.notifications.NotificationClosedEvent = new TodoEvent();
  onClicked: chrome.notifications.NotificationClickedEvent = new TodoEvent();
  onButtonClicked: chrome.notifications.NotificationButtonClickedEvent = new TodoEvent();
  onPermissionLevelChanged: chrome.notifications.NotificationPermissionLevelChangedEvent = new TodoEvent();
  onShowSettings: chrome.notifications.NotificationShowSettingsEvent = new TodoEvent();
}

export class MockNotifications extends TodoNotifications {}
