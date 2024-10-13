import { FormatingNumber } from "./FormatingNumber";

describe("FormatingNumber", () => {
  test("check with number", () => {
    expect(FormatingNumber(1234567)).toBe(
      new Intl.NumberFormat("ru-RU").format(1234567)
    );
  });
});
