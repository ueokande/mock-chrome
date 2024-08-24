export class TodoEvent<T extends Function> implements chrome.events.Event<T> {
  addListener(callback: T): void;
  addListener(callback: T, filter?: chrome.webRequest.RequestFilter): void;
  addListener(): void {
    throw new Error("not implemented");
  }

  getRules(callback: (rules: chrome.events.Rule[]) => void): void;
  getRules(ruleIdentifiers: string[], callback: (rules: chrome.events.Rule[]) => void): void;
  getRules(): void {
    throw new Error("not implemented");
  }

  hasListener(callback: T): boolean;
  hasListener(): boolean {
    throw new Error("not implemented");
  }

  removeRules(ruleIdentifiers?: string[], callback?: () => void): void;
  removeRules(callback?: () => void): void;
  removeRules(): void {
    throw new Error("not implemented");
  }

  addRules(rules: chrome.events.Rule[], callback?: (rules: chrome.events.Rule[]) => void): void;
  addRules(): void {
    throw new Error("not implemented");
  }

  removeListener(callback: T): void;
  removeListener(): void {
    throw new Error("not implemented");
  }

  hasListeners(): boolean;
  hasListeners(): boolean {
    throw new Error("not implemented");
  }
}
