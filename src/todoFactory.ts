import { TodoAccessibilityFeatures } from "./api/accessibilityFeatures";
import { TodoAction } from "./api/action";
import { TodoAlarms } from "./api/alarms";
import { TodoBookmarks } from "./api/bookmarks";
import { TodoBrowsingData } from "./api/browsingData";
import { TodoCommands } from "./api/commands";
import { TodoContentSettings } from "./api/contentSettings";
import { TodoContextMenus } from "./api/contextMenus";
import { TodoCookies } from "./api/cookies";
import { TodoDebugger } from "./api/debugger";
import { TodoDeclarativeContent } from "./api/declarativeContent";
import { TodoDeclarativeNetRequest } from "./api/declarativeNetRequest";
import { TodoDeclarativeWebRequest } from "./api/declarativeWebRequest";
import { TodoDesktopCapture } from "./api/desktopCapture";
import { TodoDevtoolsInspectedWindow } from "./api/devtools.inspectedWindow";
import { TodoDevtoolsNetwork } from "./api/devtools.network";
import { TodoDevtoolsPanels } from "./api/devtools.panels";
import { TodoDevtoolsPerformance } from "./api/devtools.performance";
import { TodoDocumentScan } from "./api/documentScan";
import { TodoDom } from "./api/dom";
import { TodoDownloads } from "./api/downloads";
import { TodoEnterpriseDeviceAttributes } from "./api/enterprise.deviceAttributes";
import { TodoEnterpriseNetworkingAttributes } from "./api/enterprise.networkingAttributes";
import { TodoEnterprisePlatformKeys } from "./api/enterprise.platformKeys";
import { TodoExtension } from "./api/extension";
import { TodoFileBrowserHandler } from "./api/fileBrowserHandler";
import { TodoFileSystemProvider } from "./api/fileSystemProvider";
import { TodoFontSettings } from "./api/fontSettings";
import { TodoGcm } from "./api/gcm";
import { TodoHistory } from "./api/history";
import { TodoI18n } from "./api/i18n";
import { TodoIdentity } from "./api/identity";
import { TodoIdle } from "./api/idle";
import { TodoInputIme } from "./api/input.ime";
import { TodoInstanceID } from "./api/instanceID";
import { TodoLoginState } from "./api/loginState";
import { TodoManagement } from "./api/management";
import { TodoNotifications } from "./api/notifications";
import { TodoOffscreen } from "./api/offscreen";
import { TodoOmnibox } from "./api/omnibox";
import { TodoPageAction } from "./api/pageAction";
import { TodoPageCapture } from "./api/pageCapture";
import { TodoPermissions } from "./api/permissions";
import { TodoPlatformKeys } from "./api/platformKeys";
import { TodoPower } from "./api/power";
import { TodoPrinterProvider } from "./api/printerProvider";
import { TodoPrivacy } from "./api/privacy";
import { TodoProxy } from "./api/proxy";
import { TodoRuntime } from "./api/runtime";
import { TodoScripting } from "./api/scripting";
import { TodoSearch } from "./api/search";
import { TodoSessions } from "./api/sessions";
import { TodoSidePanel } from "./api/sidePanel";
import { TodoStorage } from "./api/storage";
import { TodoSystemCpu } from "./api/system.cpu";
import { TodoSystemDisplay } from "./api/system.display";
import { TodoSystemMemory } from "./api/system.memory";
import { TodoSystemStorage } from "./api/system.storage";
import { TodoTabCapture } from "./api/tabCapture";
import { TodoTabGroups } from "./api/tabGroups";
import { TodoTabs } from "./api/tabs";
import { TodoTopSites } from "./api/topSites";
import { TodoTts } from "./api/tts";
import { TodoTtsEngine } from "./api/ttsEngine";
import { TodoUserScripts } from "./api/userScripts";
import { TodoVpnProvider } from "./api/vpnProvider";
import { TodoWallpaper } from "./api/wallpaper";
import { TodoWebNavigation } from "./api/webNavigation";
import { TodoWebRequest } from "./api/webRequest";
import { TodoWindows } from "./api/windows";

export const newTodoApi = (): typeof chrome => {
  return {
    accessibilityFeatures: new TodoAccessibilityFeatures(),
    action: new TodoAction(),
    alarms: new TodoAlarms(),
    bookmarks: new TodoBookmarks(),
    browsingData: new TodoBrowsingData(),
    commands: new TodoCommands(),
    contentSettings: new TodoContentSettings(),
    contextMenus: new TodoContextMenus(),
    cookies: new TodoCookies(),
    debugger: new TodoDebugger(),
    declarativeContent: new TodoDeclarativeContent(),
    declarativeNetRequest: new TodoDeclarativeNetRequest(),
    declarativeWebRequest: new TodoDeclarativeWebRequest(),
    desktopCapture: new TodoDesktopCapture(),
    devtools: {
      inspectedWindow: new TodoDevtoolsInspectedWindow(),
      network: new TodoDevtoolsNetwork(),
      performance: new TodoDevtoolsPerformance(),
      panels: new TodoDevtoolsPanels(),
    },
    documentScan: new TodoDocumentScan(),
    dom: new TodoDom(),
    downloads: new TodoDownloads(),
    enterprise: {
      deviceAttributes: new TodoEnterpriseDeviceAttributes(),
      networkingAttributes: new TodoEnterpriseNetworkingAttributes(),
      platformKeys: new TodoEnterprisePlatformKeys(),
    },
    extension: new TodoExtension(),
    fileBrowserHandler: new TodoFileBrowserHandler(),
    fileSystemProvider: new TodoFileSystemProvider(),
    fontSettings: new TodoFontSettings(),
    gcm: new TodoGcm(),
    history: new TodoHistory(),
    i18n: new TodoI18n(),
    identity: new TodoIdentity(),
    idle: new TodoIdle(),
    input: {
      ime: new TodoInputIme(),
    },
    instanceID: new TodoInstanceID(),
    loginState: new TodoLoginState(),
    management: new TodoManagement(),
    notifications: new TodoNotifications(),
    offscreen: new TodoOffscreen(),
    omnibox: new TodoOmnibox(),
    pageAction: new TodoPageAction(),
    pageCapture: new TodoPageCapture(),
    permissions: new TodoPermissions(),
    platformKeys: new TodoPlatformKeys(),
    power: new TodoPower(),
    printerProvider: new TodoPrinterProvider(),
    privacy: new TodoPrivacy(),
    proxy: new TodoProxy(),
    runtime: new TodoRuntime(),
    scripting: new TodoScripting(),
    search: new TodoSearch(),
    sessions: new TodoSessions(),
    sidePanel: new TodoSidePanel(),
    storage: new TodoStorage(),
    system: {
      cpu: new TodoSystemCpu(),
      display: new TodoSystemDisplay(),
      memory: new TodoSystemMemory(),
      storage: new TodoSystemStorage(),
    },
    tabCapture: new TodoTabCapture(),
    tabGroups: new TodoTabGroups(),
    tabs: new TodoTabs(),
    topSites: new TodoTopSites(),
    tts: new TodoTts(),
    ttsEngine: new TodoTtsEngine(),
    userScripts: new TodoUserScripts(),
    vpnProvider: new TodoVpnProvider(),
    wallpaper: new TodoWallpaper(),
    webNavigation: new TodoWebNavigation(),
    webRequest: new TodoWebRequest(),
    windows: new TodoWindows(),

    // The following are not available in Chrome API, but are in the type definition:
    // - browser
    // - browserAction
    // - cast
    // - networking
    // - scriptBadge
    // - serial
    // - socket
    // - webstore
  } as unknown as typeof chrome;
};
