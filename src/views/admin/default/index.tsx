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

interface DashboardProps {
  rpLoading?: boolean;
  searchList: any[];
}

const Dashboard: FC<DashboardProps> = ({ rpLoading, searchList }) => {
  const { request: accoutInfo } = useTodayAccount();
  const { request: rateInfo } = useNowRate();
  const tableDataComplex = useTableDataComplex();

  return (
    <div className={CSS.PAGE_WRAPPER}>
      <Account_status accountInfo={accoutInfo.data} />
      <Banner />
      <div className={CSS.RATE_AND_DWM_TABLE}>
        <div className={CSS.RATE_PART}>
          <Rate rateInfo={rateInfo?.data} />
        </div>
        <div className={CSS.TABLE_PART}>
          <p className={CSS.TABLE_TITLE}>회원별 수익률</p>
          {USER_IDXES.map((value, index) => (
            <Assets_table key={index} idx={value} />
          ))}
        </div>
      </div>
      <div className={CSS.POSSEION_AND_SEARCH_LIST_PART}>
        <Search_list value={searchList} />
        <Possession_list value={tableDataComplex} />
      </div>
    </div>
  );
};

export default Dashboard;
