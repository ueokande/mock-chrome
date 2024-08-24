type Interface = typeof chrome.pageCapture;

export class TodoPageCapture implements Interface {
  saveAsMHTML(details: chrome.pageCapture.SaveDetails, callback: (mhtmlData?: Blob) => void): void;
  saveAsMHTML(details: chrome.pageCapture.SaveDetails): Promise<Blob | undefined>;
  saveAsMHTML(): never {
    throw new Error("not implemented");
  }
}

export class MockPageCapture extends TodoPageCapture {}
