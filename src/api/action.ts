import { TodoEvent } from "./events";

type Interface = typeof chrome.action;

export class TodoAction implements Interface {
  disable(tabId?: number): Promise<void>;
  disable(callback: () => void): void;
  disable(tabId: number, callback: () => void): void;
  disable(): never {
    throw new Error("not implemented");
  }

  enable(tabId?: number): Promise<void>;
  enable(callback: () => void): void;
  enable(tabId: number, callback: () => void): void;
  enable(): never {
    throw new Error("not implemented");
  }

  getBadgeBackgroundColor(details: chrome.action.TabDetails, callback: (result: chrome.action.ColorArray) => void): void;
  getBadgeBackgroundColor(details: chrome.action.TabDetails): Promise<chrome.action.ColorArray>;
  getBadgeBackgroundColor(): never {
    throw new Error("not implemented");
  }

  getBadgeText(details: chrome.action.TabDetails, callback: (result: string) => void): void;
  getBadgeText(details: chrome.action.TabDetails): Promise<string>;
  getBadgeText(): never {
    throw new Error("not implemented");
  }

  getBadgeTextColor(details: chrome.action.TabDetails, callback: (result: chrome.action.ColorArray) => void): void;
  getBadgeTextColor(details: chrome.action.TabDetails): Promise<chrome.action.ColorArray>;
  getBadgeTextColor(): never {
    throw new Error("not implemented");
  }

  getPopup(details: chrome.action.TabDetails, callback: (result: string) => void): void;
  getPopup(details: chrome.action.TabDetails): Promise<string>;
  getPopup(): never {
    throw new Error("not implemented");
  }

  getTitle(details: chrome.action.TabDetails, callback: (result: string) => void): void;
  getTitle(details: chrome.action.TabDetails): Promise<string>;
  getTitle(): never {
    throw new Error("not implemented");
  }

  getUserSettings(callback: (userSettings: chrome.action.UserSettings) => void): void;
  getUserSettings(): Promise<chrome.action.UserSettings>;
  getUserSettings(): never {
    throw new Error("not implemented");
  }

  isEnabled(tabId: number | undefined, callback: (isEnabled: boolean) => void): void;
  isEnabled(tabId?: number): Promise<boolean>;
  isEnabled(): never {
    throw new Error("not implemented");
  }

  openPopup(options?: chrome.action.OpenPopupOptions): Promise<void>;
  openPopup(callback: () => void): void;
  openPopup(options: chrome.action.OpenPopupOptions, callback: () => void): void;
  openPopup(): never {
    throw new Error("not implemented");
  }

  setBadgeBackgroundColor(details: chrome.action.BadgeColorDetails): Promise<void>;
  setBadgeBackgroundColor(details: chrome.action.BadgeColorDetails, callback: () => void): void;
  setBadgeBackgroundColor(): never {
    throw new Error("not implemented");
  }

  setBadgeText(details: chrome.action.BadgeTextDetails): Promise<void>;
  setBadgeText(details: chrome.action.BadgeTextDetails, callback: () => void): void;
  setBadgeText(): never {
    throw new Error("not implemented");
  }

  setBadgeTextColor(details: chrome.action.BadgeColorDetails): Promise<void>;
  setBadgeTextColor(details: chrome.action.BadgeColorDetails, callback: () => void): void;
  setBadgeTextColor(): never {
    throw new Error("not implemented");
  }

  setIcon(details: chrome.action.TabIconDetails): Promise<void>;
  setIcon(details: chrome.action.TabIconDetails, callback: () => void): void;
  setIcon(): never {
    throw new Error("not implemented");
  }

  setPopup(details: chrome.action.PopupDetails): Promise<void>;
  setPopup(details: chrome.action.PopupDetails, callback: () => void): void;
  setPopup(): never {
    throw new Error("not implemented");
  }

  setTitle(details: chrome.action.TitleDetails): Promise<void>;
  setTitle(details: chrome.action.TitleDetails, callback: () => void): void;
  setTitle(): never {
    throw new Error("not implemented");
  }

  onClicked: chrome.action.BrowserClickedEvent = new TodoEvent();
}

export class MockAction extends TodoAction {}
