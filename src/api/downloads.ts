import { TodoEvent } from "./events";

type Interface = typeof chrome.downloads;

export class TodoDownloads implements Interface {
  search(query: chrome.downloads.DownloadQuery): Promise<chrome.downloads.DownloadItem[]>;
  search(query: chrome.downloads.DownloadQuery, callback: (results: chrome.downloads.DownloadItem[]) => void): void;
  search(): never {
    throw new Error("not implemented");
  }

  pause(downloadId: number): Promise<void>;
  pause(downloadId: number, callback: () => void): void;
  pause(): never {
    throw new Error("not implemented");
  }

  getFileIcon(downloadId: number, options?: chrome.downloads.GetFileIconOptions): Promise<string>;
  getFileIcon(downloadId: number, callback: (iconURL: string) => void): void;
  getFileIcon(downloadId: number, options: chrome.downloads.GetFileIconOptions, callback: (iconURL: string) => void): void;
  getFileIcon(): never {
    throw new Error("not implemented");
  }

  resume(downloadId: number): Promise<void>;
  resume(downloadId: number, callback: () => void): void;
  resume(): never {
    throw new Error("not implemented");
  }

  cancel(downloadId: number): Promise<void>;
  cancel(downloadId: number, callback: () => void): void;
  cancel(): never {
    throw new Error("not implemented");
  }

  download(options: chrome.downloads.DownloadOptions): Promise<number>;
  download(options: chrome.downloads.DownloadOptions, callback: (downloadId: number) => void): void;
  download(): never {
    throw new Error("not implemented");
  }

  open(downloadId: number): void;
  open(): never {
    throw new Error("not implemented");
  }

  show(downloadId: number): void;
  show(): never {
    throw new Error("not implemented");
  }

  showDefaultFolder(): void;
  showDefaultFolder(): never {
    throw new Error("not implemented");
  }

  erase(query: chrome.downloads.DownloadQuery): Promise<number[]>;
  erase(query: chrome.downloads.DownloadQuery, callback: (erasedIds: number[]) => void): void;
  erase(): never {
    throw new Error("not implemented");
  }

  removeFile(downloadId: number): Promise<void>;
  removeFile(downloadId: number, callback?: () => void): void;
  removeFile(): never {
    throw new Error("not implemented");
  }

  acceptDanger(downloadId: number): Promise<void>;
  acceptDanger(downloadId: number, callback: () => void): void;
  acceptDanger(): never {
    throw new Error("not implemented");
  }

  drag(downloadId: number): void;
  drag(): never {
    throw new Error("not implemented");
  }

  setShelfEnabled(enabled: boolean): void;
  setShelfEnabled(): never {
    throw new Error("not implemented");
  }

  setUiOptions(options: chrome.downloads.UiOptions): Promise<void>;
  setUiOptions(options: chrome.downloads.UiOptions, callback: () => void): void;
  setUiOptions(): never {
    throw new Error("not implemented");
  }

  onChanged: chrome.downloads.DownloadChangedEvent = new TodoEvent();
  onCreated: chrome.downloads.DownloadCreatedEvent = new TodoEvent();
  onErased: chrome.downloads.DownloadErasedEvent = new TodoEvent();
  onDeterminingFilename: chrome.downloads.DownloadDeterminingFilenameEvent = new TodoEvent();
}
