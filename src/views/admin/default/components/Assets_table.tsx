import { FC, useCallback, useEffect, useState } from "react";
import { ASSETS_ROW } from "../../assetsStatus/variables/variables";
import { D_W_M } from "../variables/TABLE_COL";
import Dash_detail_button from "./Dash_detail_button";
import { get_day_week_month_data, get_users_rate_info } from "@/pages/api/dash";
import Link from "next/link";

interface Props {
  idx: number;
}

const ROW = "p-1 pl-3 w-full border-b-2 dark:text-white";
const TABLE_WRAPPER =
  "w-full overflow-hidden rounded-sm md:w-2/3 dark:text-white";
const TABLE_ROUNDED = "rounded-md shadow-md";
const TITLE_AND_DEPOSIT = "border-b-2 flex justify-between p-3 font-bold";
const TABLE_BODY = "flex w-full";
const ROW_WRAPPER = "flex-col border-r-2 w-1/3";
const ROW_LEFT = "flex w-1/4 flex-col border-r-2 dark:border-l-2";
const ROW_RIGHT =
  "flex overflow-x-auto scrollbar-hide whitespace-nowrap text-gray-800 w-3/4 ";

const Assets_table: FC<Props> = ({ idx }) => {
  const [name, set_name] = useState("");
  const [total_invest, set_total_invest] = useState(0);
  const [table_data, set_table_data] = useState<number[]>([]);

  const set_info = useCallback(async () => {
    const res = await get_users_rate_info(idx);
    set_name(res.date_info.name);
    set_total_invest(res.date_info.total);
    set_table_data(res.date_info.table_data);
  }, [idx]);

  useEffect(() => {
    set_info();
  }, [set_info]);

  return (
    <div className={TABLE_WRAPPER}>
      <div id="table" className={TABLE_ROUNDED}>
        <div id="title" className={TITLE_AND_DEPOSIT}>
          <p>{name}</p>
          <div className="flex">
            <p>총 잔고 : {total_invest} 원</p>
            <Link href={`/admin/dash/rate/${idx}`}>
              <Dash_detail_button
                title="상세보기"
                event={async () => {
                  await get_day_week_month_data();
                }}
              />
            </Link>
          </div>
        </div>
        <div id="body" className={TABLE_BODY}>
          <div id="row-left" className={ROW_LEFT}>
            {ASSETS_ROW.map((value, index) => (
              <div key={index} className={ROW}>
                {value}
              </div>
            ))}
          </div>
          <div id="row-right" className={ROW_RIGHT}>
            {table_data.length !== 0 &&
              table_data?.map((value: any, index) => (
                <div key={index} className={ROW_WRAPPER}>
                  <p className={ROW}>{D_W_M[index]}</p>
                  <p className={ROW}>
                    {value[1] === 0 ? "-" : value[1] + " 원"}
                  </p>
                  <p className={ROW}>{value[0].toFixed(2)} %</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets_table;
