import { FC, useEffect, useState } from "react";
import { ASSETS_ROW } from "../../assetsStatus/variables/variables";
import { D_W_M } from "../variables/TABLE_COL";

interface Props {
  name: string;
  table_data: [number, number, string][] | null;
  total_invest: number;
}

const row_class = "p-1 pl-3 w-full border-b-2 dark:text-white";

const AssetsTable: FC<Props> = ({ table_data = [], total_invest, name }) => {
  return (
    <div className="w-full overflow-hidden rounded-sm md:w-1/2 dark:text-white ">
      <div id="table" className="rounded-md shadow-md">
        <div
          id="title"
          className="border-b-2 flex justify-between p-3 font-bold"
        >
          <p>{name}</p>
          <p>총 투자원금 : {total_invest} 원</p>
        </div>

        <div id="body" className="flex w-full">
          <div
            id="row-left"
            className="flex w-1/4 flex-col border-r-2 dark:border-l-2"
          >
            {ASSETS_ROW.map((value, index) => (
              <div key={index} className={row_class}>
                {value}
              </div>
            ))}
          </div>

          <div
            id="row-right"
            className="flex overflow-x-auto scrollbar-hide whitespace-nowrap text-gray-800 w-3/4 "
          >
            {table_data?.map((value, index) => (
              <div key={index} className="flex-col border-r-2 w-1/3">
                <p className={row_class}>{D_W_M[index]}</p>
                <p className={row_class}>
                  {value[1] === 0 ? "-" : value[1] + " 원"}
                </p>
                <p className={row_class}>{value[0].toFixed(2)} %</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsTable;
