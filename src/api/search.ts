export class TodoSearch {
  query(options: chrome.search.QueryInfo, callback: () => void): void;
  query(options: chrome.search.QueryInfo): Promise<void>;
  query(): never {
    throw new Error("not implemented");
  }
}
