import { TodoEvent } from "./events";

type Interface = typeof chrome.management;

export class TodoManagement implements Interface {
  setEnabled(id: string, enabled: boolean): Promise<void>;
  setEnabled(id: string, enabled: boolean, callback: () => void): void;
  setEnabled(): never {
    throw new Error("not implemented");
  }

  getPermissionWarningsById(id: string): Promise<string[]>;
  getPermissionWarningsById(id: string, callback: (permissionWarnings: string[]) => void): void;
  getPermissionWarningsById(): never {
    throw new Error("not implemented");
  }

  get(id: string): Promise<chrome.management.ExtensionInfo>;
  get(id: string, callback: (result: chrome.management.ExtensionInfo) => void): void;
  get(): never {
    throw new Error("not implemented");
  }

  getAll(): Promise<chrome.management.ExtensionInfo[]>;
  getAll(callback: (result: chrome.management.ExtensionInfo[]) => void): void;
  getAll(): never {
    throw new Error("not implemented");
  }

  getPermissionWarningsByManifest(manifestStr: string): Promise<string[]>;
  getPermissionWarningsByManifest(manifestStr: string, callback: (permissionwarnings: string[]) => void): void;
  getPermissionWarningsByManifest(): never {
    throw new Error("not implemented");
  }

  launchApp(id: string): Promise<void>;
  launchApp(id: string, callback: () => void): void;
  launchApp(): never {
    throw new Error("not implemented");
  }

  uninstall(id: string, options?: chrome.management.UninstallOptions): Promise<void>;
  uninstall(id: string, callback: () => void): void;
  uninstall(id: string, options: chrome.management.UninstallOptions, callback: () => void): void;
  uninstall(id: string): Promise<void>;
  uninstall(id: string, callback: () => void): void;
  uninstall(): never {
    throw new Error("not implemented");
  }

  getSelf(): Promise<chrome.management.ExtensionInfo>;
  getSelf(callback: (result: chrome.management.ExtensionInfo) => void): void;
  getSelf(): never {
    throw new Error("not implemented");
  }

  uninstallSelf(options?: chrome.management.UninstallOptions): Promise<void>;
  uninstallSelf(callback: () => void): void;
  uninstallSelf(options: chrome.management.UninstallOptions, callback: () => void): void;
  uninstallSelf(): Promise<void>;
  uninstallSelf(callback: () => void): void;
  uninstallSelf(): never {
    throw new Error("not implemented");
  }

  createAppShortcut(id: string): Promise<void>;
  createAppShortcut(id: string, callback: () => void): void;
  createAppShortcut(): never {
    throw new Error("not implemented");
  }

  setLaunchType(id: string, launchType: string): Promise<void>;
  setLaunchType(id: string, launchType: string, callback: () => void): void;
  setLaunchType(): never {
    throw new Error("not implemented");
  }

  generateAppForLink(url: string, title: string): Promise<chrome.management.ExtensionInfo>;
  generateAppForLink(url: string, title: string, callback: (result: chrome.management.ExtensionInfo) => void): void;
  generateAppForLink(): never {
    throw new Error("not implemented");
  }

  onDisabled: chrome.management.ManagementDisabledEvent = new TodoEvent();
  onUninstalled: chrome.management.ManagementUninstalledEvent = new TodoEvent();
  onInstalled: chrome.management.ManagementInstalledEvent = new TodoEvent();
  onEnabled: chrome.management.ManagementEnabledEvent = new TodoEvent();
}

export class MockManagement extends TodoManagement {}
