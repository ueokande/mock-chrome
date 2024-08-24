import { TodoEvent } from "./events";

type Interface = typeof chrome.fileSystemProvider;

export class TodoFileSystemProvider implements Interface {
  mount(options: chrome.fileSystemProvider.MountOptions, callback?: () => void): void;
  mount(): never {
    throw new Error("not implemented");
  }

  unmount(options: chrome.fileSystemProvider.UnmountOptions, callback?: () => void): void;
  unmount(): never {
    throw new Error("not implemented");
  }

  getAll(callback: (fileSystems: chrome.fileSystemProvider.FileSystemInfo[]) => void): void;
  getAll(): never {
    throw new Error("not implemented");
  }

  get(fileSystemId: string, callback: (fileSystem: chrome.fileSystemProvider.FileSystemInfo) => void): void;
  get(): never {
    throw new Error("not implemented");
  }

  notify(options: NotificationOptions, callback: () => void): void;
  notify(): never {
    throw new Error("not implemented");
  }

  onUnmountRequested: chrome.fileSystemProvider.RequestedEvent = new TodoEvent();
  onGetMetadataRequested: chrome.fileSystemProvider.MetadataRequestedEvent = new TodoEvent();
  onReadDirectoryRequested: chrome.fileSystemProvider.DirectoryPathRequestedEvent = new TodoEvent();
  onOpenFileRequested: chrome.fileSystemProvider.OpenFileRequestedEvent = new TodoEvent();
  onCloseFileRequested: chrome.fileSystemProvider.OpenedFileRequestedEvent = new TodoEvent();
  onReadFileRequested: chrome.fileSystemProvider.OpenedFileOffsetRequestedEvent = new TodoEvent();
  onCreateDirectoryRequested: chrome.fileSystemProvider.CreateDirectoryRequestedEvent = new TodoEvent();
  onDeleteEntryRequested: chrome.fileSystemProvider.EntryPathRecursiveRequestedEvent = new TodoEvent();
  onCreateFileRequested: chrome.fileSystemProvider.FilePathRequestedEvent = new TodoEvent();
  onCopyEntryRequested: chrome.fileSystemProvider.SourceTargetPathRequestedEvent = new TodoEvent();
  onMoveEntryRequested: chrome.fileSystemProvider.SourceTargetPathRequestedEvent = new TodoEvent();
  onTruncateRequested: chrome.fileSystemProvider.FilePathLengthRequestedEvent = new TodoEvent();
  onWriteFileRequested: chrome.fileSystemProvider.OpenedFileIoRequestedEvent = new TodoEvent();
  onAbortRequested: chrome.fileSystemProvider.OperationRequestedEvent = new TodoEvent();
  onConfigureRequested: chrome.fileSystemProvider.RequestedEvent = new TodoEvent();
  onMountRequested: chrome.fileSystemProvider.OptionlessRequestedEvent = new TodoEvent();
  onAddWatcherRequested: chrome.fileSystemProvider.EntryPathRecursiveRequestedEvent = new TodoEvent();
  onRemoveWatcherRequested: chrome.fileSystemProvider.EntryPathRecursiveRequestedEvent = new TodoEvent();
  onGetActionsRequested: chrome.fileSystemProvider.GetActionsRequested = new TodoEvent();
  onExecuteActionRequested: chrome.fileSystemProvider.ExecuteActionRequested = new TodoEvent();
}
