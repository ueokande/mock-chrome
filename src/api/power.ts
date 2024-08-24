export class TodoPower {
  requestKeepAwake(level: string): void;
  requestKeepAwake(): never {
    throw new Error("not implemented");
  }

  releaseKeepAwake(): void;
  releaseKeepAwake(): never {
    throw new Error("not implemented");
  }
}
