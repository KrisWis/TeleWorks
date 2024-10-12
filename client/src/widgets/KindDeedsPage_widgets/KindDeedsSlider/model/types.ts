/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactElement } from "react";

export interface KindDeedsSliderProps {
  items: ReactElement[];
  prevArrowId: string;
  nextArrowId: string;
  title: string;
  titleRed?: string;
}
