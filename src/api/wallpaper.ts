type Interface = typeof chrome.wallpaper;

export class TodoWallpaper implements Interface {
  setWallpaper(details: chrome.wallpaper.WallpaperDetails, callback: (thumbnail?: ArrayBuffer) => void): void;
  setWallpaper(): never {
    throw new Error("not implemented");
  }
}
