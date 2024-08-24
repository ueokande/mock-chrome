import { TodoEvent } from "./events";

type Interface = typeof chrome.fontSettings;

export class TodoFontSettings implements Interface {
  setDefaultFontSize(details: chrome.fontSettings.DefaultFontSizeDetails): Promise<void>;
  setDefaultFontSize(details: chrome.fontSettings.DefaultFontSizeDetails, callback: Function): void;
  setDefaultFontSize(): never {
    throw new Error("not implemented");
  }

  getFont(details: chrome.fontSettings.FontDetails): Promise<chrome.fontSettings.FontDetailsResult>;
  getFont(details: chrome.fontSettings.FontDetails, callback: (details: chrome.fontSettings.FontDetailsResult) => void): void;
  getFont(): never {
    throw new Error("not implemented");
  }

  getDefaultFontSize(details?: Object): Promise<chrome.fontSettings.FontSizeDetails>;
  getDefaultFontSize(callback: (options: chrome.fontSettings.FontSizeDetails) => void): void;
  getDefaultFontSize(details: Object, callback: (options: chrome.fontSettings.FontSizeDetails) => void): void;
  getDefaultFontSize(): never {
    throw new Error("not implemented");
  }

  getMinimumFontSize(details?: object): Promise<chrome.fontSettings.FontSizeDetails>;
  getMinimumFontSize(callback: (options: chrome.fontSettings.FontSizeDetails) => void): void;
  getMinimumFontSize(details: object, callback: (options: chrome.fontSettings.FontSizeDetails) => void): void;
  getMinimumFontSize(): never {
    throw new Error("not implemented");
  }

  setMinimumFontSize(details: chrome.fontSettings.SetFontSizeDetails): Promise<void>;
  setMinimumFontSize(details: chrome.fontSettings.SetFontSizeDetails, callback: Function): void;
  setMinimumFontSize(): never {
    throw new Error("not implemented");
  }

  getDefaultFixedFontSize(details?: Object): Promise<chrome.fontSettings.FontSizeDetails>;
  getDefaultFixedFontSize(callback: (details: chrome.fontSettings.FontSizeDetails) => void): void;
  getDefaultFixedFontSize(details: Object, callback: (details: chrome.fontSettings.FontSizeDetails) => void): void;
  getDefaultFixedFontSize(): never {
    throw new Error("not implemented");
  }

  clearDefaultFontSize(details?: Object): Promise<void>;
  clearDefaultFontSize(callback: Function): void;
  clearDefaultFontSize(details: Object, callback: Function): void;
  clearDefaultFontSize(): never {
    throw new Error("not implemented");
  }

  setDefaultFixedFontSize(details: chrome.fontSettings.SetFontSizeDetails): Promise<void>;
  setDefaultFixedFontSize(details: chrome.fontSettings.SetFontSizeDetails, callback: Function): void;
  setDefaultFixedFontSize(): never {
    throw new Error("not implemented");
  }

  clearFont(details: chrome.fontSettings.FontDetails): Promise<void>;
  clearFont(details: chrome.fontSettings.FontDetails, callback: Function): void;
  clearFont(): never {
    throw new Error("not implemented");
  }

  setFont(details: chrome.fontSettings.SetFontDetails): Promise<void>;
  setFont(details: chrome.fontSettings.SetFontDetails, callback: Function): void;
  setFont(): never {
    throw new Error("not implemented");
  }

  clearMinimumFontSize(details?: Object): Promise<void>;
  clearMinimumFontSize(callback: Function): void;
  clearMinimumFontSize(details: Object, callback: Function): void;
  clearMinimumFontSize(): never {
    throw new Error("not implemented");
  }

  getFontList(): Promise<chrome.fontSettings.FontName[]>;
  getFontList(callback: (results: chrome.fontSettings.FontName[]) => void): void;
  getFontList(): never {
    throw new Error("not implemented");
  }

  clearDefaultFixedFontSize(details: Object): Promise<void>;
  clearDefaultFixedFontSize(details: Object, callback: Function): void;
  clearDefaultFixedFontSize(): never {
    throw new Error("not implemented");
  }

  onDefaultFixedFontSizeChanged: chrome.fontSettings.DefaultFixedFontSizeChangedEvent = new TodoEvent();
  onDefaultFontSizeChanged: chrome.fontSettings.DefaultFontSizeChangedEvent = new TodoEvent();
  onMinimumFontSizeChanged: chrome.fontSettings.MinimumFontSizeChangedEvent = new TodoEvent();
  onFontChanged: chrome.fontSettings.FontChangedEvent = new TodoEvent();
}
