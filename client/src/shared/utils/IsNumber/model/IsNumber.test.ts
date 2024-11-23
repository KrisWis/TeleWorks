import { isNumber } from "./IsNumber";

describe("IsNumber", () => {
  test("check with number", () => {
    expect(isNumber("1")).toBe(true);
  });

  test("check with string", () => {
    expect(isNumber("trtwrh")).toBe(false);
  });
});
