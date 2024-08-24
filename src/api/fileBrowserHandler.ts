import { TodoEvent } from "./events";

type Interface = typeof chrome.fileBrowserHandler;

export class TodoFileBrowserHandler implements Interface {
  selectFile(selectionParams: chrome.fileBrowserHandler.SelectionParams, callback: (result: chrome.fileBrowserHandler.SelectionResult) => void): void;
  selectFile(): never {
    throw new Error("not implemented");
  }

  onExecute: chrome.fileBrowserHandler.FileBrowserHandlerExecuteEvent = new TodoEvent();
}

export class MockFileBrowserHandler extends TodoFileBrowserHandler {}
