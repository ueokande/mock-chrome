import { TodoChromeSetting } from "./types";

export class TodoServices implements chrome.privacy.Services {
  spellingServiceEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  searchSuggestEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  instantEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  alternateErrorPagesEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  safeBrowsingEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  autofillEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  translationServiceEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  passwordSavingEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  hotwordSearchEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  safeBrowsingExtendedReportingEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  autofillAddressEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  autofillCreditCardEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
}

export class TodoNetwork implements chrome.privacy.Network {
  networkPredictionEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  webRTCMultipleRoutesEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  webRTCNonProxiedUdpEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  webRTCIPHandlingPolicy: chrome.types.ChromeSetting = new TodoChromeSetting();
}

export class TodoWebsites implements chrome.privacy.Websites {
  thirdPartyCookiesAllowed: chrome.types.ChromeSetting = new TodoChromeSetting();
  referrersEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  hyperlinkAuditingEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  protectedContentEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
  doNotTrackEnabled: chrome.types.ChromeSetting = new TodoChromeSetting();
}

type Interface = typeof chrome.privacy;

export class TodoPrivacy implements Interface {
  services: chrome.privacy.Services = new TodoServices();
  network: chrome.privacy.Network = new TodoNetwork();
  websites: chrome.privacy.Websites = new TodoWebsites();
}
