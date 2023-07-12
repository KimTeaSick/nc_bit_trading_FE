import { FC, useEffect, useState } from "react";
import { setPageActive } from "@/module/common";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import Admin from "@/layouts/admin";
import Tables from "@/views/admin/tables";
import { getOrderList } from "../api/tradingList";
import PaginNation from "@/components/common/PaginNation";
import { PagiNationSection } from "@/components/common/PagiNation.styked";

const TradingList: FC = () => {
  const dispatch = useDispatch<any>();
  const [nowPage, setNowPage] = useState(1);
  const { orderListPage } = useSelector(
    (state: RootStateType) => state.trading
  );
  useEffect(() => {
    dispatch(getOrderList({ page: nowPage }));
    dispatch(setPageActive("tradinglist"));
  }, [dispatch, nowPage]);

  return (
    <Admin>
      <Tables page={nowPage} />
      <PaginNation page={orderListPage} setNowPage={setNowPage} />
    </Admin>
  );
};
export default TradingList;
