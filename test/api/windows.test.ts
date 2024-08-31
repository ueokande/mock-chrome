import { beforeEach, describe, expect, test } from "vitest";
import { MockWindows } from "../../src/api/windows";
import type { ErrorCapture } from "../../src/utils/promises";
import { TabManager } from "../../src/utils/tabs";

const mockErrorCapture: ErrorCapture = {
  runtime: {
    lastError: undefined,
  },
};

type Window = ReturnType<TabManager["createWindow"]>;

describe("MockWindows", () => {
  let tabManager: TabManager;
  let window1: Window;
  let window2: Window;

  beforeEach(() => {
    tabManager = new TabManager();
    window1 = tabManager.createWindow({ url: "https://example.com#1", type: "normal" });
    window2 = tabManager.createWindow({ url: "https://example.com#2", type: "popup" });
  });

  describe("get", () => {
    test("get window", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const got = await sut.get(window1.id);
      expect(got).toEqual(window1);
    });

    test("get window with populate", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const got = await sut.get(window1.id, { populate: true });
      expect(got.tabs).toHaveLength(1);
    });

    test("get window with typesQuery", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const got = await sut.get(window1.id, { windowTypes: ["normal"] });
      expect(got.tabs).toBeTruthy();

      await expect(sut.get(window1.id, { windowTypes: ["panel"] })).rejects.toThrow(`No window with id: ${window1.id}`);
    });

    test("throw error when window not found with typesQuery", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      await expect(sut.get(window1.id, { windowTypes: ["panel"] })).rejects.toThrow(`No window with id: ${window1.id}`);
    });
  });

  describe("getCurrent", () => {
    test("get current window", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const got = await sut.getCurrent();
      expect(got).toEqual(window2);
    });
  });

  describe("create", () => {
    test("create window with no params", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const created = await sut.create();

      expect(created).toHaveProperty("id");
      expect(created).toHaveProperty("focused", true);
      expect(tabManager.getAllWindows()).toHaveLength(3);
    });

    test("create window with unfocused", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const created = await sut.create({ focused: false });

      expect(created).toHaveProperty("id");
      expect(created).toHaveProperty("focused", false);
      expect(tabManager.getAllWindows()).toHaveLength(3);
    });
  });

  describe("getAll", () => {
    test("get all windows", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const got = await sut.getAll();
      expect(got).toEqual([window1, window2]);
    });

    test("get all windows with populate", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const got = await sut.getAll({ populate: true });
      expect(got[0].tabs).toHaveLength(1);
      expect(got[1].tabs).toHaveLength(1);
    });

    test("get all windows with typesQuery", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const got = await sut.getAll({ windowTypes: ["normal"] });
      expect(got).toHaveLength(1);
      expect(got[0].tabs).toBeTruthy();

      const got2 = await sut.getAll({ windowTypes: ["popup"] });
      expect(got2).toHaveLength(1);
    });
  });

  describe("update", () => {
    test("update window", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const updated = await sut.update(window2.id, { focused: false });

      expect(updated).toHaveProperty("id", window2.id);
      expect(updated).toHaveProperty("focused", false);
    });
  });

  describe("remove", () => {
    test("remove window", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      await sut.remove(window2.id);

      expect(tabManager.getAllWindows()).toHaveLength(1);
    });
  });

  describe("getLastFocused", () => {
    test("get last focused window", async () => {
      const sut = new MockWindows(mockErrorCapture, tabManager);

      const got = await sut.getLastFocused();

      expect(got).toEqual(window2);
    });
  });
});
