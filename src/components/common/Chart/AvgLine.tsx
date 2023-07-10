import { NumberValue } from "d3-scale";
import React, { FC } from "react";

interface AvgLineProps {
  barPlothWidth: number;
  yAxisLength: number;
  dataYMin: number;
  x: number;
  xX: number;
  clo5Array: [number, number];
  scaleY: (clo: NumberValue) => number;
  color: string | undefined;
}

const AvgLine: FC<AvgLineProps> = ({
  dataYMin,
  barPlothWidth,
  yAxisLength,
  clo5Array,
  x,
  xX,
  scaleY,
  color,
}) => {
  return (
    <>
      {clo5Array[0] !== undefined && clo5Array[1] !== undefined ? (
        <line
          stroke={color}
          x1={x + (barPlothWidth - 5) / 2}
          x2={xX + (barPlothWidth - 5) / 2}
          y1={yAxisLength - scaleY(clo5Array[0])}
          y2={yAxisLength - scaleY(clo5Array[1])}
        />
      ) : null}
    </>
  );
};

export default React.memo(AvgLine);
