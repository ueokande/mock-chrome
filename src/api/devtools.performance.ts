import { TodoEvent } from "./events";

type Interface = typeof chrome.devtools.performance;

export class TodoDevtoolsPerformance implements Interface {
  onProfilingStarted: chrome.devtools.performance.ProfilingStartedEvent = new TodoEvent();
  onProfilingStopped: chrome.devtools.performance.ProfilingStoppedEvent = new TodoEvent();
}
