export class TodoI18n {
  getAcceptLanguages(): Promise<string[]>;
  getAcceptLanguages(callback: (languages: string[]) => void): void;
  getAcceptLanguages(): never {
    throw new Error("not implemented");
  }

  getMessage(messageName: string, substitutions?: string | string[]): string;
  getMessage(): never {
    throw new Error("not implemented");
  }

  getUILanguage(): string;
  getUILanguage(): never {
    throw new Error("not implemented");
  }

  detectLanguage(text: string): Promise<chrome.i18n.LanguageDetectionResult>;
  detectLanguage(text: string, callback: (result: chrome.i18n.LanguageDetectionResult) => void): void;
  detectLanguage(): never {
    throw new Error("not implemented");
  }
}
