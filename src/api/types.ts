import { TodoEvent } from "./events";

export class TodoChromeSetting implements chrome.types.ChromeSetting {
  set(details: chrome.types.ChromeSettingSetDetails, callback?: Function): void;
  set() {
    throw new Error("not implemented");
  }

  clear(details: chrome.types.ChromeSettingClearDetails, callback?: Function): void;
  clear() {
    throw new Error("not implemented");
  }

  get(details: chrome.types.ChromeSettingGetDetails, callback?: chrome.types.DetailsCallback): void;
  get() {
    throw new Error("not implemented");
  }

  public onChange: chrome.types.ChromeSettingChangedEvent = new TodoEvent();
}

export class MockChromeSetting extends TodoChromeSetting {}
