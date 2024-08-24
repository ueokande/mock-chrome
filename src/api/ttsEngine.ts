import { TodoEvent } from "./events";

type Interface = typeof chrome.ttsEngine;

export class TodoTtsEngine implements Interface {
  onSpeak: chrome.ttsEngine.TtsEngineSpeakEvent = new TodoEvent();
  onStop: chrome.events.Event<() => void> = new TodoEvent();
  onPause: chrome.events.Event<() => void> = new TodoEvent();
  onResume: chrome.events.Event<() => void> = new TodoEvent();
}
