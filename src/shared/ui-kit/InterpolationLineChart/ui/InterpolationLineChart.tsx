import styles from "./InterpolationLineChart.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import { InterpolationLineChartProps } from "../model/InterpolationLineChart_types";
import { Line } from "react-chartjs-2";
import { Chart, LineController, LineElement, ChartData } from "chart.js/auto";
import { Flex } from "../../Stack";
import Switch from "@mui/material/Switch";
import "./InterpolationLineChart__switcher.scss";

Chart.register(LineController, LineElement);

export const InterpolationLineChart: React.FC<InterpolationLineChartProps> =
  memo(({ charts }): React.JSX.Element => {
    // Переключение свитчеров
    const [
      InterpolationLineChartSwitcherChoiceIndex,
      setInterpolationLineChartSwitcherChoiceIndex,
    ] = useState<number>(0);

    const chartsKeys: Array<keyof typeof charts> = Object.keys(charts);

    // Выбор категорий
    const [chartCategory, setChartCategory] = useState<string>(
      charts[chartsKeys[InterpolationLineChartSwitcherChoiceIndex]][0].category
    );

    const chartCategoryIndex: number = charts[
      chartsKeys[InterpolationLineChartSwitcherChoiceIndex]
    ].findIndex((item) => item.category == chartCategory);

    // Добавление градиента и нужная стилизация
    const chartGradient = useRef<CanvasGradient | "#fff">("#fff");

    const [chartData, setChartData] = useState<ChartData<"line">>({
      labels: charts[chartsKeys[InterpolationLineChartSwitcherChoiceIndex]][
        chartCategoryIndex
      ].dataSets.map((data) => data.label),
      datasets: [],
    });

    const [gradientIsAdded, setGradientIsAdded] = useState<boolean>(false);

    useEffect(() => {
      if (!gradientIsAdded) {
        const ctx = document.getElementById(
          "InterpolationLineChartCanvas"
        ) as HTMLCanvasElement;

        if (ctx) {
          chartGradient.current = ctx!
            .getContext("2d")!
            .createLinearGradient(0, 0, 0, 400);

          chartGradient.current.addColorStop(0, "rgba(66, 102, 198, 1)");

          chartGradient.current.addColorStop(1, "rgba(66, 102, 198, 0)");

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
    }, [
      InterpolationLineChartSwitcherChoiceIndex,
      chartCategoryIndex,
      chartData.datasets,
      chartData.labels,
      charts,
      chartsKeys,
      gradientIsAdded,
    ]);

    useEffect(() => {
      setChartData({
        labels: charts[chartsKeys[InterpolationLineChartSwitcherChoiceIndex]][
          chartCategoryIndex
        ].dataSets.map((data) => data.label),
        datasets: [
          {
            data: charts[chartsKeys[InterpolationLineChartSwitcherChoiceIndex]][
              chartCategoryIndex
            ].dataSets.map((data) => data.value),
            tension: 0.5,
            backgroundColor: chartGradient.current,
            borderColor: "#4266C6",
            pointBorderColor: "transparent",
            pointBackgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#4266c6",
            pointRadius: 15,
            fill: true,
          },
        ],
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [InterpolationLineChartSwitcherChoiceIndex, chartCategoryIndex, charts]);

    return (
      <div className={styles.InterpolationLineChart}>
        <Flex direction="row" justify="between" align="center">
          <Flex direction="row" gap="5" align="center">
            {charts[chartsKeys[InterpolationLineChartSwitcherChoiceIndex]].map(
              (chart) => (
                <div
                  key={chart.category}
                  className={`${styles.InterpolationLineChart__category} 
                ${chartCategory == chart.category ? styles.InterpolationLineChart__category__active : ""}`}
                  onClick={() => setChartCategory(chart.category)}
                >
                  <span
                    className={styles.InterpolationLineChart__category_text}
                  >
                    {chart.category}
                  </span>
                </div>
              )
            )}
          </Flex>

          {chartsKeys.length > 1 && (
            <div className={styles.InterpolationLineChart__switcherWrapper}>
              <div className={styles.InterpolationLineChart__switcher}>
                <span
                  className={`${styles.InterpolationLineChart__switcher__title} ${InterpolationLineChartSwitcherChoiceIndex == 1 ? styles.InterpolationLineChart__switcher__title__active : ""}`}
                >
                  {chartsKeys[0]}
                </span>
              </div>

              <Switch
                onClick={() =>
                  InterpolationLineChartSwitcherChoiceIndex == 0
                    ? setInterpolationLineChartSwitcherChoiceIndex(1)
                    : setInterpolationLineChartSwitcherChoiceIndex(0)
                }
                className="InterpolationLineChart__switcherComponent"
                {...{
                  inputProps: {
                    "aria-label": "Свитчер для переключения типов графика",
                  },
                }}
                defaultChecked
              />

              <div className={styles.InterpolationLineChart__switcher}>
                <span
                  className={`${styles.InterpolationLineChart__switcher__title} ${InterpolationLineChartSwitcherChoiceIndex == 0 ? styles.InterpolationLineChart__switcher__title__active : ""}`}
                >
                  {chartsKeys[1]}
                </span>
              </div>
            </div>
          )}
        </Flex>

        <Line
          className={styles.InterpolationLineChartCanvas}
          id="InterpolationLineChartCanvas"
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
                grid: {
                  display: false,
                },
                ticks: {
                  color: "rgba(0, 0, 0, 0.4)",
                },
              },
              y: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: "rgba(0, 0, 0, 0.2)",
                },
              },
            },
          }}
          data={chartData}
        />
      </div>
    );
  });
