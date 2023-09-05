import { FC, useEffect, useState } from "react";
import { ASSETS_ROW } from "../variables/variables";

interface Props {
  table_data: [number, number, number, string, number][] | null;
  total_invest: number;
}

const row_class = "p-1 pl-3 border-b-2";

const AssetsTable: FC<Props> = ({ table_data = [], total_invest }) => {
  const [name, setName] = useState<null | string>("");
  useEffect(() => {
    const user_name =
      typeof window !== "undefined" ? localStorage.getItem("user_name") : "";
    setName(user_name);
  }, []);
  return (
    <div className="w-5/6 ">
      <div id="table" className="rounded-md shadow-md">
        <div
          id="title"
          className="border-b-2 flex justify-between p-3 font-bold"
        >
          <p>{name}</p>
          <p>총 투자원금 : {total_invest} 원</p>
        </div>
        <div id="body" className="flex">
          <div id="row-left" className="flex flex-col w-1/6 border-r-2">
            {ASSETS_ROW.map((value, index) => (
              <div key={index} className={row_class}>
                {value}
              </div>
            ))}
          </div>
          <div
            id="row-right"
            className="flex w-full overflow-x-auto scrollbar-hide whitespace-nowrap text-gray-800"
          >
            {table_data?.map((value, index) => (
              <div key={index} className="flex-col border-r-2">
                <p className={row_class}>
                  {value[3].slice(0, 4) +
                    "-" +
                    value[3].slice(4, 6) +
                    "-" +
                    value[3].slice(6, 8)}
                </p>
                <p className={row_class}>
                  {value[4] === 0 ? "-" : value[4] + " 원"}
                </p>
                <p className={row_class}>{value[0]} %</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsTable;
