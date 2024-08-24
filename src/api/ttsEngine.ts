import { TodoEvent } from "./events";

export class TodoTtsEngine {
  onSpeak: chrome.ttsEngine.TtsEngineSpeakEvent = new TodoEvent();
  onStop: chrome.events.Event<() => void> = new TodoEvent();
  onPause: chrome.events.Event<() => void> = new TodoEvent();
  onResume: chrome.events.Event<() => void> = new TodoEvent();
}
