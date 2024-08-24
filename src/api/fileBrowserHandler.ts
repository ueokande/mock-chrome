import { TodoEvent } from "./events";

export class TodoFileBrowserHandler {
  selectFile(selectionParams: chrome.fileBrowserHandler.SelectionParams, callback: (result: chrome.fileBrowserHandler.SelectionResult) => void): void;
  selectFile(): never {
    throw new Error("not implemented");
  }

  onExecute: chrome.fileBrowserHandler.FileBrowserHandlerExecuteEvent = new TodoEvent();
}
