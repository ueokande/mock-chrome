import { TodoEvent } from "./events";

type Interface = typeof chrome.pageAction;

export class TodoPageAction implements Interface {
  hide(tabId: number, callback?: () => void): void;
  hide(): never {
    throw new Error("not implemented");
  }

  show(tabId: number, callback?: () => void): void;
  show(): never {
    throw new Error("not implemented");
  }

  setTitle(details: chrome.pageAction.TitleDetails, callback?: () => void): void;
  setTitle(): never {
    throw new Error("not implemented");
  }

  setPopup(details: chrome.pageAction.PopupDetails, callback?: () => void): void;
  setPopup(): never {
    throw new Error("not implemented");
  }

  getTitle(details: chrome.pageAction.GetDetails, callback: (result: string) => void): void;
  getTitle(): never {
    throw new Error("not implemented");
  }

  getPopup(details: chrome.pageAction.GetDetails, callback: (result: string) => void): void;
  getPopup(): never {
    throw new Error("not implemented");
  }

  setIcon(details: chrome.pageAction.IconDetails, callback?: () => void): void;
  setIcon(): never {
    throw new Error("not implemented");
  }

  onClicked: chrome.pageAction.PageActionClickedEvent = new TodoEvent();
}
