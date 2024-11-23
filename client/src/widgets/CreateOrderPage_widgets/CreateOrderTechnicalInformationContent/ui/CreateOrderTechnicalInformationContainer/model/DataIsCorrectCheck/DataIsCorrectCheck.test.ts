import { DataIsCorrectCheck } from "./DataIsCorrectCheck";

describe("DataIsCorrectCheck", () => {
  test("with uncorrect params", () => {
    expect(DataIsCorrectCheck("", false)).toBe(false);
  });

  test("with correct form text", () => {
    expect(
      DataIsCorrectCheck(
        `Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.`,
        false,
      ),
    ).toBe(false);
  });

  test("with correct params", () => {
    expect(
      DataIsCorrectCheck(
        `Что такое Lorem Ipsum? Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.`,
        true,
      ),
    ).toBe(true);
  });
});
