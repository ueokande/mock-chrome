type Interface = typeof chrome.devtools.panels;

export class TodoDevtoolsPanels implements Interface {
  get elements(): chrome.devtools.panels.ElementsPanel {
    throw new Error("not implemented");
  }

  get sources(): chrome.devtools.panels.SourcesPanel {
    throw new Error("not implemented");
  }

  get themeName(): "default" | "dark" {
    throw new Error("not implemented");
  }

  create(title: string, iconPath: string, pagePath: string, callback?: (panel: chrome.devtools.panels.ExtensionPanel) => void): void;
  create(): never {
    throw new Error("not implemented");
  }

  setOpenResourceHandler(callback?: (resource: chrome.devtools.inspectedWindow.Resource) => void): void;
  setOpenResourceHandler(): never {
    throw new Error("not implemented");
  }

  openResource(url: string, lineNumber: number, callback?: () => void): void;
  openResource(url: string, lineNumber: number, columnNumber: number, callback?: (response: unknown) => unknown): void;
  openResource(): never {
    throw new Error("not implemented");
  }
}
