import { describe, expect, test, vi } from "vitest";
import { TabManager } from "../../src/utils/tabs";

describe("TabManager", () => {
  describe("initial state", () => {
    test("tabs and windows are empty", () => {
      const sut = new TabManager();

      expect(sut.getAllWindows()).toHaveLength(0);
      expect(sut.getAllTabs()).toHaveLength(0);
    });
  });

  describe("createTab", () => {
    test("default tab", () => {
      const sut = new TabManager();
      sut.createTab({});

      const tabs = sut.getAllTabs();
      expect(tabs).toHaveLength(1);

      const tab = sut.getAllTabs()[0];
      expect(tab).toHaveProperty("id");
      expect(tab).toHaveProperty("url", "about:blank");
      expect(tab).toHaveProperty("index", 0);
      expect(tab).toHaveProperty("active", true);
      expect(tab).toHaveProperty("selected", false);
      expect(tab).toHaveProperty("pinned", false);
      expect(tab).toHaveProperty("windowId");
    });

    test("create tabs", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com/#1" });
      const tab2 = sut.createTab({ url: "https://example.com/#2" });
      const tab3 = sut.createTab({ url: "https://example.com/#3" });

      const tabs = sut.getAllTabs();

      expect(sut.getAllTabs()).toHaveLength(3);
      expect(tab1.url).toBe("https://example.com/#1");
      expect(tab2.url).toBe("https://example.com/#2");
      expect(tab3.url).toBe("https://example.com/#3");
    });

    test("create tabs with active", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });

      expect(tab1.active).toBe(true);
      expect(tab2.active).toBe(false);

      const tab3 = sut.createTab({ url: "https://example.com#3", active: true });
      expect(tab1.active).toBe(false);
      expect(tab2.active).toBe(false);
      expect(tab3.active).toBe(true);
    });

    test("create tabs with index", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });

      expect(tab1.index).toBe(0);
      expect(tab2.index).toBe(1);

      const tab3 = sut.createTab({ url: "https://example.com#3", index: 0 });
      expect(tab1.index).toBe(1);
      expect(tab2.index).toBe(2);
      expect(tab3.index).toBe(0);

      const tab4 = sut.createTab({ url: "https://example.com#4", index: 3 });
      expect(tab1.index).toBe(1);
      expect(tab2.index).toBe(2);
      expect(tab3.index).toBe(0);
      expect(tab4.index).toBe(3);
    });

    test("create tabs with pinning", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });

      expect(tab1.index).toBe(0);
      expect(tab2.index).toBe(1);

      const tab3 = sut.createTab({ url: "https://example.com#3", pinned: true });
      const tab4 = sut.createTab({ url: "https://example.com#4", pinned: true });
      expect(tab1.index).toBe(2);
      expect(tab2.index).toBe(3);
      expect(tab3.index).toBe(0);
      expect(tab4.index).toBe(1);

      const tab5 = sut.createTab({ url: "https://example.com#5", pinned: true, index: 4 });
      const tab6 = sut.createTab({ url: "https://example.com#5", pinned: false, index: 0 });
      expect(tab1.index).toBe(4);
      expect(tab2.index).toBe(5);
      expect(tab3.index).toBe(0);
      expect(tab4.index).toBe(1);
      expect(tab5.index).toBe(2);
      expect(tab6.index).toBe(3);
    });

    test("create tabs with a window", () => {
      const sut = new TabManager();
      const tab = sut.createTab({ url: "https://example.com" });

      const allTabs = sut.getAllTabs();
      const allWindows = sut.getAllWindows();

      expect(allTabs).toHaveLength(1);
      expect(allWindows).toHaveLength(1);
      expect(allTabs[0].id).toBe(tab.id);
      expect(allTabs[0].windowId).toBe(tab.windowId);
      expect(allTabs[0].windowId).toBe(allWindows[0].id);
      expect(allWindows[0].tabs).toHaveLength(1);
    });

    test("create tabs with attaching to a window", () => {
      const sut = new TabManager();
      const win1 = sut.createWindow({});
      const win2 = sut.createWindow({});

      sut.createTab({ url: "https://example.com/#1", windowId: win1.id });
      sut.createTab({ url: "https://example.com/#2", windowId: win2.id });
      sut.createTab({ url: "https://example.com/#3", windowId: win1.id });

      const tabs1 = sut.getTabsOfWindow(win1.id!);
      const tabs2 = sut.getTabsOfWindow(win2.id!);
      expect(tabs1.map((t) => t.url)).toEqual(["about:blank", "https://example.com/#1", "https://example.com/#3"]);
      expect(tabs2.map((t) => t.url)).toEqual(["about:blank", "https://example.com/#2"]);
    });

    test("fail to create a tab with invalid windowId", () => {
      const sut = new TabManager();
      expect(() => sut.createTab({ url: "https://example.com", windowId: -10 })).toThrowError("No window with id: -10");
    });
  });

  describe("updateTab", () => {
    test("update tab", () => {
      const sut = new TabManager();
      const tab = sut.createTab({ url: "https://example.com" });
      const updatedTab = sut.updateTab(tab.id!, { url: "https://example.com/#new" });

      expect(updatedTab.url).toBe("https://example.com/#new");
    });

    test("update tab with active", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });

      expect(tab1.active).toBe(true);
      expect(tab2.active).toBe(false);

      const updatedTab = sut.updateTab(tab2.id!, { active: true });

      expect(tab1.active).toBe(false);
      expect(updatedTab.active).toBe(true);
    });

    test("update tab with pinning", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });

      expect(tab1.pinned).toBe(false);
      expect(tab2.pinned).toBe(false);
      expect(tab1.index).toBe(0);
      expect(tab2.index).toBe(1);

      sut.updateTab(tab2.id!, { pinned: true });

      expect(tab1.pinned).toBe(false);
      expect(tab2.pinned).toBe(true);
      expect(tab1.index).toBe(1);
      expect(tab2.index).toBe(0);
    });

    test("update tab with invalid id", () => {
      const sut = new TabManager();
      expect(() => sut.updateTab(-10, { url: "https://example.com" })).toThrowError("No tab with id: -10");
    });
  });

  describe("updateCurrentTab", () => {
    test("update current tab", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });

      expect(tab1.active).toBe(true);
      expect(tab2.active).toBe(false);

      const updatedTab = sut.updateCurrentTab({ url: "https://example.com/#new" });

      expect(tab1.url).toBe("https://example.com/#new");
      expect(tab2.url).toBe("https://example.com#2");
      expect(updatedTab).toBe(tab1);
    });

    test("fail to update current tab with no active tab", () => {
      const sut = new TabManager();
      expect(() => sut.updateCurrentTab({ url: "https://example.com" })).toThrowError("No active window.");
    });
  });

  describe("removeTab", () => {
    test("remove tab", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });

      sut.removeTab(tab1.id!);

      expect(sut.getAllTabs()).toHaveLength(1);
      expect(tab2.index).toBe(0);
    });

    test("remove tab with invalid id", () => {
      const sut = new TabManager();
      expect(() => sut.removeTab(-10)).toThrowError("No tab with id: -10");
    });
  });

  describe("moveTab", () => {
    test("move tab within the same window", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });
      const tab3 = sut.createTab({ url: "https://example.com#3" });

      sut.moveTab(tab3.id!, { index: 0 });

      expect(tab1.index).toBe(1);
      expect(tab2.index).toBe(2);
      expect(tab3.index).toBe(0);
    });

    test("move tab within the same window with window spec", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });
      const tab3 = sut.createTab({ url: "https://example.com#3" });

      sut.moveTab(tab3.id!, { index: 0, windowId: tab3.windowId });

      expect(tab1.index).toBe(1);
      expect(tab2.index).toBe(2);
      expect(tab3.index).toBe(0);
    });

    test("move tab to another window", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });
      const tab3 = sut.createTab({ url: "https://example.com#3" });

      const win1 = sut.createWindow({});

      sut.moveTab(tab3.id!, { index: 0, windowId: win1.id });

      expect(tab1.index).toBe(0);
      expect(tab2.index).toBe(1);
      expect(tab3.index).toBe(0);
    });
  });

  describe("duplicateTab", () => {
    test("duplicate tab", () => {
      const sut = new TabManager();
      const tab1 = sut.createTab({ url: "https://example.com#1" });
      const tab2 = sut.createTab({ url: "https://example.com#2" });
      const tab3 = sut.duplicateTab(tab1.id!);

      expect(tab1.url).toBe(tab3.url);
      expect(tab1.id).not.toBe(tab3.id);
      expect(tab1.index).toBe(0);
      expect(tab3.index).toBe(1);
      expect(tab2.index).toBe(2);
    });

    test("duplicate tab with invalid id", () => {
      const sut = new TabManager();
      expect(() => sut.duplicateTab(-10)).toThrowError("No tab with id: -10");
    });
  });

  describe("createWindow", () => {
    test("default window", () => {
      const sut = new TabManager();
      const win = sut.createWindow({});

      expect(win).toHaveProperty("id");
      expect(win.tabs).toHaveLength(1);

      const tabs = sut.getTabsOfWindow(win.id!);
      expect(tabs).toHaveLength(1);
      expect(tabs[0]).toHaveProperty("id");
      expect(tabs[0]).toHaveProperty("windowId", win.id);
      expect(tabs[0]).toHaveProperty("url", "about:blank");
    });

    test("create a new window with a url", () => {
      const sut = new TabManager();
      const win = sut.createWindow({ url: "https://example.com" });

      expect(win.tabs).toHaveLength(1);

      const tabs = sut.getTabsOfWindow(win.id!);
      expect(tabs).toHaveLength(1);
      expect(tabs[0]).toHaveProperty("id");
      expect(tabs[0]).toHaveProperty("windowId", win.id);
      expect(tabs[0]).toHaveProperty("url", "https://example.com");
    });

    test("create a new window with urls", () => {
      const sut = new TabManager();
      const win = sut.createWindow({
        url: ["https://example.com/#1", "https://example.com/#2", "https://example.com/#3"],
      });

      expect(win.tabs).toHaveLength(3);

      const tabs = sut.getTabsOfWindow(win.id!);

      expect(tabs).toHaveLength(3);
      expect(tabs[0].url).toBe("https://example.com/#1");
      expect(tabs[1].url).toBe("https://example.com/#2");
      expect(tabs[2].url).toBe("https://example.com/#3");
    });

    test("create a window with existing tab", () => {
      const sut = new TabManager();
      const win1 = sut.createWindow({
        url: ["https://example.com/#1", "https://example.com/#2", "https://example.com/#3"],
      });

      const tabs = sut.getAllTabs();
      const win2 = sut.createWindow({ tabId: tabs[1].id });

      const tabs1 = sut.getTabsOfWindow(win1.id!);
      const tabs2 = sut.getTabsOfWindow(win2.id!);

      expect(tabs1).toHaveLength(2);
      expect(tabs1.map((t) => t.url)).toEqual(["https://example.com/#1", "https://example.com/#3"]);
      expect(tabs2).toHaveLength(1);
      expect(tabs2[0].url).toBe("https://example.com/#2");
    });
  });
});
