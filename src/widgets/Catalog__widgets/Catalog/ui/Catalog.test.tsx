import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Catalog } from "./Catalog";

describe("Catalog Filter Select", () => {
  test("render test", () => {
    render(<Catalog />);
    expect(screen.getByTestId("catalog")).toBeInTheDocument();
  });
});
