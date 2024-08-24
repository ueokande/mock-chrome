export class TodoTabCapture {
  capture(options: chrome.tabCapture.CaptureOptions, callback: (stream: MediaStream | null) => void): void;
  capture(): never {
    throw new Error("not implemented");
  }

  getCapturedTabs(callback: (result: chrome.tabCapture.CaptureInfo[]) => void): void;
  getCapturedTabs(): never {
    throw new Error("not implemented");
  }

  getMediaStreamId(options: chrome.tabCapture.GetMediaStreamOptions, callback: (streamId: string) => void): void;
  getMediaStreamId(): never {
    throw new Error("not implemented");
  }

  onStatusChanged: chrome.tabCapture.CaptureStatusChangedEvent;
}
