type Interface = typeof chrome.platformKeys;

export class TodoPlatformKeys implements Interface {
  selectClientCertificates(details: chrome.platformKeys.ClientCertificateSelectDetails, callback: (matches: chrome.platformKeys.Match[]) => void): void;
  selectClientCertificates(): never {
    throw new Error("not implemented");
  }

  getKeyPair(certificate: ArrayBuffer, parameters: Object, callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void): void;
  getKeyPair(): never {
    throw new Error("not implemented");
  }

  getKeyPairBySpki(publicKeySpkiDer: ArrayBuffer, parameters: Object, callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void): void;
  getKeyPairBySpki(): never {
    throw new Error("not implemented");
  }

  subtleCrypto(): SubtleCrypto;
  subtleCrypto(): never {
    throw new Error("not implemented");
  }

  verifyTLSServerCertificate(details: chrome.platformKeys.ServerCertificateVerificationDetails, callback: (result: chrome.platformKeys.ServerCertificateVerificationResult) => void): void;
  verifyTLSServerCertificate(): never {
    throw new Error("not implemented");
  }
}

export class MockPlatformKeys extends TodoPlatformKeys {}
