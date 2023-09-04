import { useTransactionHistory } from "./variables/tableDataDevelopment";
import DevelopmentTable from "./components/DevelopmentTable";
import { FC, useEffect, useState } from "react";
import CustomCalendar from "@/components/common/CustomCalendar";
import PaginNation from "@/components/common/PaginNation";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import { getOrderList } from "@/pages/api/tradingList";
import { setPageActive } from "@/module/common";

const CALENDAR_SEC_CLASS =
  "absolute right-10 z-10 mt-2 origin-top-right rounded-md  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none";

const TransHis: FC = () => {
  const data = useTransactionHistory();
  const dispatch = useDispatch<any>();
  const [nowPage, setNowPage] = useState(1);
  const { orderListPage } = useSelector(
    (state: RootStateType) => state.trading
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const HandleModalShow = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(getOrderList({ page: nowPage }));
    dispatch(setPageActive("tradinglist"));
  }, [dispatch, nowPage]);

  return (
    <div>
      <div className="mb-3 grid h-full grid-cols-1 gap-5 md:grid-cols-1 relative">
        <DevelopmentTable
          page={nowPage}
          tableData={data}
          setModalOpen={setModalOpen}
        />
        <div className={CALENDAR_SEC_CLASS}>
          {modalOpen && <CustomCalendar onClose={HandleModalShow} />}
        </div>
        <PaginNation page={orderListPage} setNowPage={setNowPage} />
      </div>
    </div>
  );
};

export default TransHis;
