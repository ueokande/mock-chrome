import { TodoEvent } from "./events";

type Interface = typeof chrome.devtools.inspectedWindow;

export class TodoDevtoolsInspectedWindow implements Interface {
  get tabId(): number {
    throw new Error("not implemented");
  }

  reload(reloadOptions?: chrome.devtools.inspectedWindow.ReloadOptions): void;
  reload(): never {
    throw new Error("not implemented");
  }

  eval<T>(expression: string, callback?: (result: T, exceptionInfo: chrome.devtools.inspectedWindow.EvaluationExceptionInfo) => void): void;
  eval<T>(expression: string, options?: chrome.devtools.inspectedWindow.EvalOptions, callback?: (result: T, exceptionInfo: chrome.devtools.inspectedWindow.EvaluationExceptionInfo) => void): void;
  eval(): never {
    throw new Error("not implemented");
  }

  getResources(callback: (resources: chrome.devtools.inspectedWindow.Resource[]) => void): void;
  getResources(): never {
    throw new Error("not implemented");
  }

  onResourceAdded: chrome.devtools.inspectedWindow.ResourceAddedEvent = new TodoEvent();
  onResourceContentCommitted: chrome.devtools.inspectedWindow.ResourceContentCommittedEvent = new TodoEvent();
}

export class MockDevtoolsInspectedWindow extends TodoDevtoolsInspectedWindow {}
