import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Buy_placement__item } from "./Buy_placement__item";

describe("BuyPlacement Item", () => {
  test("with only first param", () => {
    render(<Buy_placement__item amount={"amount"} text="text" />);
    expect(screen.getByTestId("Buy_placement__item")).toBeInTheDocument();
    expect(screen.getByTestId("Buy_placement__item__amount")).toHaveTextContent(
      "amount"
    );
    expect(screen.getByTestId("Buy_placement__item__text")).toHaveTextContent(
      "text"
    );
  });
});
