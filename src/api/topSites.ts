export class TodoTopSites {
  get(callback: (data: chrome.topSites.MostVisitedURL[]) => void): void;
  get(): Promise<chrome.topSites.MostVisitedURL[]>;
  get(): never {
    throw new Error("not implemented");
  }
}
