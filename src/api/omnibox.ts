import { TodoEvent } from "./events";

type Interface = typeof chrome.omnibox;

export class TodoOmnibox implements Interface {
  setDefaultSuggestion(suggestion: chrome.omnibox.Suggestion): void;
  setDefaultSuggestion(): never {
    throw new Error("not implemented");
  }

  onInputEntered: chrome.omnibox.OmniboxInputEnteredEvent = new TodoEvent();
  onInputChanged: chrome.omnibox.OmniboxInputChangedEvent = new TodoEvent();
  onInputStarted: chrome.omnibox.OmniboxInputStartedEvent = new TodoEvent();
  onInputCancelled: chrome.omnibox.OmniboxInputCancelledEvent = new TodoEvent();
  onDeleteSuggestion: chrome.omnibox.OmniboxSuggestionDeletedEvent = new TodoEvent();
}

export class MockOmnibox extends TodoOmnibox {}
