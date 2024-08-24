export class TodoEnterpriseNetworkingAttributes {
  getNetworkDetails(callback: (networkDetails: chrome.enterprise.networkingAttributes.NetworkDetails) => void): void;
  getNetworkDetails(): never {
    throw new Error("not implemented");
  }
}
