import { useTransactionHistory } from "./variables/tableDataDevelopment";
import tableDataCheck from "./variables/tableDataCheck";
import CheckTable from "./components/CheckTable";
import tableDataColumns from "./variables/tableDataColumns";
import tableDataComplex from "./variables/tableDataComplex";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import Calendar from "@/components/common/calendar/Calendar";
import { FC, useState } from "react";
import CustomCalendar from "@/components/common/CustomCalendar";

interface Props {
  page: number;
}

const Tables: FC<Props> = ({ page }) => {
  const data = useTransactionHistory();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const HandleModalShow = () => {
    setModalOpen(false);
  };

  console.log("data", data);

  return (
    <div>
      <div className="mt-5 mb-3 grid h-full grid-cols-1 gap-5 md:grid-cols-1 relative">
        <DevelopmentTable
          page={page}
          tableData={data}
          setModalOpen={setModalOpen}
        />

        <div className="absolute right-10 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {modalOpen && <CustomCalendar onClose={HandleModalShow} />}
        </div>
      </div>
    </div>
  );
};

export default Tables;
