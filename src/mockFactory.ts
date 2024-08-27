import { MockAccessibilityFeatures } from "./api/accessibilityFeatures";
import { MockAction } from "./api/action";
import { MockAlarms } from "./api/alarms";
import { MockBookmarks } from "./api/bookmarks";
import { MockBrowsingData } from "./api/browsingData";
import { MockCommands } from "./api/commands";
import { MockContentSettings } from "./api/contentSettings";
import { MockContextMenus } from "./api/contextMenus";
import { MockCookies } from "./api/cookies";
import { MockDebugger } from "./api/debugger";
import { MockDeclarativeContent } from "./api/declarativeContent";
import { MockDeclarativeNetRequest } from "./api/declarativeNetRequest";
import { MockDeclarativeWebRequest } from "./api/declarativeWebRequest";
import { MockDesktopCapture } from "./api/desktopCapture";
import { MockDevtoolsInspectedWindow } from "./api/devtools.inspectedWindow";
import { MockDevtoolsNetwork } from "./api/devtools.network";
import { MockDevtoolsPanels } from "./api/devtools.panels";
import { MockDevtoolsPerformance } from "./api/devtools.performance";
import { MockDocumentScan } from "./api/documentScan";
import { MockDom } from "./api/dom";
import { MockDownloads } from "./api/downloads";
import { MockEnterpriseDeviceAttributes } from "./api/enterprise.deviceAttributes";
import { MockEnterpriseNetworkingAttributes } from "./api/enterprise.networkingAttributes";
import { MockEnterprisePlatformKeys } from "./api/enterprise.platformKeys";
import { MockExtension } from "./api/extension";
import { MockFileBrowserHandler } from "./api/fileBrowserHandler";
import { MockFileSystemProvider } from "./api/fileSystemProvider";
import { MockFontSettings } from "./api/fontSettings";
import { MockGcm } from "./api/gcm";
import { MockHistory } from "./api/history";
import { MockI18n } from "./api/i18n";
import { MockIdentity } from "./api/identity";
import { MockIdle } from "./api/idle";
import { MockInputIme } from "./api/input.ime";
import { MockInstanceID } from "./api/instanceID";
import { MockLoginState } from "./api/loginState";
import { MockManagement } from "./api/management";
import { MockNotifications } from "./api/notifications";
import { MockOffscreen } from "./api/offscreen";
import { MockOmnibox } from "./api/omnibox";
import { MockPageAction } from "./api/pageAction";
import { MockPageCapture } from "./api/pageCapture";
import { MockPermissions } from "./api/permissions";
import { MockPlatformKeys } from "./api/platformKeys";
import { MockPower } from "./api/power";
import { MockPrinterProvider } from "./api/printerProvider";
import { MockPrivacy } from "./api/privacy";
import { MockProxy } from "./api/proxy";
import { MockRuntime } from "./api/runtime";
import { MockScripting } from "./api/scripting";
import { MockSearch } from "./api/search";
import { MockSessions } from "./api/sessions";
import { MockSidePanel } from "./api/sidePanel";
import { MockStorage } from "./api/storage";
import { MockSystemCpu } from "./api/system.cpu";
import { MockSystemDisplay } from "./api/system.display";
import { MockSystemMemory } from "./api/system.memory";
import { MockSystemStorage } from "./api/system.storage";
import { MockTabCapture } from "./api/tabCapture";
import { MockTabGroups } from "./api/tabGroups";
import { MockTabs } from "./api/tabs";
import { MockTopSites } from "./api/topSites";
import { MockTts } from "./api/tts";
import { MockTtsEngine } from "./api/ttsEngine";
import { MockUserScripts } from "./api/userScripts";
import { MockVpnProvider } from "./api/vpnProvider";
import { MockWallpaper } from "./api/wallpaper";
import { MockWebNavigation } from "./api/webNavigation";
import { MockWebRequest } from "./api/webRequest";
import { MockWindows } from "./api/windows";
import { TabManager } from "./utils/tabs";

export const newMockApi = (): typeof chrome => {
  const tabManager = new TabManager();
  const api: typeof chrome = {
    accessibilityFeatures: new MockAccessibilityFeatures(),
    action: new MockAction(),
    alarms: new MockAlarms(),
    bookmarks: new MockBookmarks(),
    browsingData: new MockBrowsingData(),
    commands: new MockCommands(),
    contentSettings: new MockContentSettings(),
    contextMenus: new MockContextMenus(),
    cookies: new MockCookies(),
    debugger: new MockDebugger(),
    declarativeContent: new MockDeclarativeContent(),
    declarativeNetRequest: new MockDeclarativeNetRequest(),
    declarativeWebRequest: new MockDeclarativeWebRequest(),
    desktopCapture: new MockDesktopCapture(),
    devtools: {
      inspectedWindow: new MockDevtoolsInspectedWindow(),
      network: new MockDevtoolsNetwork(),
      performance: new MockDevtoolsPerformance(),
      panels: new MockDevtoolsPanels(),
    },
    documentScan: new MockDocumentScan(),
    dom: new MockDom(),
    downloads: new MockDownloads(),
    enterprise: {
      deviceAttributes: new MockEnterpriseDeviceAttributes(),
      networkingAttributes: new MockEnterpriseNetworkingAttributes(),
      platformKeys: new MockEnterprisePlatformKeys(),
    },
    extension: new MockExtension(),
    fileBrowserHandler: new MockFileBrowserHandler(),
    fileSystemProvider: new MockFileSystemProvider(),
    fontSettings: new MockFontSettings(),
    gcm: new MockGcm(),
    history: new MockHistory(),
    i18n: new MockI18n(),
    identity: new MockIdentity(),
    idle: new MockIdle(),
    input: {
      ime: new MockInputIme(),
    },
    instanceID: new MockInstanceID(),
    loginState: new MockLoginState(),
    management: new MockManagement(),
    notifications: new MockNotifications(),
    offscreen: new MockOffscreen(),
    omnibox: new MockOmnibox(),
    pageAction: new MockPageAction(),
    pageCapture: new MockPageCapture(),
    permissions: new MockPermissions(),
    platformKeys: new MockPlatformKeys(),
    power: new MockPower(),
    printerProvider: new MockPrinterProvider(),
    privacy: new MockPrivacy(),
    proxy: new MockProxy(),
    runtime: new MockRuntime(),
    scripting: new MockScripting(),
    search: new MockSearch(),
    sessions: new MockSessions(),
    sidePanel: new MockSidePanel(),
    storage: new MockStorage(),
    system: {
      cpu: new MockSystemCpu(),
      display: new MockSystemDisplay(),
      memory: new MockSystemMemory(),
      storage: new MockSystemStorage(),
    },
    tabCapture: new MockTabCapture(),
    tabGroups: new MockTabGroups(),
    tabs: undefined as never,
    topSites: new MockTopSites(),
    tts: new MockTts(),
    ttsEngine: new MockTtsEngine(),
    userScripts: new MockUserScripts(),
    vpnProvider: new MockVpnProvider(),
    wallpaper: new MockWallpaper(),
    webNavigation: new MockWebNavigation(),
    webRequest: new MockWebRequest(),
    windows: new MockWindows(),

    get browser(): never {
      throw new Error("not implemented");
    },
    get browserAction(): never {
      throw new Error("not implemented");
    },
    get cast(): never {
      throw new Error("not implemented");
    },
    get networking(): never {
      throw new Error("not implemented");
    },
    get scriptBadge(): never {
      throw new Error("not implemented");
    },
    get serial(): never {
      throw new Error("not implemented");
    },
    get socket(): never {
      throw new Error("not implemented");
    },
    get webstore(): never {
      throw new Error("not implemented");
    },
  };

  api.tabs = new MockTabs(api, tabManager);

  return api;
};
