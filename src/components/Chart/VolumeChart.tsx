import { ChartDataType, DetailCoinType } from "@/@types/CoinList";
import { Volume } from "@amcharts/amcharts5/stock";
import { FC } from "react";
import { useSelector } from "react-redux";
import HoLine from "./HoLine";

interface VolumeChartProps {
  CHART_WIDTH: number;
  CHART_HEIGHT: number;
  chartData: ChartDataType[];
}
const VolumeChart: FC<VolumeChartProps> = ({
  CHART_WIDTH,
  CHART_HEIGHT,
  chartData,
}) => {
  let SVG_CHART_WIDTH = typeof CHART_WIDTH === "number" ? CHART_WIDTH * 1 : 0;
  let SVG_CHART_HEIGHT =
    typeof CHART_HEIGHT === "number" ? CHART_HEIGHT * 0.5 : 0;

  const x0 = 0;
  const y0 = 0;

  const xForPrice = 75;
  const xAxisLength = SVG_CHART_WIDTH * 0.9;
  const yAxisLength = SVG_CHART_HEIGHT * 0.3;
  const xAxisY = y0 + yAxisLength;

  let volData = chartData?.reduce((accumulator: any[], currentValue) => {
    return [...accumulator, currentValue.Volume];
  }, []);
  const dataYRange = Math.max(...volData) - Math.min(...volData);
  const numYTicks = 5;
  const max = chartData.reduce(
    (max, chartData) => Math.max(max, chartData.Volume),
    0
  );
  const min = chartData.reduce(
    (min, chartData) => Math.min(min, chartData.Volume),
    Infinity
  );
  // const barPlotWidth = xAxisLength / ÷chartData.length;
  const barPlotWidth = xAxisLength / 120;

  return (
    <svg width={xAxisLength} height={yAxisLength}>
      <line x1={x0} y1={xAxisY} x2={xAxisLength} y2={xAxisY} stroke={"red"} />
      <HoLine
        numYTicks={numYTicks}
        yAxisLength={yAxisLength}
        xAxisLength={xAxisLength}
        x0={x0}
        y0={y0}
        dataYMax={max}
        dataYRange={dataYRange}
      />
      {chartData.map((value, index) => {
        // x는 바 위치
        const x = x0 + index * barPlotWidth;
        const yRatio = (value.Volume - min) / dataYRange;
        // y는 바 길이 측정용
        const y = y0 + (1 - yRatio) * yAxisLength;
        const height = yRatio * yAxisLength;
        const sidePadding = 3;
        return (
          <g key={index}>
            <rect
              fill={
                value.Volume > chartData[index - 1]?.Volume ? "red" : "blue"
              }
              x={x + sidePadding / 2}
              y={y}
              width={barPlotWidth - sidePadding}
              height={height}
            ></rect>
            <text x={x + barPlotWidth / 2} y={xAxisY + 16} textAnchor="middle">
              {value.Date}
            </text>
          </g>
        );
      })}
      <line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} stroke={"red"} />
    </svg>
  );
};

export default VolumeChart;
