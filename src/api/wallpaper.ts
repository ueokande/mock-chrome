export class TodoWallpaper {
  setWallpaper(details: chrome.wallpaper.WallpaperDetails, callback: (thumbnail?: ArrayBuffer) => void): void;
  setWallpaper(): never {
    throw new Error("not implemented");
  }
}
