import { TodoEvent } from "./events";

type Interface = typeof chrome.instanceID;

export class TodoInstanceID implements Interface {
  deleteID(): Promise<void>;
  deleteID(callback: () => void): void;
  deleteID(): never {
    throw new Error("not implemented");
  }

  deleteToken(deleteTokenParams: chrome.instanceID.DeleteTokenParams): Promise<void>;
  deleteToken(deleteTokenParams: chrome.instanceID.DeleteTokenParams, callback: () => void): void;
  deleteToken(): never {
    throw new Error("not implemented");
  }

  getCreationTime(): Promise<number>;
  getCreationTime(callback: (creationTime: number) => void): void;
  getCreationTime(): never {
    throw new Error("not implemented");
  }

  getID(): Promise<string>;
  getID(callback: (instanceID: string) => void): void;
  getID(): never {
    throw new Error("not implemented");
  }

  getToken(getTokenParams: chrome.instanceID.GetTokenParams): Promise<string>;
  getToken(getTokenParams: chrome.instanceID.GetTokenParams, callback: (token: string) => void): void;
  getToken(): never {
    throw new Error("not implemented");
  }

  onTokenRefresh: chrome.instanceID.TokenRefreshEvent = new TodoEvent();
}
