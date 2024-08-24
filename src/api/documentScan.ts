type Interface = typeof chrome.documentScan;

export class TodoDocumentScan implements Interface {
  scan(options: chrome.documentScan.DocumentScanOptions, callback: (result: chrome.documentScan.DocumentScanCallbackArg) => void): void;
  scan(): never {
    throw new Error("not implemented");
  }
}

export class MockDocumentScan extends TodoDocumentScan {}
