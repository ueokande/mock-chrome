export class TodoSystemMemory {
  getInfo(callback: (info: chrome.system.memory.MemoryInfo) => void): void;
  getInfo(): Promise<chrome.system.memory.MemoryInfo>;
  getInfo(): never {
    throw new Error("not implemented");
  }
}
