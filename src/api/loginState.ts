import { TodoEvent } from "./events";

export class TodoLoginState {
  getProfileType(callback: (profileType: chrome.loginState.ProfileType) => void): void;
  getProfileType(): never {
    throw new Error("not implemented");
  }

  getSessionState(callback: (sessionState: chrome.loginState.SessionState) => void): void;
  getSessionState(): never {
    throw new Error("not implemented");
  }

  onSessionStateChanged: chrome.loginState.SessionStateChangedEvent = new TodoEvent();
}
