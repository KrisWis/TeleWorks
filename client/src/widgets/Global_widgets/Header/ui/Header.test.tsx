import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
import { renderWithRouter } from "@/shared/utils/renderWithRouter";

describe("Header", () => {
  test("render test", () => {
    renderWithRouter(<Header />);
    expect(screen.getByTestId("headerCaption")).toBeInTheDocument();
    expect(screen.getByTestId("headerSwitcher")).toBeInTheDocument();
    expect(screen.getByTestId("switcher__customer")).toBeInTheDocument();
    expect(screen.getByTestId("switcher__performer")).toBeInTheDocument();
  });
});
