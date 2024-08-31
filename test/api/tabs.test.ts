import { beforeEach, describe, expect, test } from "vitest";
import { MockTabs } from "../../src/api/tabs";
import type { ErrorCapture } from "../../src/utils/promises";
import { TabManager } from "../../src/utils/tabs";

const mockErrorCapture: ErrorCapture = {
  runtime: {
    lastError: undefined,
  },
};

type Tab = ReturnType<TabManager["createTab"]>;

describe("MockTabs", () => {
  let tabManager: TabManager;
  let tab1: Tab;
  let tab2: Tab;
  let tab3: Tab;

  beforeEach(() => {
    tabManager = new TabManager();
    tab1 = tabManager.createTab({ url: "https://example.com#1" });
    tab2 = tabManager.createTab({ url: "https://example.com#2" });
    tab3 = tabManager.createTab({ url: "https://example.com#3" });
  });

  describe("get", () => {
    test("get tab", async () => {
      const sut = new MockTabs(mockErrorCapture, tabManager, { windowId: -1, tabId: -1 });
      const got = await sut.get(tab1.id);

      expect(got).toEqual(tab1);
    });
  });

  describe("getCurrent", () => {
    test("get current tab from the context", async () => {
      const context = {
        windowId: tab1.windowId,
        tabId: tab1.id,
      };
      const sut = new MockTabs(mockErrorCapture, tabManager, context);

      const got = await sut.getCurrent();

      expect(got).toEqual(tab1);
    });

    test("get current tab from background", async () => {
      const context = { windowId: -1, tabId: -1 };
      const sut = new MockTabs(mockErrorCapture, tabManager, context);

      const got = await sut.getCurrent();

      expect(got).toBeUndefined();
    });
  });

  describe("create", () => {
    test("create tab", async () => {
      const sut = new MockTabs(mockErrorCapture, tabManager, { windowId: -1, tabId: -1 });

      const created = await sut.create({ url: "https://example.com#4" });

      expect(created).toHaveProperty("url", "https://example.com#4");
    });
  });

  describe("move", () => {
    test("move tab", async () => {
      const sut = new MockTabs(mockErrorCapture, tabManager, { windowId: -1, tabId: -1 });
      const moved = await sut.move(tab1.id, { index: 1 });

      expect(moved).toHaveProperty("id", tab1.id);
      expect(moved).toHaveProperty("index", 1);
      expect(moved).toHaveProperty("url", "https://example.com#1");
    });
  });

  describe("update", () => {
    test("update the specified tab", async () => {
      const sut = new MockTabs(mockErrorCapture, tabManager, { windowId: -1, tabId: -1 });
      const updated = await sut.update(tab1.id, { url: "https://example.com#updated" });

      expect(updated).toHaveProperty("url", "https://example.com#updated");
    });

    test("update the current tab", async () => {
      const context = { windowId: tab1.windowId, tabId: tab1.id };
      const sut = new MockTabs(mockErrorCapture, tabManager, context);

      const updated = await sut.update({ url: "https://example.com#updated" });

      expect(updated).toHaveProperty("url", "https://example.com#updated");
    });
  });

  describe("remove", () => {
    test("remove tab", async () => {
      const sut = new MockTabs(mockErrorCapture, tabManager, { windowId: -1, tabId: -1 });
      await sut.remove(tab1.id);

      expect(tabManager.getAllTabs()).toHaveLength(2);
    });

    test("remove multiple tabs", async () => {
      const sut = new MockTabs(mockErrorCapture, tabManager, { windowId: -1, tabId: -1 });

      await sut.remove([tab2.id, tab3.id]);

      expect(tabManager.getAllTabs()).toHaveLength(1);
    });
  });
});
