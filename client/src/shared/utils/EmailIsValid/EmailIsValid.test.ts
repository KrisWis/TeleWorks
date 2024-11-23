import { EmailIsValid } from "./EmailIsValid";

describe("EmailIsValid", () => {
  test("uncorrect email", () => {
    expect(EmailIsValid("erre")).toBe(false);
  });

  test("correct yandex email", () => {
    expect(EmailIsValid("nekrasov.2h@yandex.ru")).toBe(true);
  });

  test("correct gmail email", () => {
    expect(EmailIsValid("katerina.nekrasova.2020@mail.ru")).toBe(true);
  });
});
