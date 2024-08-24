import { TodoEvent } from "./events";

type Interface = typeof chrome.vpnProvider;

export class TodoVpnProvider implements Interface {
  createConfig(name: string, callback: (id: string) => void): void;
  createConfig(): never {
    throw new Error("not implemented");
  }

  destroyConfig(id: string, callback?: Function): void;
  destroyConfig(): never {
    throw new Error("not implemented");
  }

  setParameters(parameters: chrome.vpnProvider.VpnSessionParameters, callback: Function): void;
  setParameters(): never {
    throw new Error("not implemented");
  }

  sendPacket(data: ArrayBuffer, callback?: Function): void;
  sendPacket(): never {
    throw new Error("not implemented");
  }

  notifyConnectionStateChanged(state: string, callback?: Function): void;
  notifyConnectionStateChanged(): never {
    throw new Error("not implemented");
  }

  onPlatformMessage: chrome.vpnProvider.VpnPlatformMessageEvent = new TodoEvent();
  onPacketReceived: chrome.vpnProvider.VpnPacketReceptionEvent = new TodoEvent();
  onConfigRemoved: chrome.vpnProvider.VpnConfigRemovalEvent = new TodoEvent();
  onConfigCreated: chrome.vpnProvider.VpnConfigCreationEvent = new TodoEvent();
  onUIEvent: chrome.vpnProvider.VpnUiEvent = new TodoEvent();
}
