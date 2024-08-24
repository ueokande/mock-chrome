import { TodoEvent } from "./events";

type Interface = typeof chrome.declarativeNetRequest;

export class TodoDeclarativeNetRequest implements Interface {
  DYNAMIC_RULESET_ID = "_dynamic";
  GETMATCHEDRULES_QUOTA_INTERVAL = 10;
  GUARANTEED_MINIMUM_STATIC_RULES = 30000;
  MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL = 20;
  MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES = 5000;
  MAX_NUMBER_OF_REGEX_RULES = 1000;
  MAX_NUMBER_OF_STATIC_RULESETS = 50;
  SESSION_RULESET_ID = "_session";

  RequestMethod: typeof chrome.declarativeNetRequest.RequestMethod = {
    CONNECT: "connect",
    DELETE: "delete",
    GET: "get",
    HEAD: "head",
    OPTIONS: "options",
    PATCH: "patch",
    POST: "post",
    PUT: "put",
  } as unknown as typeof chrome.declarativeNetRequest.RequestMethod;
  ResourceType: typeof chrome.declarativeNetRequest.ResourceType = {
    MAIN_FRAME: "main_frame",
    SUB_FRAME: "sub_frame",
    STYLESHEET: "stylesheet",
    SCRIPT: "script",
    IMAGE: "image",
    FONT: "font",
    OBJECT: "object",
    XMLHTTPREQUEST: "xmlhttprequest",
    PING: "ping",
    CSP_REPORT: "csp_report",
    MEDIA: "media",
    WEBSOCKET: "websocket",
    OTHER: "other",
  } as unknown as typeof chrome.declarativeNetRequest.ResourceType;
  RuleActionType: typeof chrome.declarativeNetRequest.RuleActionType = {
    BLOCK: "block",
    REDIRECT: "redirect",
    ALLOW: "allow",
    UPGRADE_SCHEME: "upgradeScheme",
    MODIFY_HEADERS: "modifyHeaders",
    ALLOW_ALL_REQUESTS: "allowAllRequests",
  } as unknown as typeof chrome.declarativeNetRequest.RuleActionType;
  UnsupportedRegexReason: typeof chrome.declarativeNetRequest.UnsupportedRegexReason = {
    SYNTAX_ERROR: "syntaxError",
    MEMORY_LIMIT_EXCEEDED: "memoryLimitExceeded",
  } as unknown as typeof chrome.declarativeNetRequest.UnsupportedRegexReason;
  DomainType: typeof chrome.declarativeNetRequest.DomainType = {
    FIRST_PARTY: "firstParty",
    THIRD_PARTY: "thirdParty",
  } as unknown as typeof chrome.declarativeNetRequest.DomainType;
  HeaderOperation: typeof chrome.declarativeNetRequest.HeaderOperation = {
    APPEND: "append",
    SET: "set",
    REMOVE: "remove",
  } as unknown as typeof chrome.declarativeNetRequest.HeaderOperation;

  getAvailableStaticRuleCount(callback: (count: number) => void): void;
  getAvailableStaticRuleCount(): Promise<number>;
  getAvailableStaticRuleCount(): never {
    throw new Error("not implemented");
  }

  getDynamicRules(callback: (rules: chrome.declarativeNetRequest.Rule[]) => void): void;
  getDynamicRules(): Promise<chrome.declarativeNetRequest.Rule[]>;
  getDynamicRules(): never {
    throw new Error("not implemented");
  }

  getEnabledRulesets(callback: (rulesetIds: string[]) => void): void;
  getEnabledRulesets(): Promise<string[]>;
  getEnabledRulesets(): never {
    throw new Error("not implemented");
  }

  getMatchedRules(filter: chrome.declarativeNetRequest.MatchedRulesFilter | undefined, callback: (details: chrome.declarativeNetRequest.RulesMatchedDetails) => void): void;
  getMatchedRules(filter: chrome.declarativeNetRequest.MatchedRulesFilter | undefined): Promise<chrome.declarativeNetRequest.RulesMatchedDetails>;
  getMatchedRules(callback: (details: chrome.declarativeNetRequest.RulesMatchedDetails) => void): void;
  getMatchedRules(): Promise<chrome.declarativeNetRequest.RulesMatchedDetails>;
  getMatchedRules(): never {
    throw new Error("not implemented");
  }

  getSessionRules(callback: (rules: chrome.declarativeNetRequest.Rule[]) => void): void;
  getSessionRules(): Promise<chrome.declarativeNetRequest.Rule[]>;
  getSessionRules(): never {
    throw new Error("not implemented");
  }

  isRegexSupported(regexOptions: chrome.declarativeNetRequest.RegexOptions, callback: (result: chrome.declarativeNetRequest.IsRegexSupportedResult) => void): void;
  isRegexSupported(regexOptions: chrome.declarativeNetRequest.RegexOptions): Promise<chrome.declarativeNetRequest.IsRegexSupportedResult>;
  isRegexSupported(): never {
    throw new Error("not implemented");
  }

  setExtensionActionOptions(options: chrome.declarativeNetRequest.ExtensionActionOptions, callback: Function): void;
  setExtensionActionOptions(options: chrome.declarativeNetRequest.ExtensionActionOptions): Promise<void>;
  setExtensionActionOptions(): never {
    throw new Error("not implemented");
  }

  updateDynamicRules(options: chrome.declarativeNetRequest.UpdateRuleOptions, callback: Function): void;
  updateDynamicRules(options: chrome.declarativeNetRequest.UpdateRuleOptions): Promise<void>;
  updateDynamicRules(): never {
    throw new Error("not implemented");
  }

  updateEnabledRulesets(options: chrome.declarativeNetRequest.UpdateRulesetOptions, callback: Function): void;
  updateEnabledRulesets(options: chrome.declarativeNetRequest.UpdateRulesetOptions): Promise<void>;
  updateEnabledRulesets(): never {
    throw new Error("not implemented");
  }

  updateSessionRules(options: chrome.declarativeNetRequest.UpdateRuleOptions, callback: Function): void;
  updateSessionRules(options: chrome.declarativeNetRequest.UpdateRuleOptions): Promise<void>;
  updateSessionRules(): never {
    throw new Error("not implemented");
  }

  updateStaticRules(options: chrome.declarativeNetRequest.UpdateStaticRulesOptions): Promise<void>;
  updateStaticRules(options: chrome.declarativeNetRequest.UpdateStaticRulesOptions, callback?: () => void): void;
  updateStaticRules(): never {
    throw new Error("not implemented");
  }

  onRuleMatchedDebug: chrome.declarativeNetRequest.RuleMatchedDebugEvent = new TodoEvent();
}
