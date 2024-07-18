import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
import { renderWithRouter } from "@/shared/utils/renderWithRouter";
import styles from "./Header.module.scss";

describe("Header", () => {
  test("render test", () => {
    renderWithRouter(<Header />);
    expect(screen.getByTestId("headerCaption")).toBeInTheDocument();
    expect(screen.getByTestId("headerSwitcher")).toBeInTheDocument();
    expect(screen.getByTestId("headerLink")).toBeInTheDocument();
    expect(screen.getByTestId("headerDropDown")).toBeInTheDocument();
  });

  test("switcher switch test", () => {
    renderWithRouter(<Header />);
    // console.log(styles);
    // console.log(screen.getByTestId("switcher__performer"));
    // expect(screen.getByTestId("switcher__performer")).toHaveClass(
    //   styles.header__item__title__active
    // );
  });
});
