import { FC, useCallback, useEffect, useState } from "react";
import useTableDataComplex from "./variables/tableDataComplex";
import AccountStatus from "./components/AccountStatus";
import Marketplace from "./components/MarketPlace";
import Rate from "./components/Rate";
import {
  get_users_rate_info,
  useNowRate,
  useTodayAccount,
} from "@/pages/api/dash";
import { fixed } from "@/components/autoTrading/lib/tool";
import SearchList from "./components/SearchList";
import PossessionList from "./components/PossessionList";
import AssetsTable from "./components/AssetsTable";

interface DashboardProps {
  rpLoading?: boolean;
  searchList: any[];
}

const Dashboard: FC<DashboardProps> = ({ rpLoading, searchList }) => {
  const { request: accoutInfo } = useTodayAccount();
  const { request: rateInfo } = useNowRate();
  const tableDataComplex = useTableDataComplex();
  const [act_data, set_act_data] = useState<any>({});

  const act_info = useCallback(async () => {
    const info = await get_users_rate_info();
    set_act_data(info);
    console.log("info ::: ::: ", info.jo_info);
  }, []);

  useEffect(() => {
    act_info();
  }, [act_info]);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <AccountStatus accountInfo={accoutInfo.data} />
      <Marketplace />
      <div className="flex flex-col p-2 justify-center items-center bg-white dark:bg-navy-800 rounded-lg md:flex-row">
        <div className="w-full md:w-1/2">
          <Rate rateInfo={rateInfo?.data} />
        </div>
        <div className="w-full md:w-1/2 ">
          <p className="font-bold text-xl mb-3 text-gray-900 dark:text-gray-300">
            회원별 수익률
          </p>
          <AssetsTable
            table_data={act_data.shin_info?.table_data}
            name={act_data.shin_info?.name}
            total_invest={act_data.shin_info?.total}
          />
          <AssetsTable
            table_data={act_data.jo_info?.table_data}
            name={act_data.jo_info?.name}
            total_invest={act_data.jo_info?.total}
          />
          <AssetsTable
            table_data={act_data.oh_info?.table_data}
            name={act_data.oh_info?.name}
            total_invest={act_data.oh_info?.total}
          />
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
        <SearchList value={searchList} />
        <PossessionList value={tableDataComplex} />
      </div>
    </div>
  );
};

export default Dashboard;
