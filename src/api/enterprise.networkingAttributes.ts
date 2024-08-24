type Interface = typeof chrome.enterprise.networkingAttributes;

export class TodoEnterpriseNetworkingAttributes implements Interface {
  getNetworkDetails(callback: (networkDetails: chrome.enterprise.networkingAttributes.NetworkDetails) => void): void;
  getNetworkDetails(): never {
    throw new Error("not implemented");
  }
}

export class MockEnterpriseNetworkingAttributes extends TodoEnterpriseNetworkingAttributes {}
