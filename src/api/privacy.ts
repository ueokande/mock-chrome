import { MockChromeSetting, TodoChromeSetting } from "./types";

type Interface = typeof chrome.privacy;

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

export class TodoPrivacy implements Interface {
  services: chrome.privacy.Services = new TodoServices();
  network: chrome.privacy.Network = new TodoNetwork();
  websites: chrome.privacy.Websites = new TodoWebsites();
}

export class MockServices implements chrome.privacy.Services {
  spellingServiceEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  searchSuggestEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  instantEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  alternateErrorPagesEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  safeBrowsingEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  autofillEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  translationServiceEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  passwordSavingEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  hotwordSearchEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  safeBrowsingExtendedReportingEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  autofillAddressEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  autofillCreditCardEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
}

export class MockNetwork implements chrome.privacy.Network {
  networkPredictionEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  webRTCMultipleRoutesEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  webRTCNonProxiedUdpEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  webRTCIPHandlingPolicy: chrome.types.ChromeSetting = new MockChromeSetting();
}

export class MockWebsites implements chrome.privacy.Websites {
  thirdPartyCookiesAllowed: chrome.types.ChromeSetting = new MockChromeSetting();
  referrersEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  hyperlinkAuditingEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  protectedContentEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
  doNotTrackEnabled: chrome.types.ChromeSetting = new MockChromeSetting();
}

export class MockPrivacy implements Interface {
  services: chrome.privacy.Services = new MockServices();
  network: chrome.privacy.Network = new MockNetwork();
  websites: chrome.privacy.Websites = new MockWebsites();
}
