import { MockChromeSetting, TodoChromeSetting } from "./types";

type Interface = typeof chrome.accessibilityFeatures;

export class TodoAccessibilityFeatures implements Interface {
  spokenFeedback: chrome.types.ChromeSetting = new TodoChromeSetting();
  largeCursor: chrome.types.ChromeSetting = new TodoChromeSetting();
  stickyKeys: chrome.types.ChromeSetting = new TodoChromeSetting();
  highContrast: chrome.types.ChromeSetting = new TodoChromeSetting();
  screenMagnifier: chrome.types.ChromeSetting = new TodoChromeSetting();
  autoclick: chrome.types.ChromeSetting = new TodoChromeSetting();
  virtualKeyboard: chrome.types.ChromeSetting = new TodoChromeSetting();
  caretHighlight: chrome.types.ChromeSetting = new TodoChromeSetting();
  cursorHighlight: chrome.types.ChromeSetting = new TodoChromeSetting();
  focusHighlight: chrome.types.ChromeSetting = new TodoChromeSetting();
  selectToSpeak: chrome.types.ChromeSetting = new TodoChromeSetting();
  switchAccess: chrome.types.ChromeSetting = new TodoChromeSetting();
  animationPolicy: chrome.types.ChromeSetting = new TodoChromeSetting();
}

export class MockAccessibilityFeatures implements Interface {
  spokenFeedback: chrome.types.ChromeSetting = new MockChromeSetting();
  largeCursor: chrome.types.ChromeSetting = new MockChromeSetting();
  stickyKeys: chrome.types.ChromeSetting = new MockChromeSetting();
  highContrast: chrome.types.ChromeSetting = new MockChromeSetting();
  screenMagnifier: chrome.types.ChromeSetting = new MockChromeSetting();
  autoclick: chrome.types.ChromeSetting = new MockChromeSetting();
  virtualKeyboard: chrome.types.ChromeSetting = new MockChromeSetting();
  caretHighlight: chrome.types.ChromeSetting = new MockChromeSetting();
  cursorHighlight: chrome.types.ChromeSetting = new MockChromeSetting();
  focusHighlight: chrome.types.ChromeSetting = new MockChromeSetting();
  selectToSpeak: chrome.types.ChromeSetting = new MockChromeSetting();
  switchAccess: chrome.types.ChromeSetting = new MockChromeSetting();
  animationPolicy: chrome.types.ChromeSetting = new MockChromeSetting();
}
