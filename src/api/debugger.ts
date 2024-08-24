import { TodoEvent } from "./events";

export class TodoDebugger {
  attach(target: chrome.debugger.Debuggee, requiredVersion: string): Promise<void>;
  attach(target: chrome.debugger.Debuggee, requiredVersion: string, callback: () => void): void;
  attach(): never {
    throw new Error("not implemented");
  }

  detach(target: chrome.debugger.Debuggee): Promise<void>;
  detach(target: chrome.debugger.Debuggee, callback: () => void): void;
  detach(): never {
    throw new Error("not implemented");
  }

  sendCommand(target: chrome.debugger.Debuggee, method: string, commandParams?: Object): Promise<Object>;
  sendCommand(target: chrome.debugger.Debuggee, method: string, commandParams?: Object, callback?: (result?: Object) => void): void;
  sendCommand(): never {
    throw new Error("not implemented");
  }

  getTargets(): Promise<chrome.debugger.TargetInfo[]>;
  getTargets(callback: (result: chrome.debugger.TargetInfo[]) => void): void;
  getTargets(): never {
    throw new Error("not implemented");
  }

  onDetach: chrome.debugger.DebuggerDetachedEvent = new TodoEvent();
  onEvent: chrome.debugger.DebuggerEventEvent = new TodoEvent();
}
