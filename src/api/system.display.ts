import { TodoEvent } from "./events";

type Interface = typeof chrome.system.display;

export class TodoSystemDisplay implements Interface {
  DisplayPosition: typeof chrome.system.display.DisplayPosition = {
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left",
  } as unknown as typeof chrome.system.display.DisplayPosition;
  MirrorMode: typeof chrome.system.display.MirrorMode = {
    OFF: "off",
    NORMAL: "normal",
    MIXED: "mixed",
  } as unknown as typeof chrome.system.display.MirrorMode;

  getInfo(callback: (info: chrome.system.display.DisplayInfo[]) => void): void;
  getInfo(): Promise<chrome.system.display.DisplayInfo[]>;
  getInfo(flags: chrome.system.display.DisplayInfoFlags, callback: (info: chrome.system.display.DisplayInfo[]) => void): void;
  getInfo(flags: chrome.system.display.DisplayInfoFlags): Promise<chrome.system.display.DisplayInfo[]>;
  getInfo(): never {
    throw new Error("not implemented");
  }

  getDisplayLayout(callback: (layouts: chrome.system.display.DisplayLayout[]) => void): void;
  getDisplayLayout(): Promise<chrome.system.display.DisplayLayout[]>;
  getDisplayLayout(): never {
    throw new Error("not implemented");
  }

  setDisplayProperties(id: string, info: chrome.system.display.DisplayPropertiesInfo): Promise<void>;
  setDisplayProperties(id: string, info: chrome.system.display.DisplayPropertiesInfo, callback: () => void): void;
  setDisplayProperties(): never {
    throw new Error("not implemented");
  }

  setDisplayLayout(layouts: chrome.system.display.DisplayLayout[]): Promise<void>;
  setDisplayLayout(layouts: chrome.system.display.DisplayLayout[], callback: () => void): void;
  setDisplayLayout(): never {
    throw new Error("not implemented");
  }

  enableUnifiedDesktop(enabled: boolean): void;
  enableUnifiedDesktop(): never {
    throw new Error("not implemented");
  }

  overscanCalibrationStart(id: string): void;
  overscanCalibrationStart(): never {
    throw new Error("not implemented");
  }

  overscanCalibrationAdjust(id: string, delta: chrome.system.display.Insets): void;
  overscanCalibrationAdjust(): never {
    throw new Error("not implemented");
  }

  overscanCalibrationReset(id: string): void;
  overscanCalibrationReset(): never {
    throw new Error("not implemented");
  }

  overscanCalibrationComplete(id: string): void;
  overscanCalibrationComplete(): never {
    throw new Error("not implemented");
  }

  showNativeTouchCalibration(id: string, callback: (success: boolean) => void): void;
  showNativeTouchCalibration(id: string): Promise<boolean>;
  showNativeTouchCalibration(): never {
    throw new Error("not implemented");
  }

  startCustomTouchCalibration(id: string): void;
  startCustomTouchCalibration(): never {
    throw new Error("not implemented");
  }

  completeCustomTouchCalibration(pairs: chrome.system.display.TouchCalibrationPairs, bounds: chrome.system.display.Bounds): void;
  completeCustomTouchCalibration(): never {
    throw new Error("not implemented");
  }

  clearTouchCalibration(id: string): void;
  clearTouchCalibration(): never {
    throw new Error("not implemented");
  }

  setMirrorMode(info: chrome.system.display.MirrorModeInfo | chrome.system.display.MirrorModeInfoMixed, callback: () => void): void;
  setMirrorMode(info: chrome.system.display.MirrorModeInfo | chrome.system.display.MirrorModeInfoMixed): Promise<void>;
  setMirrorMode(): never {
    throw new Error("not implemented");
  }

  onDisplayChanged: chrome.events.Event<() => void> = new TodoEvent();
}

export class MockSystemDisplay extends TodoSystemDisplay {}
