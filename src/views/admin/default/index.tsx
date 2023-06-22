import { FC } from "react";
import CheckTable from "@/views/admin/default/components/CheckTable";
import ComplexTable from "@/views/admin/default/components/ComplexTable";
import useTableDataComplex from "./variables/tableDataComplex";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import AccountStatus from "./components/AccountStatus";
import Marketplace from "./components/MarketPlace";

interface DashboardProps {
  rpLoading?: boolean;
  CheckTableDataComplex: any;
}

const Dashboard: FC<DashboardProps> = ({
  rpLoading,
  CheckTableDataComplex,
}) => {
  const { accountInfo } = useSelector((state: RootStateType) => state.dash);
  const tableDataComplex = useTableDataComplex();

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
      <AccountStatus accountInfo={accountInfo} />
      <Marketplace />
      <div className="mt-5 grid grid-cols-2 gap-5">
        {!rpLoading && <CheckTable tableData={CheckTableDataComplex} />}
        <ComplexTable tableData={tableDataComplex} />
      </div>
    </div>
  );
};

export default Dashboard;
