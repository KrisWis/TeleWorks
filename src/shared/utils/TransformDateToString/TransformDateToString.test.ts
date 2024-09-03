import { TransformDateToString } from "./TransformDateToString";

describe("TransformDateToString", () => {
  test("Check with first date", () => {
    expect(TransformDateToString(new Date(2024, 8, 18, 23, 43))).toBe(
      "18.08.2024 23:43"
    );
  });

  test("Check with second date without hours", () => {
    expect(TransformDateToString(new Date(2026, 10, 6), false)).toBe(
      "06.10.2026"
    );
  });

  test("Check with third date without hours but with hours", () => {
    expect(TransformDateToString(new Date(2026, 10, 6))).toBe(
      "06.10.2026 00:00"
    );
  });

  test("Check with fourth date", () => {
    expect(TransformDateToString(new Date(2026, 11, 18, 0, 43))).toBe(
      "18.11.2026 00:43"
    );
  });

  test("Check with fifth date", () => {
    expect(TransformDateToString(new Date(2026, 2, 18, 12, 47))).toBe(
      "18.02.2026 12:47"
    );
  });
});
