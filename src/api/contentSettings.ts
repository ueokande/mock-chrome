type Interface = chrome.contentSettings.ContentSetting;

export class TodoContentSetting implements Interface {
  clear(details: chrome.contentSettings.ClearDetails, callback?: () => void): void;
  clear(): never {
    throw new Error("not implemented");
  }

  set(details: chrome.contentSettings.SetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  getResourceIdentifiers(callback: (resourceIdentifiers?: chrome.contentSettings.ResourceIdentifier[]) => void): void;
  getResourceIdentifiers(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.ReturnedDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class CookieContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.CookieSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.CookieSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class PopupsContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.PopupsSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.PopupsSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class JavascriptContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.JavascriptSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.JavascriptSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class NotificationsContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.NotificationsSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.NotificationsSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class PluginsContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.PluginsSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.PluginsSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class ImagesContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.ImagesSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.ImagesSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class LocationContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.LocationSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.LocationSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class FullscreenContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.FullscreenSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.FullscreenSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class MouselockContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.MouselockSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.MouselockSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class MicrophoneContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.MicrophoneSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.MicrophoneSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class CameraContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.CameraSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.CameraSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class PpapiBrokerContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.PpapiBrokerSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.PpapiBrokerSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class MultipleAutomaticDownloadsContentSetting extends TodoContentSetting {
  set(details: chrome.contentSettings.MultipleAutomaticDownloadsSetDetails, callback?: () => void): void;
  set(): never {
    throw new Error("not implemented");
  }

  get(details: chrome.contentSettings.GetDetails, callback: (details: chrome.contentSettings.MultipleAutomaticDownloadsSetDetails) => void): void;
  get(): never {
    throw new Error("not implemented");
  }
}

export class TodoContentSettings {
  cookies = new CookieContentSetting();
  popups = new PopupsContentSetting();
  javascript = new JavascriptContentSetting();
  notifications = new NotificationsContentSetting();
  plugins = new PluginsContentSetting();
  images = new ImagesContentSetting();
  location = new LocationContentSetting();
  fullscreen = new FullscreenContentSetting();
  mouselock = new MouselockContentSetting();
  microphone = new MicrophoneContentSetting();
  camera = new CameraContentSetting();
  unsandboxedPlugins = new PpapiBrokerContentSetting();
  automaticDownloads = new MultipleAutomaticDownloadsContentSetting();
}
