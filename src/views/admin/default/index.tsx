import { FC } from "react";
import CheckTable from "@/views/admin/default/components/CheckTable";
import ComplexTable from "@/views/admin/default/components/ComplexTable";
import useTableDataComplex from "./variables/tableDataComplex";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import AccountStatus from "./components/AccountStatus";
import Marketplace from "./components/MarketPlace";
import Rate from "./components/Rate";
import { useNowRate, useTodayAccount } from "@/pages/api/dash";
import { fixed } from "@/components/autoTrading/lib/tool";
import SearchList from "./components/SearchList";
import PossessionList from "./components/PossessionList";

interface DashboardProps {
  rpLoading?: boolean;
  searchList: any[];
}

const Dashboard: FC<DashboardProps> = ({ rpLoading, searchList }) => {
  const { request: accoutInfo } = useTodayAccount();
  const { request: rateInfo } = useNowRate();
  const tableDataComplex = useTableDataComplex();

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <AccountStatus
        accountInfo={accoutInfo.data}
        rate={fixed(
          rateInfo?.data?.now_balance * (rateInfo?.data?.rate / 100),
          2
        )}
      />
      <Marketplace />
      <Rate rateInfo={rateInfo?.data} />
      <div className="grid grid-cols-2 gap-5">
        <SearchList value={searchList} />
        <PossessionList value={tableDataComplex} />
      </div>
    </div>
  );
};

export default Dashboard;
