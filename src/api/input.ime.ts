import { TodoEvent } from "./events";

type Interface = typeof chrome.input.ime;

export class TodoInputIme implements Interface {
  setMenuItems(parameters: chrome.input.ime.ImeParameters, callback?: () => void): void;
  setMenuItems(): never {
    throw new Error("not implemented");
  }

  commitText(parameters: chrome.input.ime.CommitTextParameters, callback?: (success: boolean) => void): void;
  commitText(): never {
    throw new Error("not implemented");
  }

  setCandidates(parameters: chrome.input.ime.CandidatesParameters, callback?: (success: boolean) => void): void;
  setCandidates(): never {
    throw new Error("not implemented");
  }

  setComposition(parameters: chrome.input.ime.CompositionParameters, callback?: (success: boolean) => void): void;
  setComposition(): never {
    throw new Error("not implemented");
  }

  updateMenuItems(parameters: chrome.input.ime.MenuItemParameters, callback?: () => void): void;
  updateMenuItems(): never {
    throw new Error("not implemented");
  }

  setAssistiveWindowProperties(
    parameters: {
      contextID: number;
      properties: chrome.input.ime.AssistiveWindowProperties;
    },
    callback?: (success: boolean) => void,
  ): void;
  setAssistiveWindowProperties(): never {
    throw new Error("not implemented");
  }

  setAssistiveWindowButtonHighlighted(
    parameters: {
      contextID: number;
      buttonID: chrome.input.ime.AssistiveWindowButton;
      windowType: chrome.input.ime.AssistiveWindowType;
      announceString?: string | undefined;
      highlighted: boolean;
    },
    callback?: () => void,
  ): void;
  setAssistiveWindowButtonHighlighted(): never {
    throw new Error("not implemented");
  }

  setCandidateWindowProperties(parameters: chrome.input.ime.CandidateWindowParameter, callback?: (success: boolean) => void): void;
  setCandidateWindowProperties(): never {
    throw new Error("not implemented");
  }

  clearComposition(parameters: chrome.input.ime.ClearCompositionParameters, callback?: (success: boolean) => void): void;
  clearComposition(): never {
    throw new Error("not implemented");
  }

  setCursorPosition(parameters: chrome.input.ime.CursorPositionParameters, callback?: (success: boolean) => void): void;
  setCursorPosition(): never {
    throw new Error("not implemented");
  }

  sendKeyEvents(parameters: chrome.input.ime.SendKeyEventParameters, callback?: () => void): void;
  sendKeyEvents(): never {
    throw new Error("not implemented");
  }

  hideInputView(): void;
  hideInputView(): never {
    throw new Error("not implemented");
  }

  deleteSurroundingText(parameters: chrome.input.ime.DeleteSurroundingTextParameters, callback?: () => void): void;
  deleteSurroundingText(): never {
    throw new Error("not implemented");
  }

  keyEventHandled(requestId: string, response: boolean): void;
  keyEventHandled(): never {
    throw new Error("not implemented");
  }

  onBlur: chrome.input.ime.BlurEvent = new TodoEvent();
  onAssistiveWindowButtonClicked: chrome.input.ime.AssistiveWindowButtonClickedEvent = new TodoEvent();
  onCandidateClicked: chrome.input.ime.CandidateClickedEvent = new TodoEvent();
  onKeyEvent: chrome.input.ime.KeyEventEvent = new TodoEvent();
  onDeactivated: chrome.input.ime.DeactivatedEvent = new TodoEvent();
  onInputContextUpdate: chrome.input.ime.InputContextUpdateEvent = new TodoEvent();
  onActivate: chrome.input.ime.ActivateEvent = new TodoEvent();
  onFocus: chrome.input.ime.FocusEvent = new TodoEvent();
  onMenuItemActivated: chrome.input.ime.MenuItemActivatedEvent = new TodoEvent();
  onSurroundingTextChanged: chrome.input.ime.SurroundingTextChangedEvent = new TodoEvent();
  onReset: chrome.input.ime.InputResetEvent = new TodoEvent();
}
