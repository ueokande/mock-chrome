import { TodoEvent } from "./events";

type Interface = typeof chrome.cookies;

export class TodoCookies implements Interface {
  getAllCookieStores(callback: (cookieStores: chrome.cookies.CookieStore[]) => void): void;
  getAllCookieStores(): Promise<chrome.cookies.CookieStore[]>;
  getAllCookieStores(): never {
    throw new Error("not implemented");
  }

  getAll(details: chrome.cookies.GetAllDetails, callback: (cookies: chrome.cookies.Cookie[]) => void): void;
  getAll(details: chrome.cookies.GetAllDetails): Promise<chrome.cookies.Cookie[]>;
  getAll(): never {
    throw new Error("not implemented");
  }

  set(details: chrome.cookies.SetDetails): Promise<chrome.cookies.Cookie | null>;
  set(details: chrome.cookies.SetDetails, callback: (cookie: chrome.cookies.Cookie | null) => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  remove(details: chrome.cookies.Details): Promise<chrome.cookies.Details>;
  remove(details: chrome.cookies.Details, callback?: (details: chrome.cookies.Details) => void): void;
  remove(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.cookies.Details, callback: (cookie: chrome.cookies.Cookie | null) => void): void;
  get(details: chrome.cookies.Details): Promise<chrome.cookies.Cookie | null>;
  get(): never {
    throw new Error("not implemented");
  }

  onChanged: chrome.cookies.CookieChangedEvent = new TodoEvent();
}
