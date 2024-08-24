type Interfae = typeof chrome.search;

export class TodoSearch implements Interfae {
  query(options: chrome.search.QueryInfo, callback: () => void): void;
  query(options: chrome.search.QueryInfo): Promise<void>;
  query(): never {
    throw new Error("not implemented");
  }
}

export class MockSearch extends TodoSearch {}
