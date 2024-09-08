import { createPortal } from "react-dom";
import { PortalElementProps } from "./PortalElement_types";

export const PortalElement = (props: PortalElementProps) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
