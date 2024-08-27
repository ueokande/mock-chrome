import { describe, expect, test, vi } from "vitest";
import { newTodoApi } from "../../src/todoFactory";
import { asyncify } from "../../src/utils/promises";

describe("asyncify", () => {
  const chrome = newTodoApi();

  describe("return as Promise", () => {
    test.each([() => "result", () => Promise.resolve("result")])("should return a value as Promise", async (fn) => {
      const ret = asyncify(chrome, [], undefined, fn);
      await expect(ret).resolves.toBe("result");
    });

    test.each([
      () => {
        throw new Error("error");
      },
      () => Promise.reject(new Error("error")),
    ])("should reject an error as Promise", async (fn) => {
      const ret = asyncify(chrome, [], undefined, fn);
      await expect(ret).rejects.toThrow("error");
    });
  });

  describe("return as callback", () => {
    test.each([() => "result", () => Promise.resolve("result")])("should return a value via callback for sync value", async (fn) => {
      const spyLastError = vi.spyOn(chrome.runtime, "lastError", "set").mockReturnValue(undefined);
      const callback = vi.fn();

      await new Promise((resolve) => {
        callback.mockImplementation(() => {
          resolve(undefined);
        });
        const ret = asyncify(chrome, [], callback, fn);
        expect(ret).toBeUndefined();
      });

      expect(spyLastError).toHaveBeenCalledOnce();
      expect(spyLastError).toHaveBeenCalledWith(undefined);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith("result");
    });

    test.each([
      () => {
        throw new Error("error");
      },
      () => Promise.reject(new Error("error")),
    ])("should return an error via callback for sync error", async (fn) => {
      const spyLastError = vi.spyOn(chrome.runtime, "lastError", "set").mockReturnValue(undefined);
      const callback = vi.fn();

      await new Promise((resolve) => {
        callback.mockImplementation(() => {
          resolve(undefined);
        });
        const ret = asyncify(chrome, [], callback, fn);
        expect(ret).toBeUndefined();
      });

      expect(spyLastError).toHaveBeenCalledTimes(2);
      expect(spyLastError).toHaveBeenNthCalledWith(1, new Error("error"));
      expect(spyLastError).toHaveBeenNthCalledWith(2, undefined);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith(undefined);
    });
  });
});
