import { graphCalc } from "@/lib/graphCalc";
import { Line } from "./Line";

const values = [1380, 1330, 1350, 1203, 1230, 1300, 1203];
const date = [
  "23-11-04",
  "23-11-05",
  "23-11-06",
  "23-11-07",
  "23-11-08",
  "23-11-09",
  "23-11-10",
];

export const LineGraph = () => {
  const { max, min, gap } = graphCalc(values);
  return (
    <div className="w-[50vw] h-[50vh]">
      <svg viewBox="0 0 800 500">
        <Line y1={0} y2={500} x1={0} x2={0} />
        <Line y1={500} y2={500} x1={0} x2={350} />
        {values.map((price, index) => (
          <>
            <Line
              x1={index * 50}
              y1={max - price}
              x2={(index + 1) * 50}
              y2={max - values[index + 1]}
              key={index}
            />
            <text color="#000">{date[index]}</text>
          </>
        ))}
      </svg>
    </div>
  );
};
