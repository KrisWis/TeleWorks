import { InterpolationLineChartDataSet } from "@/shared/ui-kit/InterpolationLineChart/model/InterpolationLineChart_types";

interface Stats__item__props__subscribersAmount {
  prefix: "-" | "+";
  number: number;
}

interface Stats__item__props__Stat {
  stat: string;
  postfix?: string;
}

export enum Stats__item__types {
  MEDIUM = "medium",
  SMALL = "small",
}

export interface Stats__item__props {
  amount: string;
  stats: readonly Stats__item__props__Stat[];
  caption: string;
  amounts?: readonly string[];
  amounts__subscribers?: readonly Stats__item__props__subscribersAmount[];
  graphicChart?: InterpolationLineChartDataSet[];
  type?: Stats__item__types;
}
