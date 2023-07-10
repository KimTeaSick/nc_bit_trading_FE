import { FC } from "react";

interface HoLineProps {
  numYTicks: number;
  yAxisLength: number;
  xAxisLength: number;
  x0: number;
  y0: number;
  dataYMax: number;
  dataYRange: number;
}

const HoLine: FC<HoLineProps> = ({
  numYTicks,
  yAxisLength,
  xAxisLength,
  x0,
  y0,
  dataYMax,
  dataYRange,
}) => {
  return (
    <>
      {Array.from({ length: numYTicks }).map((_, index) => {
        const y = y0 + index * (yAxisLength / numYTicks);
        const yValue = Math.round(dataYMax - index * (dataYRange / numYTicks));
        return (
          <g key={index}>
            <line
              className="lineLight"
              x1={xAxisLength + x0}
              x2={x0}
              y1={y}
              y2={y}
              stroke="gray"
              opacity={0.2}
            />
            <text x={x0 + xAxisLength} y={y + 13} textAnchor="end">
              {/* volume 값 k로 치환 */}
              {Math.abs(yValue) > 999
                ? Math.sign(yValue) *
                    (Math.round(Math.abs(yValue) / 100) / 10) +
                  "k"
                : Math.sign(yValue) * Math.abs(yValue)}
              {/* {yValue} */}
            </text>
          </g>
        );
      })}
    </>
  );
};

export default HoLine;
