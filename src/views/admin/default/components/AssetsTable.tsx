import { FC, memo } from "react";
import Link from "next/link";

import { krwChage } from "@/lib/krwChage";
import { D_W_M } from "../variables/TABLE_COL";
import Dash_detail_button from "./Dash_detail_button";
import {
  ASSETS_ROW,
  CURRENT_RATE,
} from "../../assetsStatus/variables/variables";
import {
  get_day_week_month_data,
  useUserRateInfo,
  useUsersCurrentRate,
} from "@/pages/api/dash";
import Loading from "@/components/common/Loading";

interface Props {
  idx: number;
}

const ROW =
  "p-1 pl-3 w-full h-1/3 text-xs font-bold md:text-base border-b-2 dark:text-white";
const TABLE_WRAPPER =
  "w-full overflow-hidden rounded-sm dark:text-white shadow-md h-32 md:w-3/4 my-2";
const TITLE_AND_DEPOSIT = "border-b-2 flex justify-between p-1 font-bold h-1/4";
const TABLE_BODY = "flex w-full";
const ROW_WRAPPER = "flex-col border-r-2 w-1/3";
const ROW_LEFT = "flex w-1/5 flex-col border-r-2 dark:border-l-2";
const ROW_RIGHT =
  "flex overflow-x-auto scrollbar-hide whitespace-nowrap text-gray-800 w-3/5 ";

const AssetsTable: FC<Props> = ({ idx }) => {
  const { request: currentData }: any = useUsersCurrentRate(idx);
  const table = useUserRateInfo(idx);
  return (
    <div className={TABLE_WRAPPER}>
      {table.status === "success" ? (
        <div id="table">
          <div id="title" className={TITLE_AND_DEPOSIT}>
            <p>{table.data.date_info.name.slice(0, 1) + "**"}</p>
            <div className="flex">
              <p>기말 평가 자산 : {krwChage(table.data.date_info.total)} 원</p>
              <Link href={`/admin/dash/rate/${idx}`}>
                <Dash_detail_button
                  title="상세보기"
                  event={async () => {
                    await get_day_week_month_data(1);
                  }}
                />
              </Link>
            </div>
          </div>
          <div id="body" className={TABLE_BODY}>
            <div id="row-left" className={ROW_LEFT}>
              {CURRENT_RATE.map((value, index) => (
                <>
                  <div key={index} className={ROW}>
                    {value}
                  </div>
                  <div key={index} className={ROW}>
                    {currentData?.data?.now_balance + " 원"}
                  </div>
                  <div key={index} className={ROW}>
                    {currentData?.data?.rate + " %"}
                  </div>
                </>
              ))}
            </div>
            <div id="row-left" className={ROW_LEFT}>
              {ASSETS_ROW.map((value, index) => (
                <div key={index} className={ROW}>
                  {value}
                </div>
              ))}
            </div>
            <div id="row-right" className={ROW_RIGHT}>
              {table.data.date_info.table_data?.map(
                (value: any, index: number) => (
                  <div key={index} className={ROW_WRAPPER}>
                    <p className={ROW}>{D_W_M[index]}</p>
                    <p className={ROW}>
                      {value[1] === "-" ? "-" : krwChage(value[1]) + " 원"}
                    </p>
                    <p className={ROW}>
                      {value[0] === "-" ? "-" : value[0].toFixed(2) + "%"}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default memo(AssetsTable);
