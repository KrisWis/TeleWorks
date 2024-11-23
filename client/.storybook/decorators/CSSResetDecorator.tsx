import "@/shared/reset.scss";
import { Decorator } from "@storybook/react";

export const CSSResetDecorator: Decorator = (story) => story(); // Story это сам компонент, который и оборачивается.
