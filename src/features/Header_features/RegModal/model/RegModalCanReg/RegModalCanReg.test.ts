import { RegModalCanReg } from "./RegModalCanReg";

describe("RegModalCanReg", () => {
  test("with uncorrect params", () => {
    expect(RegModalCanReg("", "", "", false)).toBe(false);
  });

  test("with correct params but not all checkboxes are checked", () => {
    expect(RegModalCanReg("e", "we", "we", false)).toBe(false);
  });

  test("with correct params", () => {
    expect(RegModalCanReg("e", "qw", "wq", true)).toBe(true);
  });
});
