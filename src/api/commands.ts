import { TodoEvent } from "./events";

type Interface = typeof chrome.commands;

export class TodoCommands implements Interface {
  getAll(): Promise<chrome.commands.Command[]>;
  getAll(callback: (commands: chrome.commands.Command[]) => void): void;
  getAll(): never {
    throw new Error("not implemented");
  }

  onCommand: chrome.commands.CommandEvent = new TodoEvent();
}
