import { ReactNode } from "react";

export interface TransitionBetweenBlock {
  component: ReactNode;
  condition: boolean;
  id: number;
  "data-testid"?: string;
}

export interface TransitionBetweenBlocksProps {
  className?: string;
  blocks: TransitionBetweenBlock[];
  transitionDuration: number;
  defaultIndex: number;
  defaultIsMounted?: boolean;
}
