import { TodoEvent } from "./events";

export class TodoCommands {
  getAll(): Promise<chrome.commands.Command[]>;
  getAll(callback: (commands: chrome.commands.Command[]) => void): void;
  getAll(): never {
    throw new Error("not implemented");
  }

  onCommand: chrome.commands.CommandEvent = new TodoEvent();
}
