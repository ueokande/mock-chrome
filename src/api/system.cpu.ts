export class TodoSystemCpu {
  getInfo(callback: (info: chrome.system.cpu.CpuInfo) => void): void;
  getInfo(): Promise<chrome.system.cpu.CpuInfo>;
  getInfo(): never {
    throw new Error("not implemented");
  }
}
