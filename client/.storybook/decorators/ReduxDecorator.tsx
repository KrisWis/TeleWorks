import React from "react";
import { Decorator } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../src/app/store/AppStore";

export const ReduxDecorator: Decorator = (story) => (
  <Provider store={store}>{story()}</Provider>
);
