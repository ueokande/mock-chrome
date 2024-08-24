import { TodoEvent } from "./events";

export class TodoAlarms {
  create(alarmInfo: chrome.alarms.AlarmCreateInfo): Promise<void>;
  create(name: string, alarmInfo: chrome.alarms.AlarmCreateInfo): Promise<void>;
  create(alarmInfo: chrome.alarms.AlarmCreateInfo, callback: () => void): void;
  create(name: string, alarmInfo: chrome.alarms.AlarmCreateInfo, callback: () => void): void;
  create(): never {
    throw new Error("not implemented");
  }

  getAll(callback: (alarms: chrome.alarms.Alarm[]) => void): void;
  getAll(): Promise<chrome.alarms.Alarm[]>;
  getAll(): never {
    throw new Error("not implemented");
  }

  clearAll(): Promise<boolean>;
  clearAll(callback: (wasCleared: boolean) => void): void;
  clearAll(): never {
    throw new Error("not implemented");
  }

  clear(name?: string): Promise<boolean>;
  clear(callback: (wasCleared: boolean) => void): void;
  clear(name: string, callback: (wasCleared: boolean) => void): void;
  clear(callback: (wasCleared: boolean) => void): void;
  clear(): Promise<void>;
  clear(): never {
    throw new Error("not implemented");
  }

  get(callback: (alarm: chrome.alarms.Alarm) => void): void;
  get(): Promise<chrome.alarms.Alarm>;
  get(name: string, callback: (alarm: chrome.alarms.Alarm) => void): void;
  get(name: string): Promise<chrome.alarms.Alarm>;
  get(): never {
    throw new Error("not implemented");
  }

  onAlarm: chrome.alarms.AlarmEvent = new TodoEvent();
}
