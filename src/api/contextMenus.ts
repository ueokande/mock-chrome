import { TodoEvent } from "./events";

export class TodoContextMenus {
  ACTION_MENU_TOP_LEVEL_LIMIT: number = 6;

  removeAll(callback?: () => void): void;
  removeAll(): never {
    throw new Error("not implemented");
  }

  create(createProperties: chrome.contextMenus.CreateProperties, callback?: () => void): number | string;
  create(): never {
    throw new Error("not implemented");
  }

  update(id: string | number, updateProperties: chrome.contextMenus.UpdateProperties, callback?: () => void): void;
  update(): never {
    throw new Error("not implemented");
  }

  remove(menuItemId: string | number, callback?: () => void): void;
  remove(): never {
    throw new Error("not implemented");
  }

  onClicked: chrome.contextMenus.MenuClickedEvent = new TodoEvent();
}
