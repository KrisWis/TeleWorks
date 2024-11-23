import { LoadImageIsValidCheck } from "./LoadImageIsValidCheck";

describe("LoadImageIsValidCheck", () => {
  test("with uncorrect data", () => {
    expect(LoadImageIsValidCheck(1, 1, 1)).toBe(false);
  });

  test("with uncorrect size", () => {
    expect(LoadImageIsValidCheck(1, 670, 460)).toBe(false);
  });

  test("with uncorrect resolution", () => {
    expect(LoadImageIsValidCheck(31000, 60, 40)).toBe(false);
  });

  test("with correct data", () => {
    expect(LoadImageIsValidCheck(31000, 670, 460)).toBe(true);
  });
});
