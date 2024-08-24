type Interface = typeof chrome.system.cpu;

export class TodoSystemCpu implements Interface {
  getInfo(callback: (info: chrome.system.cpu.CpuInfo) => void): void;
  getInfo(): Promise<chrome.system.cpu.CpuInfo>;
  getInfo(): never {
    throw new Error("not implemented");
  }
}

export class MockSystemCpu extends TodoSystemCpu {}
