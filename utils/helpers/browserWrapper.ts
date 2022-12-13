export function assertTrue(value: boolean): asserts value is true {
  if (!value) {
    throw new Error("Value not true");
  }
}

export const browserWrapper =
  typeof window === "undefined"
    ? ({
        isServer: true,
        isBrowser: false,
        window: undefined,
        document: undefined,
        DOMParser: undefined,
      } as const)
    : ({
        isServer: false,
        isBrowser: true,
        window,
        document,
        DOMParser,
      } as const);
