import { CVCCodeIsValidCheck } from "./CVCCodeIsValidCheck";

describe("CVCCodeIsValidCheck", () => {
  test("with string", () => {
    expect(CVCCodeIsValidCheck("wqqqqqwqf")).toBe(false);
  });

  test("with uncorrect format", () => {
    expect(CVCCodeIsValidCheck("0")).toBe(false);
  });

  test("with correct format", () => {
    expect(CVCCodeIsValidCheck("012")).toBe(true);
  });
});
