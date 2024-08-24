type Interface = typeof chrome.topSites;

export class TodoTopSites implements Interface {
  get(callback: (data: chrome.topSites.MostVisitedURL[]) => void): void;
  get(): Promise<chrome.topSites.MostVisitedURL[]>;
  get(): never {
    throw new Error("not implemented");
  }
}

export class MockTopSites extends TodoTopSites {}
