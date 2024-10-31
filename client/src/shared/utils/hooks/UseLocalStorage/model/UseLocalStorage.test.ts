import { LocalStorageKeys } from "@/shared/const/app";
import { UseLocalStorage } from "./UseLocalStorage";
import { UseLocalStorageTypes } from "./UseLocalStorage_types";

const testKey: string = "testKey";

describe("useLocalStorage", () => {
  test("update test", () => {
    expect(
      UseLocalStorage(
        UseLocalStorageTypes.UPDATE,
        testKey as unknown as LocalStorageKeys,
        { testKey }
      )
    ).toBe(true);
  });

  test("get test", () => {
    expect(
      UseLocalStorage(
        UseLocalStorageTypes.GET,
        testKey as unknown as LocalStorageKeys
      )
    ).toEqual({ testKey });
  });

  test("delete test", () => {
    expect(
      UseLocalStorage(
        UseLocalStorageTypes.DELETE,
        testKey as unknown as LocalStorageKeys
      )
    ).toBe(true);
  });

  test("delete and update and get test", () => {
    expect(
      UseLocalStorage(
        UseLocalStorageTypes.UPDATE,
        testKey as unknown as LocalStorageKeys,
        { testKey }
      )
    ).toBe(true);

    expect(
      UseLocalStorage(
        UseLocalStorageTypes.GET,
        testKey as unknown as LocalStorageKeys
      )
    ).toEqual({ testKey });

    expect(
      UseLocalStorage(
        UseLocalStorageTypes.DELETE,
        testKey as unknown as LocalStorageKeys
      )
    ).toBe(true);

    expect(
      UseLocalStorage(
        UseLocalStorageTypes.GET,
        testKey as unknown as LocalStorageKeys
      )
    ).toBe(false);
  });
});
