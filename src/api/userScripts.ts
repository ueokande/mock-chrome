type Interface = typeof chrome.userScripts;

export class TodoUserScripts implements Interface {
  configureWorld(properties: chrome.userScripts.WorldProperties): Promise<void>;
  configureWorld(properties: chrome.userScripts.WorldProperties, callback: () => void): void;
  configureWorld(): never {
    throw new Error("not implemented");
  }

  getScripts(filter?: chrome.userScripts.UserScriptFilter): Promise<chrome.userScripts.RegisteredUserScript[]>;
  getScripts(filter: chrome.userScripts.UserScriptFilter, callback: (scripts: chrome.userScripts.RegisteredUserScript[]) => void): void;
  getScripts(): never {
    throw new Error("not implemented");
  }

  register(scripts: chrome.userScripts.RegisteredUserScript[]): Promise<void>;
  register(scripts: chrome.userScripts.RegisteredUserScript[], callback: () => void): void;
  register(): never {
    throw new Error("not implemented");
  }

  unregister(filter?: chrome.userScripts.UserScriptFilter): Promise<void>;
  unregister(filter: chrome.userScripts.UserScriptFilter, callback: () => void): void;
  unregister(): never {
    throw new Error("not implemented");
  }

  update(scripts: chrome.userScripts.RegisteredUserScript[]): Promise<void>;
  update(scripts: chrome.userScripts.RegisteredUserScript[], callback: () => void): void;
  update(): never {
    throw new Error("not implemented");
  }
}
