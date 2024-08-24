export class TodoDesktopCapture {
  chooseDesktopMedia(sources: string[], callback: (streamId: string, options: chrome.desktopCapture.StreamOptions) => void): number;
  chooseDesktopMedia(sources: string[], targetTab: chrome.tabs.Tab, callback: (streamId: string, options: chrome.desktopCapture.StreamOptions) => void): number;
  chooseDesktopMedia(): never {
    throw new Error("not implemented");
  }

  cancelChooseDesktopMedia(desktopMediaRequestId: number): void;
  cancelChooseDesktopMedia(): never {
    throw new Error("not implemented");
  }
}
