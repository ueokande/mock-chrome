import { TodoEvent } from "./events";

export class TodoWebNavigation {
  getFrame(details: chrome.webNavigation.GetFrameDetails, callback: (details: chrome.webNavigation.GetFrameResultDetails | null) => void): void;
  getFrame(details: chrome.webNavigation.GetFrameDetails): Promise<chrome.webNavigation.GetFrameResultDetails | null>;
  getFrame(): never {
    throw new Error("not implemented");
  }

  getAllFrames(details: chrome.webNavigation.GetAllFrameDetails, callback: (details: chrome.webNavigation.GetAllFrameResultDetails[] | null) => void): void;
  getAllFrames(details: chrome.webNavigation.GetAllFrameDetails): Promise<chrome.webNavigation.GetAllFrameResultDetails[] | null>;
  getAllFrames(): never {
    throw new Error("not implemented");
  }

  onReferenceFragmentUpdated: chrome.webNavigation.WebNavigationTransitionalEvent = new TodoEvent();
  onCompleted: chrome.webNavigation.WebNavigationFramedEvent = new TodoEvent();
  onHistoryStateUpdated: chrome.webNavigation.WebNavigationTransitionalEvent = new TodoEvent();
  onCreatedNavigationTarget: chrome.webNavigation.WebNavigationSourceEvent = new TodoEvent();
  onTabReplaced: chrome.webNavigation.WebNavigationReplacementEvent = new TodoEvent();
  onBeforeNavigate: chrome.webNavigation.WebNavigationParentedEvent = new TodoEvent();
  onCommitted: chrome.webNavigation.WebNavigationTransitionalEvent = new TodoEvent();
  onDOMContentLoaded: chrome.webNavigation.WebNavigationFramedEvent = new TodoEvent();
  onErrorOccurred: chrome.webNavigation.WebNavigationFramedErrorEvent = new TodoEvent();
}
