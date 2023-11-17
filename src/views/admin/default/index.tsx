import { FC } from "react";

import Rate from "./components/Rate";
import Banner from "./components/Banner";
import * as CSS from "./variables/css_name";
import Account_status from "./components/Account_status";
import All_people_money from "./components/All_people_money";
import { useNowRate, useTodayAccount } from "@/pages/api/dash";
import { AssetsTableSection } from "./components/AssetsTableSection";

interface DashboardProps {
  moneyStatus: "success" | "error" | "loading";
  money: number;
}

const Dashboard: FC<DashboardProps> = ({ moneyStatus, money }) => {
  const { request: accoutInfo } = useTodayAccount();
  const { request: rateInfo } = useNowRate();

  return (
    <div className={CSS.PAGE_WRAPPER}>
      <Banner />
      <Account_status accountInfo={accoutInfo.data} />
      <div className={CSS.RATE_AND_DWM_TABLE}>
        <div className={CSS.RATE_PART}>
          <All_people_money money={money} status={moneyStatus} />
          <Rate rateInfo={rateInfo?.data} />
        </div>
        <div className={CSS.TABLE_PART}>
          <div className="flex justify-between">
            <p className={CSS.TABLE_TITLE}>회원별 수익률</p>
            <p className={CSS.TABLE_SUB_TITLE}>
              전일 00시를 기준으로 측정한 수익률입니다.
            </p>
          </div>
          <AssetsTableSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
