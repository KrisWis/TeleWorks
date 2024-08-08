import { ExpirationDateIsValidCheck } from "./ExpirationDateIsValidCheck";

describe("ExpirationDateIsValidCheck", () => {
  test("with string", () => {
    expect(ExpirationDateIsValidCheck("wqqqqqwqf")).toBe(false);
  });

  test("with uncorrect format", () => {
    expect(ExpirationDateIsValidCheck("april/year")).toBe(false);
  });

  test("with correct format", () => {
    expect(ExpirationDateIsValidCheck("02/12")).toBe(true);
  });
});
