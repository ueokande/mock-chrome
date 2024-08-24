import { TodoEvent } from "./events";

type Interfae = typeof chrome.bookmarks;

export class TodoBookmarks implements Interfae {
  MAX_WRITE_OPERATIONS_PER_HOUR = 1000000;
  MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE = 1000000;

  search(query: string, callback: (results: chrome.bookmarks.BookmarkTreeNode[]) => void): void;
  search(query: string): Promise<chrome.bookmarks.BookmarkTreeNode[]>;
  search(query: chrome.bookmarks.BookmarkSearchQuery, callback: (results: chrome.bookmarks.BookmarkTreeNode[]) => void): void;
  search(query: chrome.bookmarks.BookmarkSearchQuery): Promise<chrome.bookmarks.BookmarkTreeNode[]>;
  search(): never {
    throw new Error("not implemented");
  }

  getTree(callback: (results: chrome.bookmarks.BookmarkTreeNode[]) => void): void;
  getTree(): Promise<chrome.bookmarks.BookmarkTreeNode[]>;
  getTree(): never {
    throw new Error("not implemented");
  }

  getRecent(numberOfItems: number, callback: (results: chrome.bookmarks.BookmarkTreeNode[]) => void): void;
  getRecent(numberOfItems: number): Promise<chrome.bookmarks.BookmarkTreeNode[]>;
  getRecent(): never {
    throw new Error("not implemented");
  }

  get(id: string, callback: (results: chrome.bookmarks.BookmarkTreeNode[]) => void): void;
  get(id: string): Promise<chrome.bookmarks.BookmarkTreeNode[]>;
  get(idList: string[], callback: (results: chrome.bookmarks.BookmarkTreeNode[]) => void): void;
  get(idList: string[]): Promise<chrome.bookmarks.BookmarkTreeNode[]>;
  get(): never {
    throw new Error("not implemented");
  }

  create(bookmark: chrome.bookmarks.BookmarkCreateArg): Promise<chrome.bookmarks.BookmarkTreeNode>;
  create(bookmark: chrome.bookmarks.BookmarkCreateArg, callback: (result: chrome.bookmarks.BookmarkTreeNode) => void): void;
  create(): never {
    throw new Error("not implemented");
  }

  move(id: string, destination: chrome.bookmarks.BookmarkDestinationArg): Promise<chrome.bookmarks.BookmarkTreeNode>;
  move(id: string, destination: chrome.bookmarks.BookmarkDestinationArg, callback: (result: chrome.bookmarks.BookmarkTreeNode) => void): void;
  move(): never {
    throw new Error("not implemented");
  }

  update(id: string, changes: chrome.bookmarks.BookmarkChangesArg): Promise<chrome.bookmarks.BookmarkTreeNode>;
  update(id: string, changes: chrome.bookmarks.BookmarkChangesArg, callback: (result: chrome.bookmarks.BookmarkTreeNode) => void): void;
  update(): never {
    throw new Error("not implemented");
  }

  remove(id: string): Promise<void>;
  remove(id: string, callback: Function): void;
  remove(): never {
    throw new Error("not implemented");
  }

  getChildren(id: string, callback: (results: chrome.bookmarks.BookmarkTreeNode[]) => void): void;
  getChildren(id: string): Promise<chrome.bookmarks.BookmarkTreeNode[]>;
  getChildren(): never {
    throw new Error("not implemented");
  }

  getSubTree(id: string, callback: (results: chrome.bookmarks.BookmarkTreeNode[]) => void): void;
  getSubTree(id: string): Promise<chrome.bookmarks.BookmarkTreeNode[]>;
  getSubTree(): never {
    throw new Error("not implemented");
  }

  removeTree(id: string): Promise<void>;
  removeTree(id: string, callback: Function): void;
  removeTree(): never {
    throw new Error("not implemented");
  }

  onRemoved: chrome.bookmarks.BookmarkRemovedEvent = new TodoEvent();
  onImportEnded: chrome.bookmarks.BookmarkImportEndedEvent = new TodoEvent();
  onImportBegan: chrome.bookmarks.BookmarkImportBeganEvent = new TodoEvent();
  onChanged: chrome.bookmarks.BookmarkChangedEvent = new TodoEvent();
  onMoved: chrome.bookmarks.BookmarkMovedEvent = new TodoEvent();
  onCreated: chrome.bookmarks.BookmarkCreatedEvent = new TodoEvent();
  onChildrenReordered: chrome.bookmarks.BookmarkChildrenReordered = new TodoEvent();
}
