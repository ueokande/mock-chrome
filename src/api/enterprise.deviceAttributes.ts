export class TodoEnterpriseDeviceAttributes {
  getDirectoryDeviceId(callback: (deviceId: string) => void): void;
  getDirectoryDeviceId(): never {
    throw new Error("not implemented");
  }

  getDeviceSerialNumber(callback: (serialNumber: string) => void): void;
  getDeviceSerialNumber(): never {
    throw new Error("not implemented");
  }

  getDeviceAssetId(callback: (assetId: string) => void): void;
  getDeviceAssetId(): never {
    throw new Error("not implemented");
  }

  getDeviceAnnotatedLocation(callback: (annotatedLocation: string) => void): void;
  getDeviceAnnotatedLocation(): never {
    throw new Error("not implemented");
  }

  getDeviceHostname(callback: (hostname: string) => void): void;
  getDeviceHostname(): never {
    throw new Error("not implemented");
  }
}
