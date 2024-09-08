import { URLIsAbsolute } from "./URLIsAbsolute";

describe("URLIsAbsolute", () => {
  test("test with absolute link", () => {
    expect(URLIsAbsolute("http:sss")).toBe(true);
  });

  test("test with absolute link with https", () => {
    expect(URLIsAbsolute("https:sss")).toBe(true);
  });

  test("test with relative link", () => {
    expect(URLIsAbsolute("/faq")).toBe(false);
  });
});
