export const isPositiveInteger = (value: unknown): value is number => {
  return typeof value === "number" && Number.isInteger(value) && value > 0;
};

export const isNonEmptyObject = <R extends object>(value: unknown): value is R => {
  return typeof value === "object" && value !== null && !Array.isArray(value) && Object.keys(value).length > 0;
};

export const isOptionalCallback = <R extends (...args: any[]) => any>(value: unknown): value is R | undefined => {
  return value === undefined || typeof value === "function";
};
