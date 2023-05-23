import { FC } from "react";
import LineChart from "../charts/LineChart";

interface Props {
  data: any;
}

const Chart: FC<Props> = ({ data }) => {
  console.log("CCCCChart data:::::::::::::", data);
  let defaultData = data?.map((coin: any, index: number) => {
    const key = Object.keys(coin);
    const value: any = Object.values(coin);
    const rowData = value[0].tenRow[0].Close;
    console.log("rowData", Object.values(rowData));
    return {
      name: key[0],
      data: Object.values(rowData),
    };
  });
  /* 
    {
      name: "coin-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  */

  console.log("defaultData :::::", defaultData);

  return (
    <>
      {data !== undefined ? (
        <div>
          <LineChart chartData={defaultData} />
        </div>
      ) : null}
    </>
  );
};

export default Chart;
