export enum ShareTypes {
  DEFAULT = "default",
  RED = "red",
}

export interface ShareProps {
  type?: ShareTypes;
  url: string;
  IconClassName?: string;
}
