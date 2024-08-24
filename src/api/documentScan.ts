export class TodoDocumentScan {
  scan(options: chrome.documentScan.DocumentScanOptions, callback: (result: chrome.documentScan.DocumentScanCallbackArg) => void): void;
  scan(): never {
    throw new Error("not implemented");
  }
}
