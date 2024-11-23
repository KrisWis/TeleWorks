import "@/shared/main.scss";
import { Decorator } from "@storybook/react";

export const CSSMainDecorator: Decorator = (story) => story(); // Story это сам компонент, который и оборачивается.
