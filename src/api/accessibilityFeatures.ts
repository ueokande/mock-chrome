import { TodoChromeSetting } from "./types";

export class TodoAccessibilityFeatures {
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
