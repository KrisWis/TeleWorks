import type { Preview } from "@storybook/react";
import { CSSResetDecorator } from "./decorators/CSSResetDecorator";
import { RouterDecorator } from "./decorators/RouterDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [CSSResetDecorator, RouterDecorator],
};

export default preview;
