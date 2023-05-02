import MiniCalendar from "@/components/calendar/MiniCalendar";
import WeeklyRevenue from "@/views/admin/default/components/WeeklyRevenue";
import TotalSpent from "@/views/admin/default/components/TotalSpent";
import PieChartCard from "@/views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { TbPigMoney, TbMoneybag } from "react-icons/tb";
import { RiHandCoinFill, RiHandCoinLine } from "react-icons/ri";
import { MdBarChart, MdDashboard, MdAccountBalance } from "react-icons/md";

import Widget from "@/components/widget/Widget";
import CheckTable from "@/views/admin/default/components/CheckTable";
import ComplexTable from "@/views/admin/default/components/ComplexTable";
import DailyTraffic from "@/views/admin/default/components/DailyTraffic";
import OptionSearch from "@/views/admin/default/components/OptionSearch";
import TaskCard from "@/views/admin/default/components/TaskCard";
import useSearchData from "./variables/tableDataCheck";
import useTableDataComplex from "./variables/tableDataComplex";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";

interface DashboardProps {
  rpLoading?: boolean;
  CheckTableDataComplex: any;
}

const Dashboard: FC<DashboardProps> = ({
  rpLoading,
  CheckTableDataComplex,
}) => {
  const { accountInfo } = useSelector((state: RootStateType) => state.dash);
  console.log("rpLoading", rpLoading);
  // const CheckTableDataComplex = useSearchData();
  console.log("CheckTableDataComplex", CheckTableDataComplex);
  const tableDataComplex = useTableDataComplex();

  return (
    <div className="flex flex-row">
      <div className="mt-3 basis-5/6">
        {/* Card widget */}
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
          <Widget
            icon={<MdAccountBalance className="h-7 w-7" />}
            title={"종합잔고"}
            subtitle={accountInfo[0]?.toFixed(1)}
          />
          <Widget
            icon={<TbMoneybag className="h-6 w-6" />}
            title={"예수금"}
            subtitle={accountInfo[1]?.toFixed(1)}
          />
          <Widget
            icon={<RiHandCoinFill className="h-7 w-7" />}
            title={"당일 매수금"}
            subtitle={accountInfo[2]?.toFixed(1)}
          />
          <Widget
            icon={<RiHandCoinLine className="h-6 w-6" />}
            title={"당일 매도금"}
            subtitle={accountInfo[3]?.toFixed(1)}
          />
          <Widget
            icon={<TbPigMoney className="h-7 w-7" />}
            title={"손익금"}
            subtitle={accountInfo[4]?.toFixed(1)}
          />
        </div>

        {/* Tables & Charts */}
        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
          {/* Check Table */}
          <div>
            {rpLoading === true ? null : (
              <CheckTable tableData={CheckTableDataComplex} />
            )}
          </div>
          {/* Complex Table , Task & Calendar */}

          <ComplexTable tableData={tableDataComplex} />
        </div>
      </div>
      <div className="mt-3 ml-3 basis-1/6">
        {/* Option */}
        <div className="mt-3 ">
          <OptionSearch />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
