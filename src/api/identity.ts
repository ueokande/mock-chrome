import { TodoEvent } from "./events";

export class TodoIdentity {
  AccountStatus: typeof chrome.identity.AccountStatus = {
    SYNC: "SYNC",
    ANY: "ANY",
  } as unknown as typeof chrome.identity.AccountStatus;

  clearAllCachedAuthTokens(): Promise<void>;
  clearAllCachedAuthTokens(callback: () => void): void;
  clearAllCachedAuthTokens(): never {
    throw new Error("not implemented");
  }

  getAccounts(): Promise<chrome.identity.AccountInfo[]>;
  getAccounts(callback: (accounts: chrome.identity.AccountInfo[]) => void): void;
  getAccounts(): never {
    throw new Error("not implemented");
  }

  getAuthToken(details: chrome.identity.TokenDetails): Promise<chrome.identity.GetAuthTokenResult>;
  getAuthToken(details: chrome.identity.TokenDetails, callback: (token?: string, grantedScopes?: string[]) => void): void;
  getAuthToken(): never {
    throw new Error("not implemented");
  }

  getProfileUserInfo(callback: (userInfo: chrome.identity.UserInfo) => void): void;
  getProfileUserInfo(details: chrome.identity.ProfileDetails, callback: (userInfo: chrome.identity.UserInfo) => void): void;
  getProfileUserInfo(details: chrome.identity.ProfileDetails): Promise<chrome.identity.UserInfo>;
  getProfileUserInfo(): never {
    throw new Error("not implemented");
  }

  removeCachedAuthToken(details: chrome.identity.TokenInformation): Promise<void>;
  removeCachedAuthToken(details: chrome.identity.TokenInformation, callback: () => void): void;
  removeCachedAuthToken(): never {
    throw new Error("not implemented");
  }

  launchWebAuthFlow(details: chrome.identity.WebAuthFlowOptions, callback: (responseUrl?: string) => void): void;
  launchWebAuthFlow(details: chrome.identity.WebAuthFlowOptions): Promise<string | undefined>;
  launchWebAuthFlow(): never {
    throw new Error("not implemented");
  }

  getRedirectURL(path?: string): string;
  getRedirectURL(): never {
    throw new Error("not implemented");
  }

  onSignInChanged: chrome.identity.SignInChangeEvent = new TodoEvent();
}
