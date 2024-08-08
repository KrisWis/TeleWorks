import { CardNumberIsValidCheck } from "./CardNumberIsValidCheck";

describe("CardNumberIsValidCheck", () => {
  test("with string", () => {
    expect(CardNumberIsValidCheck("wqqqqqwqf")).toBe(false);
  });

  test("with number but length is less 16", () => {
    expect(CardNumberIsValidCheck("1234570654")).toBe(false);
  });

  test("with correct card number", () => {
    expect(CardNumberIsValidCheck("1234567890123456")).toBe(true);
  });
});
