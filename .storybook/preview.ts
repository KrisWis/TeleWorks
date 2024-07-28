import type { Preview } from "@storybook/react";
import { CSSResetDecorator } from "./decorators/CSSResetDecorator";
import { RouterDecorator } from "./decorators/RouterDecorator";
import { ReduxDecorator } from "./decorators/ReduxDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [CSSResetDecorator, RouterDecorator, ReduxDecorator],
};

export default preview;
