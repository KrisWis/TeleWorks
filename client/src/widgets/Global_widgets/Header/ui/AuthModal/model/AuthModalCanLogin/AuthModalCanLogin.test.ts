import { AuthModalCanLogin } from "./AuthModalCanLogin";

describe("AuthModalCanLogin", () => {
  test("with empty params", () => {
    expect(AuthModalCanLogin("", "")).toBe(false);
  });

  test("with correct params", () => {
    expect(AuthModalCanLogin("aas", "qwwq")).toBe(true);
  });

  test("with one empty params", () => {
    expect(AuthModalCanLogin("", "weeee")).toBe(false);
  });
});
