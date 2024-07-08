import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
import { userEvent } from "@storybook/test";
import { renderWithRouter } from "@/shared/utils/renderWithRouter";

describe("Header", () => {
  test("render test", () => {
    renderWithRouter(<Header />);
    expect(screen.getByTestId("headerSwitcher")).toBeInTheDocument();
    expect(screen.getByTestId("headerLink")).toBeInTheDocument();
    expect(screen.getByTestId("headerDropDown")).toBeInTheDocument();
  });

  test("switchers click test", () => {
    renderWithRouter(<Header />);
    const switcher = screen.getByTestId("headerSwitcher");
    userEvent.click(switcher);
    expect(screen.getByTestId("headerSwitcher")).toHaveClass("Mui-checked");
  });
});
