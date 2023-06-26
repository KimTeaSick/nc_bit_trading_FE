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

interface DashboardProps {
  rpLoading?: boolean;
  CheckTableDataComplex: any;
}

const Dashboard: FC<DashboardProps> = ({
  rpLoading,
  CheckTableDataComplex,
}) => {
  const { request: accoutInfo } = useTodayAccount();
  const { request: rateInfo } = useNowRate();
  const tableDataComplex = useTableDataComplex();
  console.log("rateInfo", rateInfo);

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <AccountStatus accountInfo={accoutInfo.data} />
      <Marketplace />
      <Rate rateInfo={rateInfo?.data} />
      <div className="mt-1 grid grid-cols-2 gap-5">
        {!rpLoading && <CheckTable tableData={CheckTableDataComplex} />}
        <ComplexTable tableData={tableDataComplex} />
      </div>
    </div>
  );
};

export default Dashboard;
