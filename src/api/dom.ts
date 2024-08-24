type Interface = typeof chrome.dom;

export class TodoDom implements Interface {
  openOrClosedShadowRoot(element: HTMLElement): ShadowRoot;
  openOrClosedShadowRoot(): never {
    throw new Error("not implemented");
  }
}

export class MockDom extends TodoDom {}
