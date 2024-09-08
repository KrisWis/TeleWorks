export interface MarkdownTextareaProps {
  TextareaValue: string;
  setTextareaValue: React.Dispatch<React.SetStateAction<string>>;
  maxSymbolsAmount: number;
  minSymbolsAmount: number;
}

export enum MarkdownTextareaTabsEnum {
  BOLD = "bold",
  ITALIC = "italic",
  ORDERED_LIST = "ordered_list",
}

export type MarkdownTextareaTabs = {
  [key in MarkdownTextareaTabsEnum]: string | JSX.Element;
};
