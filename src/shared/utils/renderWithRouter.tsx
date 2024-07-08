import { MemoryRouter } from "react-router-dom";
import { App } from "@/app/layouts/ui/BaseLayout";

export const renderWithRouter = (
  component: React.ReactElement,
  initialRoute: string = "/"
): React.ReactElement => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
      {component}
    </MemoryRouter>
  );
};
