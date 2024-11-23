import type { Preview } from "@storybook/react";
import { CSSResetDecorator } from "./decorators/CSSResetDecorator";
import { RouterDecorator } from "./decorators/RouterDecorator";
import { ReduxDecorator } from "./decorators/ReduxDecorator";
import { CSSMainDecorator } from "./decorators/CSSMainDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    CSSResetDecorator,
    RouterDecorator,
    ReduxDecorator,
    CSSMainDecorator,
  ],
  tags: ["autodocs", "autodocs"],
};

export default preview;
