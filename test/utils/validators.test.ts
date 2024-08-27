import { describe, expect, test, vi } from "vitest";
import { isNonEmptyObject, isOptionalCallback, isPositiveInteger } from "../../src/utils/validators";

describe("isPositiveInteger", () => {
  test.each([
    [1, true],
    [0, false],
    [-1, false],
    [1.1, false],
    ["1", false],
    [true, false],
    [null, false],
    [undefined, false],
    [{}, false],
    [[], false],
    [() => {}, false],
  ])("returns %p for %p", (value, expected) => {
    expect(isPositiveInteger(value)).toBe(expected);
  });
});

describe("isNonEmptyObject", () => {
  test.each([
    [{}, false],
    [{ a: 1 }, true],
    [[], false],
    [() => {}, false],
    [1, false],
    ["1", false],
    [true, false],
    [null, false],
    [undefined, false],
  ])("returns %p for %p", (value, expected) => {
    expect(isNonEmptyObject(value)).toBe(expected);
  });
});

describe("isOptionalCallback", () => {
  test.each([
    [undefined, true],
    [() => {}, true],
    [1, false],
    ["1", false],
    [true, false],
    [null, false],
    [{}, false],
    [[], false],
  ])("returns %p for %p", (value, expected) => {
    expect(isOptionalCallback(value)).toBe(expected);
  });
});
