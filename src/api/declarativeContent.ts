import { TodoEvent } from "./events";

export class TodoDeclarativeContent {
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
