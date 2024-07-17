import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CatalogFilterSelect } from "./CatalogFilterSelect";

describe("Catalog Filter Select", () => {
  test("render test", () => {
    render(
      <CatalogFilterSelect
        selectedOptions={[
          { value: "Все тематики", label: "Все тематики" },
          { value: "Все тематики2", label: "Все тематики2" },
          { value: "Все тематики3", label: "Все тематики3" },
        ]}
      />
    );
    expect(screen.getByTestId("CatalogFilterSelect")).toBeInTheDocument();
  });
});
