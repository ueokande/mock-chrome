type Interface = typeof chrome.tts;

export class TodoTts implements Interface {
  isSpeaking(callback?: (speaking: boolean) => void): void;
  isSpeaking(): never {
    throw new Error("not implemented");
  }

  stop(): void;
  stop(): never {
    throw new Error("not implemented");
  }

  getVoices(): Promise<chrome.tts.TtsVoice[]>;
  getVoices(callback?: (voices: chrome.tts.TtsVoice[]) => void): void;
  getVoices(): never {
    throw new Error("not implemented");
  }

  speak(utterance: string, callback?: Function): void;
  speak(utterance: string, options: chrome.tts.SpeakOptions, callback?: Function): void;
  speak(): never {
    throw new Error("not implemented");
  }

  pause(): void;
  pause(): never {
    throw new Error("not implemented");
  }

  resume(): void;
  resume(): never {
    throw new Error("not implemented");
  }
}

export class MockTts extends TodoTts {}
