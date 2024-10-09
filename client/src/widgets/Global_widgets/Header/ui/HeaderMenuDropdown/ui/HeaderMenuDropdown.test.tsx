import { Header } from "../../..";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "@/shared/utils/renderWithRouter";

describe("Global_widgets/Header/HeaderMenuDropdown", () => {
  test("User can leave from account", async () => {
    renderWithRouter(<Header />);

    expect(screen.getByTestId("HeaderMenuDropdown.menu")).toBeInTheDocument();

    expect(
      screen.queryByTestId("HeaderMenuDropdown.login")
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId("HeaderMenuDropdown.leave"));

    expect(
      screen.queryByTestId("HeaderMenuDropdown.menu")
    ).not.toBeInTheDocument();

    expect(screen.getByTestId("HeaderMenuDropdown.login")).toBeInTheDocument();
  });
});
