import { TodoEvent } from "./events";

type Interface = typeof chrome.loginState;

export class TodoLoginState implements Interface {
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

export class MockLoginState extends TodoLoginState {}
