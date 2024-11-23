import { IsLegalEntityCheck, LegalEntity } from "./IsLegalEntityCheck";

describe("IsLegalEntityCheck", () => {
  test("with uncorrect param", () => {
    expect(IsLegalEntityCheck("ИНН")).toBe(false);
  });

  test("with correct param", () => {
    expect(IsLegalEntityCheck(LegalEntity)).toBe(true);
  });
});
