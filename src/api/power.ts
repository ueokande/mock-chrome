type Interface = typeof chrome.power;

export class TodoPower implements Interface {
  requestKeepAwake(level: string): void;
  requestKeepAwake(): never {
    throw new Error("not implemented");
  }

  releaseKeepAwake(): void;
  releaseKeepAwake(): never {
    throw new Error("not implemented");
  }
}

export class MockPower extends TodoPower {}
