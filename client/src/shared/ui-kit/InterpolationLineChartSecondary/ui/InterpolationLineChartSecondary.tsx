import { memo, useEffect, useRef, useState } from "react";
import { InterpolationLineChartSecondaryProps } from "../model/InterpolationLineChartSecondary_types";
import { Chart, ChartData, LineController, LineElement } from "chart.js/auto";
import { Line } from "react-chartjs-2";

Chart.register(LineController, LineElement);

export const InterpolationLineChartSecondary: React.FC<InterpolationLineChartSecondaryProps> =
  memo(({ chartDataSets, className }): React.JSX.Element => {
    // Добавление градиента и нужная стилизация
    const chartGradient = useRef<CanvasGradient | "var(--white-color)">(
      "var(--white-color)"
    );

    const [chartData, setChartData] = useState<ChartData<"line">>({
      labels: chartDataSets.map((data) => data.label),
      datasets: [
        {
          data: chartDataSets.map((data) => data.value),
          tension: 0,
          backgroundColor: chartGradient.current,
          borderColor: "#35EC17",
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(0, 0, 0, 0)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#f55",
          pointHoverBorderColor: "var(--white-color)",
          pointRadius: 10,
          fill: true,
        },
      ],
    });

    const [gradientIsAdded, setGradientIsAdded] = useState<boolean>(false);

    useEffect(() => {
      if (!gradientIsAdded) {
        const ctx = document.getElementById(
          "InterpolationLineChartSecondaryCanvas"
        ) as HTMLCanvasElement;

        if (ctx) {
          chartGradient.current = ctx!
            .getContext("2d")!
            .createLinearGradient(0, 0, 0, 400);

          chartGradient.current.addColorStop(0, "rgba(53, 236, 23, 0)");

          chartGradient.current.addColorStop(1, "rgba(53, 236, 23, 1)");

          setChartData({
            labels: chartData.labels,
            datasets: [
              {
                ...chartData.datasets[0],
                backgroundColor: chartGradient.current,
              },
            ],
          });

          setGradientIsAdded(true);
        }
      }
    }, [chartData.datasets, chartData.labels, gradientIsAdded]);

    return (
      <Line
        id="InterpolationLineChartSecondaryCanvas"
        className={className}
        options={{
          responsive: true,
          spanGaps: true,
          interaction: {
            mode: "index",
            intersect: false,
          },
          elements: {
            line: {
              fill: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
        }}
        data={chartData}
      />
    );
  });
