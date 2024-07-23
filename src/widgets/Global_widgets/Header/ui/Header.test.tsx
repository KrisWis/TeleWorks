import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
import { renderWithRouter } from "@/shared/utils/renderWithRouter";

describe("Header", () => {
  test("render test", () => {
    renderWithRouter(<Header />);
    expect(screen.getByTestId("headerCaption")).toBeInTheDocument();
    expect(screen.getByTestId("headerSwitcher")).toBeInTheDocument();
    expect(screen.getByTestId("headerLink")).toBeInTheDocument();
    expect(screen.getByTestId("switcher__customer")).toBeInTheDocument();
    expect(screen.getByTestId("switcher__performer")).toBeInTheDocument();
  });

  test("switcher switch test", () => {
    renderWithRouter(<Header />);
    expect(
      screen.getByTestId("switcher__customer").getAttribute("data-disabled")
    ).toBe("false");
    expect(
      screen.getByTestId("switcher__performer").getAttribute("data-disabled")
    ).toBe("true");

    fireEvent.click(screen.getByTestId("headerSwitcher"));

    expect(
      screen.getByTestId("switcher__customer").getAttribute("data-disabled")
    ).toBe("true");
    expect(
      screen.getByTestId("switcher__performer").getAttribute("data-disabled")
    ).toBe("false");

    fireEvent.click(screen.getByTestId("headerSwitcher"));

    expect(
      screen.getByTestId("switcher__customer").getAttribute("data-disabled")
    ).toBe("false");
    expect(
      screen.getByTestId("switcher__performer").getAttribute("data-disabled")
    ).toBe("true");
  });

  test("dropdown click test", () => {
    renderWithRouter(<Header />);
    expect(screen.findByTestId("flowbite-dropdown")).toEqual(
      new Promise(() => {})
    );
    fireEvent.click(screen.getByTestId("header-flowbite-dropdown-trigger"));
    expect(screen.getByTestId("flowbite-dropdown")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("header-flowbite-dropdown-trigger"));
    expect(screen.findByTestId("flowbite-dropdown")).toEqual(
      new Promise(() => {})
    );
  });
});
