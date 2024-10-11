import { FormatingNumber } from "./FormatingNumber";

describe("FormatingNumber", () => {
  test("check with number", () => {
    expect(FormatingNumber(1234567)).toBe("1 234 567");
  });
});
