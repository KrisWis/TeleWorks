import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HowItWorks__item } from "./HowItWorks__item";

describe("HowItWorks Item", () => {
  test("render test", () => {
    render(<HowItWorks__item index={"01"} text="aboba" />);
    expect(screen.getByTestId("howItWorks__item")).toBeInTheDocument();
    expect(screen.getByTestId("howItWorks__item__index")).toHaveTextContent(
      "01"
    );
    expect(screen.getByTestId("howItWorks__item__text")).toHaveTextContent(
      "aboba"
    );
  });
});
