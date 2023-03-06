import { FC } from "react";

interface AvgLineProps {
  barPlothWidth: number;
  yAxisLength: number;
  dataYMin: number;
  x: number;
  xX: number;
  clo5Array: [number, number][];
  scaleY: (clo: [number, number]) => number;
}

const AvgLine: FC<AvgLineProps> = ({
  dataYMin,
  barPlothWidth,
  yAxisLength,
  clo5Array,
  x,
  xX,
  scaleY,
}) => {
  console.log("clo5Array[0]", clo5Array[0]);
  // console.log("clo5Array[1]", clo5Array[1]);

  return (
    <>
      {clo5Array[0] > dataYMin && clo5Array[0] != clo5Array[1] ? (
        <line
          stroke="gold"
          x1={x + (barPlothWidth - 5) / 2}
          x2={xX + (barPlothWidth - 5) / 2}
          y1={yAxisLength - scaleY(clo5Array[0])}
          y2={yAxisLength - scaleY(clo5Array[1])}
        />
      ) : null}
    </>
  );
};

export default AvgLine;
