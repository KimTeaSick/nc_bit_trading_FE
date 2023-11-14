import { FC, useCallback, useEffect, useState } from "react";
import useTableDataComplex from "./variables/tableDataComplex";
import Account_status from "./components/Account_status";
import Rate from "./components/Rate";
import {
  get_users_rate_info,
  useNowRate,
  useTodayAccount,
} from "@/pages/api/dash";
import Possession_list from "./components/Possession_list";
import Assets_table from "./components/Assets_table";
import Search_list from "./components/Search_list";
import * as CSS from "./variables/css_name";
import Banner from "./components/Banner";
import { USER_IDXES } from "./variables/TABLE_COL";
import All_people_money from "./components/All_people_money";

interface DashboardProps {
  rpLoading?: boolean;
  searchList?: any[];
  money: number;
}

const Dashboard: FC<DashboardProps> = ({ rpLoading, searchList, money }) => {
  const { request: accoutInfo } = useTodayAccount();
  const { request: rateInfo } = useNowRate();
  // const tableDataComplex = useTableDataComplex();

  return (
    <div className={CSS.PAGE_WRAPPER}>
      <Banner />
      <Account_status accountInfo={accoutInfo.data} />
      <div className={CSS.RATE_AND_DWM_TABLE}>
        <div className={CSS.RATE_PART}>
          <All_people_money money={money} />
          <Rate rateInfo={rateInfo?.data} />
        </div>
        <div className={CSS.TABLE_PART}>
          <div className="flex justify-between">
            <p className={CSS.TABLE_TITLE}>회원별 수익률</p>
            <p className={CSS.TABLE_SUB_TITLE}>
              전일 00시를 기준으로 측정한 수익률입니다.
            </p>
          </div>
          {USER_IDXES.map((value, index) => (
            <Assets_table key={index} idx={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
