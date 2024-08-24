type Interface = typeof chrome.sidePanel;

export class TodoSidePanel implements Interface {
  getOptions(options: chrome.sidePanel.GetPanelOptions, callback: (options: chrome.sidePanel.PanelOptions) => void): void;
  getOptions(options: chrome.sidePanel.GetPanelOptions): Promise<chrome.sidePanel.PanelOptions>;
  getOptions(): never {
    throw new Error("not implemented");
  }

  getPanelBehavior(callback: (behavior: chrome.sidePanel.PanelBehavior) => void): void;
  getPanelBehavior(): Promise<chrome.sidePanel.PanelBehavior>;
  getPanelBehavior(): never {
    throw new Error("not implemented");
  }

  open(options: chrome.sidePanel.OpenOptions, callback: () => void): void;
  open(options: chrome.sidePanel.OpenOptions): Promise<void>;
  open(): never {
    throw new Error("not implemented");
  }

  setOptions(options: chrome.sidePanel.PanelOptions, callback: () => void): void;
  setOptions(options: chrome.sidePanel.PanelOptions): Promise<void>;
  setOptions(): never {
    throw new Error("not implemented");
  }

  setPanelBehavior(behavior: chrome.sidePanel.PanelBehavior, callback: () => void): void;
  setPanelBehavior(behavior: chrome.sidePanel.PanelBehavior): Promise<void>;
  setPanelBehavior(): never {
    throw new Error("not implemented");
  }
}

export class MockSidePanel extends TodoSidePanel {}
