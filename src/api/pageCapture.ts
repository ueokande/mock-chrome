export class TodoPageCapture {
  saveAsMHTML(details: chrome.pageCapture.SaveDetails, callback: (mhtmlData?: Blob) => void): void;
  saveAsMHTML(): never {
    throw new Error("not implemented");
  }
}
