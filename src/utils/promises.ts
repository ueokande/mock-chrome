export function asyncify<Args extends unknown[], R>(chrome: typeof window.chrome, args: Args, callback: ((result: R) => void) | undefined, fn: (...args: Args) => R | Promise<R>): Promise<R> | undefined {
  if (typeof callback === "undefined") {
    try {
      const result = fn(...args);
      if (result instanceof Promise) {
        return result;
      }
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  try {
    const result = fn(...args);
    if (result instanceof Promise) {
      result
        .then((resolved: R) => {
          chrome.runtime.lastError = undefined;
          callback(resolved);
        })
        .catch((err) => {
          chrome.runtime.lastError = err;
          callback(undefined as R);
          chrome.runtime.lastError = undefined;
        });
      return;
    }

    chrome.runtime.lastError = undefined;
    callback(result);
  } catch (error) {
    if (error instanceof Error) {
      chrome.runtime.lastError = error;
    } else {
      chrome.runtime.lastError = new Error(String(error));
    }
    callback(undefined as R);
    chrome.runtime.lastError = undefined;
  }
}
