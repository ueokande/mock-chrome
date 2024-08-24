export class TodoScripting {
  executeScript<Args extends any[], Result>(injection: chrome.scripting.ScriptInjection<Args, Result>): Promise<chrome.scripting.InjectionResult<Awaited<Result>>[]>;
  executeScript<Args extends any[], Result>(injection: chrome.scripting.ScriptInjection<Args, Result>, callback: (results: chrome.scripting.InjectionResult<Awaited<Result>>[]) => void): void;
  executeScript(): never {
    throw new Error("not implemented");
  }

  insertCSS(injection: chrome.scripting.CSSInjection): Promise<void>;
  insertCSS(injection: chrome.scripting.CSSInjection, callback: () => void): void;
  insertCSS(): never {
    throw new Error("not implemented");
  }

  removeCSS(injection: chrome.scripting.CSSInjection): Promise<void>;
  removeCSS(injection: chrome.scripting.CSSInjection, callback: () => void): void;
  removeCSS(): never {
    throw new Error("not implemented");
  }

  registerContentScripts(scripts: chrome.scripting.RegisteredContentScript[]): Promise<void>;
  registerContentScripts(scripts: chrome.scripting.RegisteredContentScript[], callback: () => void): void;
  registerContentScripts(): never {
    throw new Error("not implemented");
  }

  unregisterContentScripts(filter?: chrome.scripting.ContentScriptFilter): Promise<void>;
  unregisterContentScripts(callback: () => void): void;
  unregisterContentScripts(filter: chrome.scripting.ContentScriptFilter, callback: () => void): void;
  unregisterContentScripts(): never {
    throw new Error("not implemented");
  }

  getRegisteredContentScripts(filter?: chrome.scripting.ContentScriptFilter): Promise<chrome.scripting.RegisteredContentScript[]>;
  getRegisteredContentScripts(callback: (scripts: chrome.scripting.RegisteredContentScript[]) => void): void;
  getRegisteredContentScripts(filter: chrome.scripting.ContentScriptFilter, callback: (scripts: chrome.scripting.RegisteredContentScript[]) => void): void;
  getRegisteredContentScripts(): never {
    throw new Error("not implemented");
  }

  updateContentScripts(scripts: chrome.scripting.RegisteredContentScript[]): Promise<void>;
  updateContentScripts(scripts: chrome.scripting.RegisteredContentScript[], callback: () => void): void;
  updateContentScripts(): never {
    throw new Error("not implemented");
  }
}
