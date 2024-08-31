export class Counter {
  private count = 0;

  next() {
    return this.count++;
  }
}

export type TabWithId = chrome.tabs.Tab & { id: number };
export type WindowWithId = chrome.windows.Window & { id: number };

export class TabManager {
  private readonly tabs: Map<number, TabWithId> = new Map();
  private readonly windows: Map<number, WindowWithId> = new Map();

  private readonly tabIdCounter = new Counter();
  private lastFocusedWindowId = -1;

  createTab(tab: chrome.tabs.CreateProperties): TabWithId {
    if (typeof tab.windowId === "undefined" && this.windows.size === 0) {
      const win = this.createWindow({
        ...tab,
      });

      // createWindow creates a tab in the window
      const newTab = Array.from(this.tabs.values()).find((t) => t.windowId === win.id);
      if (!newTab) {
        throw new Error("No tab in the current window.");
      }
      return newTab;
    }

    const w = this.windows.get(tab.windowId ?? this.getCurrentWindow().id);
    if (typeof w === "undefined") {
      throw new Error(`No window with id: ${tab.windowId}.`);
    }

    const currentTabs = this.getTabsOfWindow(w.id);
    const tabId = this.tabIdCounter.next();
    const newTab = {
      ...tab,
      id: tabId,
      url: tab.url ?? "about:blank",
      index: typeof tab.index === "undefined" ? currentTabs.length : tab.index - 0.5, // insert between tabs
      highlighted: false,
      windowId: w.id,
      incognito: w.incognito,
      discarded: false,
      autoDiscardable: false,
      groupId: -1,
      pinned: tab.pinned ?? false,
      active: tab.active ?? false,
      selected: tab.selected ?? false,
    };
    this.tabs.set(tabId, newTab);

    if (tab.active) {
      for (const tab of currentTabs) {
        tab.active = false;
      }
    }

    this.reorderTabIndices(w.id);

    return newTab;
  }

  updateTab(tabId: number, updateProps: chrome.tabs.UpdateProperties): TabWithId {
    const tab = this.tabs.get(tabId);
    if (!tab) {
      throw new Error(`No tab with id: ${tabId}.`);
    }

    const windowId = tab.windowId;
    const currentTabs = this.getTabsOfWindow(windowId);

    if (updateProps.active) {
      for (const t of currentTabs) {
        t.active = false;
      }
    }

    tab.pinned = updateProps.pinned ?? tab.pinned;
    tab.openerTabId = updateProps.openerTabId ?? tab.openerTabId;
    tab.url = updateProps.url ?? tab.url;
    tab.highlighted = updateProps.highlighted ?? tab.highlighted;
    tab.active = updateProps.active ?? tab.active;
    tab.selected = updateProps.selected ?? tab.selected;
    tab.mutedInfo = typeof updateProps.muted !== "undefined" ? { muted: updateProps.muted } : tab.mutedInfo;
    tab.autoDiscardable = updateProps.autoDiscardable ?? tab.autoDiscardable;

    if (updateProps.pinned) {
      this.reorderTabIndices(windowId);
    }

    return tab;
  }

  moveTab(tabId: number, moveProps: chrome.tabs.MoveProperties): TabWithId {
    const tab = this.tabs.get(tabId);
    if (!tab) {
      throw new Error(`No tab with id: ${tabId}.`);
    }

    if (typeof moveProps.windowId !== "undefined" && moveProps.windowId !== tab.windowId) {
      const prevWindowId = tab.windowId;
      tab.windowId = moveProps.windowId;

      // reorder tabs in the source window
      this.reorderTabIndices(prevWindowId);
    }

    if (tab.index < moveProps.index) {
      tab.index = moveProps.index + 0.5;
    } else if (tab.index > moveProps.index) {
      tab.index = moveProps.index - 0.5;
    }

    // reorder tabs in the current window or the destination window
    this.reorderTabIndices(tab.windowId);

    return tab;
  }

  removeTab(tabId: number) {
    const tab = this.tabs.get(tabId);
    if (!tab) {
      throw new Error(`No tab with id: ${tabId}.`);
    }
    this.tabs.delete(tabId);

    this.reorderTabIndices(tab.windowId);
  }

  getTab(tabId: number): TabWithId {
    const tab = this.tabs.get(tabId);
    if (!tab) {
      throw new Error(`No tab with id: ${tabId}.`);
    }
    return tab;
  }

  duplicateTab(tabId: number) {
    const tab = this.tabs.get(tabId);
    if (!tab) {
      throw new Error(`No tab with id: ${tabId}.`);
    }

    return this.createTab({
      ...tab,
      index: tab.index + 0.5, // insert after the tab
      active: false,
      selected: false,
    });
  }

  getWindowIds(windowId: number): number[] {
    return Array.from(this.windows.keys()).filter((id) => id === windowId);
  }

  getAllTabs(): TabWithId[] {
    return Array.from(this.tabs.values());
  }

  getAllWindows(): WindowWithId[] {
    return Array.from(this.windows.values());
  }

  getTabsOfWindow(windowId: number): TabWithId[] {
    if (!this.windows.has(windowId)) {
      throw new Error(`No window with id: ${windowId}.`);
    }

    const tabs = Array.from(this.tabs.values()).filter((t) => t.windowId === windowId);
    tabs.sort((a, b) => a.index - b.index);
    return tabs;
  }

  private reorderTabIndices(windowId: number) {
    const currentTabs = this.getTabsOfWindow(windowId);
    const pinnedTabs = currentTabs.filter((t) => t.pinned);
    const unpinnedTabs = currentTabs.filter((t) => !t.pinned);

    for (let i = 0; i < pinnedTabs.length; i++) {
      pinnedTabs[i].index = i;
    }
    for (let i = 0; i < unpinnedTabs.length; i++) {
      unpinnedTabs[i].index = i + pinnedTabs.length;
    }
  }

  createWindow(createData: chrome.windows.CreateData): WindowWithId {
    const windowId = this.tabIdCounter.next();
    const newWindow: WindowWithId = {
      id: windowId,
      top: createData.top,
      left: createData.left,
      height: createData.height,
      width: createData.width,
      focused: createData.focused ?? true,
      incognito: createData.incognito ?? false,
      type: createData.type ?? "normal",
      state: createData.state ?? "normal",
      alwaysOnTop: false,
    };

    if (newWindow.focused) {
      // if the window is focused, unfocus other windows
      for (const w of this.windows.values()) {
        w.focused = false;
      }
      this.lastFocusedWindowId = windowId;
    } else if (this.windows.size === 0) {
      // if this is the first window, do not focus it but set it as the last focused window
      this.lastFocusedWindowId = windowId;
    }

    this.windows.set(windowId, newWindow);

    if (typeof createData.tabId !== "undefined") {
      const tab = this.moveTab(createData.tabId, {
        windowId,
        index: 0,
      });
      newWindow.tabs = [...(newWindow.tabs ?? []), tab];
    }

    if (typeof createData.url !== "undefined") {
      const urls = typeof createData.url === "string" ? [createData.url] : createData.url;
      const tabs = urls.map((url, i) =>
        this.createTab({
          windowId,
          url,
          index: newWindow.tabs?.length ?? 0 + i,
          active: true,
          selected: false,
          pinned: false,
        }),
      );
      newWindow.tabs = [...(newWindow.tabs ?? []), ...tabs];
    }

    if (typeof createData.tabId === "undefined" && typeof createData.url === "undefined") {
      const newTab = this.createTab({
        index: newWindow.tabs?.length ?? 0,
        windowId,
        active: true,
        selected: false,
        pinned: false,
      });
      newWindow.tabs = [newTab];
    }

    this.reorderTabIndices(windowId);
    return newWindow;
  }

  getWindow(windowId: number): WindowWithId {
    const window = this.windows.get(windowId);
    if (!window) {
      throw new Error(`No window with id: ${windowId}.`);
    }
    return window;
  }

  getCurrentWindow(): WindowWithId {
    // TODO get current window from the caller context
    const w = this.windows.get(this.lastFocusedWindowId);
    if (typeof w === "undefined") {
      throw new Error("No current window.");
    }
    return w;
  }

  getLastFocusedWindow(): WindowWithId {
    const w = this.windows.get(this.lastFocusedWindowId);
    if (typeof w === "undefined") {
      throw new Error("No last-focused window.");
    }
    return w;
  }

  updateWindow(windowId: number, updateInfo: chrome.windows.UpdateInfo): WindowWithId {
    const w = this.windows.get(windowId);
    if (!w) {
      throw new Error(`No window with id: ${windowId}.`);
    }

    if (updateInfo.focused) {
      for (const w of this.windows.values()) {
        w.focused = false;
      }
      this.lastFocusedWindowId = windowId;
    }

    w.top = updateInfo.top ?? w.top;
    w.left = updateInfo.left ?? w.left;
    w.height = updateInfo.height ?? w.height;
    w.width = updateInfo.width ?? w.width;
    w.focused = updateInfo.focused ?? w.focused;
    w.state = updateInfo.state ?? w.state;

    return w;
  }

  removeWindow(windowId: number) {
    const deleted = this.windows.delete(windowId);
    if (!deleted) {
      throw new Error(`No window with id: ${windowId}.`);
    }

    const windows = Array.from(this.windows.values());
    if (windows.length === 0) {
      this.lastFocusedWindowId = -1;
    } else if (this.lastFocusedWindowId === windowId) {
      windows[0].focused = true;
      this.lastFocusedWindowId = windows[0].id;
    }

    for (const tab of this.tabs.values()) {
      if (tab.windowId === windowId) {
        this.tabs.delete(tab.id);
      }
    }
  }
}
