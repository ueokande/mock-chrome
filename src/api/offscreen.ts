type Interface = typeof chrome.offscreen;

export class TodoOffscreen implements Interface {
  Reason: typeof chrome.offscreen.Reason = {
    TESTING: "TESTING",
    AUDIO_PLAYBACK: "AUDIO_PLAYBACK",
    IFRAME_SCRIPTING: "IFRAME_SCRIPTING",
    DOM_SCRAPING: "DOM_SCRAPING",
    BLOBS: "BLOBS",
    DOM_PARSER: "DOM_PARSER",
    USER_MEDIA: "USER_MEDIA",
    DISPLAY_MEDIA: "DISPLAY_MEDIA",
    WEB_RTC: "WEB_RTC",
    CLIPBOARD: "CLIPBOARD",
  } as unknown as typeof chrome.offscreen.Reason;

  createDocument(parameters: chrome.offscreen.CreateParameters): Promise<void>;
  createDocument(parameters: chrome.offscreen.CreateParameters, callback: () => void): void;
  createDocument(): never {
    throw new Error("not implemented");
  }

  closeDocument(): Promise<void>;
  closeDocument(callback: () => void): void;
  closeDocument(): never {
    throw new Error("not implemented");
  }

  hasDocument(): Promise<boolean>;
  hasDocument(callback: (result: boolean) => void): void;
  hasDocument(): never {
    throw new Error("not implemented");
  }
}
