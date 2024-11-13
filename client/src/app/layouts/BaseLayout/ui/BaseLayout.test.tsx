import { renderWithRouter } from "@/shared/utils/renderWithRouter";
import { screen } from "@testing-library/react";
import { App } from "./BaseLayout";

describe("App", () => {
  test("Страница должна отрендериться", async () => {
    renderWithRouter(<App />);

    const page = await screen.findByTestId("MainPage");
    expect(page).toBeInTheDocument();
  });

  test("Страница не найдена", async () => {
    renderWithRouter(<App />, "/3WEWEWEEWEW");

    const page = await screen.findByTestId("NotFoundPage");
    expect(page).toBeInTheDocument();
  });
});
