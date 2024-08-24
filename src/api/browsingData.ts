export class TodoBrowsingData {
  settings(): Promise<chrome.browsingData.SettingsResult>;
  settings(callback: (result: chrome.browsingData.SettingsResult) => void): void;
  settings(): never {
    throw new Error("not implemented");
  }

  removePluginData(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removePluginData(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removePluginData(): never {
    throw new Error("not implemented");
  }

  removeServiceWorkers(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeServiceWorkers(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeServiceWorkers(): never {
    throw new Error("not implemented");
  }

  removeFormData(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeFormData(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeFormData(): never {
    throw new Error("not implemented");
  }

  removeFileSystems(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeFileSystems(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeFileSystems(): never {
    throw new Error("not implemented");
  }

  remove(options: chrome.browsingData.RemovalOptions, dataToRemove: chrome.browsingData.DataTypeSet): Promise<void>;
  remove(options: chrome.browsingData.RemovalOptions, dataToRemove: chrome.browsingData.DataTypeSet, callback: () => void): void;
  remove(): never {
    throw new Error("not implemented");
  }

  removePasswords(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removePasswords(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removePasswords(): never {
    throw new Error("not implemented");
  }

  removeCookies(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeCookies(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeCookies(): never {
    throw new Error("not implemented");
  }

  removeWebSQL(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeWebSQL(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeWebSQL(): never {
    throw new Error("not implemented");
  }

  removeAppcache(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeAppcache(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeAppcache(): never {
    throw new Error("not implemented");
  }

  removeCacheStorage(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeCacheStorage(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeCacheStorage(): never {
    throw new Error("not implemented");
  }

  removeDownloads(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeDownloads(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeDownloads(): never {
    throw new Error("not implemented");
  }

  removeLocalStorage(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeLocalStorage(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeLocalStorage(): never {
    throw new Error("not implemented");
  }

  removeCache(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeCache(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeCache(): never {
    throw new Error("not implemented");
  }

  removeHistory(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeHistory(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeHistory(): never {
    throw new Error("not implemented");
  }

  removeIndexedDB(options: chrome.browsingData.RemovalOptions): Promise<void>;
  removeIndexedDB(options: chrome.browsingData.RemovalOptions, callback: () => void): void;
  removeIndexedDB(): never {
    throw new Error("not implemented");
  }
}
