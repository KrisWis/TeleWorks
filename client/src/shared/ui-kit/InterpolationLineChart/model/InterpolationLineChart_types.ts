export interface InterpolationLineChartDataSet {
  id: number;
  label: string;
  value: number;
}

export type InterpolationLineChart = {
  category: string;
  dataSets: InterpolationLineChartDataSet[];
};

export type InterpolationLineChartType = {
  [key: string]: InterpolationLineChart[];
};

export interface InterpolationLineChartProps {
  charts: InterpolationLineChartType;
  className?: string;
}
