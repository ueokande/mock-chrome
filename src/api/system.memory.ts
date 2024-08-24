type Interface = typeof chrome.system.memory;

export class TodoSystemMemory implements Interface {
  getInfo(callback: (info: chrome.system.memory.MemoryInfo) => void): void;
  getInfo(): Promise<chrome.system.memory.MemoryInfo>;
  getInfo(): never {
    throw new Error("not implemented");
  }
}
