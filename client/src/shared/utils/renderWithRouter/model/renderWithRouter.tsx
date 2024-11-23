import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export const renderWithRouter = (
  component: React.ReactElement,
  initialRoute: string = "/",
) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>,
  );
};
renderWithRouter.displayName = "renderWithRouter";
