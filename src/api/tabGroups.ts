import { TodoEvent } from "./events";

export class TodoTabGroups {
  TAB_GROUP_ID_NONE: typeof chrome.tabGroups.TAB_GROUP_ID_NONE = -1;

  get(groupId: number, callback: (group: chrome.tabGroups.TabGroup) => void): void;
  get(groupId: number): Promise<chrome.tabGroups.TabGroup>;
  get(): never {
    throw new Error("not implemented");
  }

  move(groupId: number, moveProperties: chrome.tabGroups.MoveProperties): Promise<chrome.tabGroups.TabGroup>;
  move(groupId: number, moveProperties: chrome.tabGroups.MoveProperties, callback: (group: chrome.tabGroups.TabGroup) => void): void;
  move(): never {
    throw new Error("not implemented");
  }

  query(queryInfo: chrome.tabGroups.QueryInfo, callback: (result: chrome.tabGroups.TabGroup[]) => void): void;
  query(queryInfo: chrome.tabGroups.QueryInfo): Promise<chrome.tabGroups.TabGroup[]>;
  query(): never {
    throw new Error("not implemented");
  }

  update(groupId: number, updateProperties: chrome.tabGroups.UpdateProperties): Promise<chrome.tabGroups.TabGroup>;
  update(groupId: number, updateProperties: chrome.tabGroups.UpdateProperties, callback: (group: chrome.tabGroups.TabGroup) => void): void;
  update(): never {
    throw new Error("not implemented");
  }

  onCreated: chrome.tabGroups.TabGroupCreatedEvent = new TodoEvent();
  onMoved: chrome.tabGroups.TabGroupMovedEvent = new TodoEvent();
  onRemoved: chrome.tabGroups.TabGroupRemovedEvent = new TodoEvent();
  onUpdated: chrome.tabGroups.TabGroupUpdated = new TodoEvent();
}
