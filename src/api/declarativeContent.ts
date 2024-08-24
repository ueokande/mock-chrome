import { TodoEvent } from "./events";

type Interface = typeof chrome.declarativeContent;

export class TodoDeclarativeContent implements Interface {
  public PageStateMatcherProperties = class TodoPageStateMatcherProperties {
    pageUrl?: chrome.declarativeContent.PageStateUrlDetails | undefined;
    css?: string[] | undefined;
    isBookmarked?: boolean | undefined;
  };

  public PageStateMatcher: typeof chrome.declarativeContent.PageStateMatcher = class {};

  public ShowAction: typeof chrome.declarativeContent.ShowAction = class {};

  public ShowPageAction: typeof chrome.declarativeContent.ShowPageAction = class {};

  public SetIcon: typeof chrome.declarativeContent.SetIcon = class {};

  public onPageChanged: chrome.declarativeContent.PageChangedEvent = new TodoEvent();
}

export class MockDeclarativeContent extends TodoDeclarativeContent {}
