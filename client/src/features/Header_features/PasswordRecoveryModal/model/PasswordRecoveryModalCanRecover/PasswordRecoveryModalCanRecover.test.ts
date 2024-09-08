import { PasswordRecoveryModalCanRecover } from "./PasswordRecoveryModalCanRecover";

describe("PasswordRecoveryModalCanRecover", () => {
  test("with empty param", () => {
    expect(PasswordRecoveryModalCanRecover("")).toBe(false);
  });

  test("with correct param", () => {
    expect(PasswordRecoveryModalCanRecover("email")).toBe(true);
  });
});
