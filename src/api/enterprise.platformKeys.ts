type Interface = typeof chrome.enterprise.platformKeys;

export class TodoEnterprisePlatformKeys implements Interface {
  getTokens(callback: (tokens: chrome.enterprise.platformKeys.Token[]) => void): void;
  getTokens(): never {
    throw new Error("not implemented");
  }

  getCertificates(tokenId: string, callback: (certificates: ArrayBuffer[]) => void): void;
  getCertificates(): never {
    throw new Error("not implemented");
  }

  importCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void;
  importCertificate(): never {
    throw new Error("not implemented");
  }

  removeCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void;
  removeCertificate(): never {
    throw new Error("not implemented");
  }

  challengeKey(options: chrome.enterprise.platformKeys.ChallengeKeyOptions, callback: (response: ArrayBuffer) => void): void;
  challengeKey(): never {
    throw new Error("not implemented");
  }

  challengeMachineKey(challenge: ArrayBuffer, registerKey: boolean, callback: (response: ArrayBuffer) => void): void;
  challengeMachineKey(challenge: ArrayBuffer, callback: (response: ArrayBuffer) => void): void;
  challengeMachineKey(): never {
    throw new Error("not implemented");
  }

  challengeUserKey(challenge: ArrayBuffer, registerKey: boolean, callback: (response: ArrayBuffer) => void): void;
  challengeUserKey(): never {
    throw new Error("not implemented");
  }
}
