import { FC, useEffect, useState } from "react";
import { ChartDataType } from "@/@types/CoinList";
import { scaleLinear } from "d3-scale";
import HoLine from "./HoLine";
import { timeChange } from "@/lib/timeChage";
import AvgLine from "./AvgLine";
import { krwChage } from "@/lib/krwChage";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";

interface CandleChartProps {
  CHART_WIDTH: number;
  CHART_HEIGHT: number;
  chartData: ChartDataType[];
}
const CandleChart: FC<CandleChartProps> = ({
  CHART_WIDTH,
  CHART_HEIGHT,
  chartData,
}) => {
  const [hoverInfo, setHoverInfo] = useState<any[] | undefined>();
  const {
    avg5Data: clo,
    avg20Data,
    avg60Data,
  } = useSelector((state: RootStateType) => state.coin);

  console.log("avg20Data", avg20Data);
  console.log("avg60Data", avg60Data);

  const dataArray: any[] = [];
  let SVG_CHART_WIDTH = typeof CHART_WIDTH === "number" ? CHART_WIDTH * 1 : 0;
  let SVG_CHART_HEIGHT =
    typeof CHART_HEIGHT === "number" ? CHART_HEIGHT * 0.5 : 0;

  const x0 = 0;
  const y0 = 0;
  const xForPrice = 75;
  const xAxisLength = SVG_CHART_WIDTH * 0.9;
  const yAxisLength = SVG_CHART_HEIGHT * 0.94;
  const xAxisY = y0 + yAxisLength;
  const barPlothWidth = xAxisLength / 120;
  const clo5Array: [number, number][] = [];
  const clo20Array: [number, number][] = [];
  const clo60Array: [number, number][] = [];

  const dataYMax = chartData.reduce(
    (max, crr) => Math.max(max, crr.High),
    -Infinity
  );

  const dataYMin = chartData.reduce(
    (min, crr) => Math.min(min, crr.Low),
    +Infinity
  );
  const dataYRange = dataYMax - dataYMin;
  const numYTicks = 7;

  for (let i = 0; i < chartData.length; i++) {
    // clo5Array.push([clo[i], clo[i + 1]]);
    clo5Array.push([clo[i], clo[i + 1] == undefined ? clo[i] : clo[i + 1]]);
    clo20Array.push([
      avg20Data[i],
      avg20Data[i + 1] == undefined ? avg20Data[i] : avg20Data[i + 1],
    ]);
    clo60Array.push([
      avg60Data[i],
      avg60Data[i + 1] == undefined ? avg60Data[i] : avg60Data[i + 1],
    ]);
    dataArray.push([
      chartData[i].Date,
      chartData[i].Open,
      chartData[i].Close,
      chartData[i].High,
      chartData[i].Low,
      chartData[i].Volume,
      clo5Array[i],
      clo20Array[i],
      clo60Array[i],
    ]);
  }

  return (
    <>
      <div style={{ gap: "15px", display: "flex" }}>
        <div> {hoverInfo ? timeChange(hoverInfo[0]) : ""}</div>
        <div> 고가 : {hoverInfo ? krwChage(String(hoverInfo[3])) : ""}</div>
        <div> 저가 : {hoverInfo ? krwChage(String(hoverInfo[4])) : ""}</div>
        <div> 종가 : {hoverInfo ? krwChage(String(hoverInfo[2])) : ""}</div>
        <div> 시가 : {hoverInfo ? krwChage(String(hoverInfo[1])) : ""}</div>
        <div> 거래량 : {hoverInfo ? hoverInfo[5] : ""}</div>
      </div>
      <svg width={xAxisLength} height={SVG_CHART_HEIGHT}>
        <line //x 선
          x1={x0}
          x2={xAxisLength}
          y1={yAxisLength}
          y2={yAxisLength}
          stroke={"#50535E"}
        />
        <HoLine
          numYTicks={numYTicks}
          yAxisLength={yAxisLength}
          xAxisLength={xAxisLength}
          x0={x0}
          y0={y0}
          dataYMax={dataYMax}
          dataYRange={dataYRange}
        />
        <line
          x1={CHART_WIDTH - x0}
          y1={y0}
          x2={x0 + xAxisLength}
          y2={y0 + yAxisLength}
        />
        {dataArray.map((value, index) => {
          const openAndClose = [];
          openAndClose.push([value[1], value[2]]);
          const x = x0 + index * barPlothWidth;
          const xX = x0 + (index + 1) * barPlothWidth;
          const sidePadding = 5;
          const max = Math.max(value[1], value[2]);
          const min = Math.min(value[1], value[2]);
          const scaleY = scaleLinear()
            .domain([dataYMin, dataYMax])
            .range([y0, yAxisLength]);

          const fill = value[2] > value[1] ? "red" : "blue";

          return (
            <g key={index}>
              <rect
                x={x}
                y={y0}
                opacity={0}
                height={yAxisLength}
                width={barPlothWidth - sidePadding}
                onMouseOver={() => setHoverInfo(value)}
              />
              <line
                x1={x + (barPlothWidth - sidePadding) / 2}
                x2={x + (barPlothWidth - sidePadding) / 2}
                y1={yAxisLength - scaleY(value[4])}
                y2={yAxisLength - scaleY(value[3])}
                stroke={value[1] > value[2] ? "blue" : "red"}
              />
              <AvgLine
                dataYMin={dataYMin}
                barPlothWidth={barPlothWidth}
                yAxisLength={yAxisLength}
                x={x}
                xX={xX}
                scaleY={scaleY}
                clo5Array={value[6]}
                color="green"
              />
              <AvgLine
                dataYMin={dataYMin}
                barPlothWidth={barPlothWidth}
                yAxisLength={yAxisLength}
                x={x}
                xX={xX}
                scaleY={scaleY}
                clo5Array={value[7]}
                color="skyblue"
              />
              <AvgLine
                dataYMin={dataYMin}
                barPlothWidth={barPlothWidth}
                yAxisLength={yAxisLength}
                x={x}
                xX={xX}
                scaleY={scaleY}
                clo5Array={value[8]}
                color="orange"
              />
              <rect
                {...{ fill }}
                x={x}
                width={barPlothWidth - sidePadding}
                y={yAxisLength - scaleY(max)}
                // 시가 종가 최대 최소값의 차
                height={scaleY(max) - scaleY(min)}
              />
            </g>
          );
        })}
        <line // y 선
          x1={x0}
          y1={y0}
          x2={x0}
          y2={y0 + yAxisLength}
          stroke={"#50535E"}
        />
      </svg>
    </>
  );
};

export default CandleChart;
