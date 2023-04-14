import { FC, useEffect, useState } from "react";
import LayoutComponent from "@/components/common/Layout";
import { setPageActive } from "@/module/common";
import { useDispatch, useSelector } from "react-redux";
import TradingPage from "@/components/TradingList/TradingListPage";
import { RootStateType } from "@/module/rootReducer.d";
import Admin from "@/layouts/admin";
import Tables from "@/views/admin/tables";
import { getOrderList } from "../api/tradingList";

const TradingList = () => {
  const dispatch = useDispatch<any>();
  const [nowPage, setNowPage] = useState(1);
  const { orderList, orderListPage, orderListStatus } = useSelector(
    (state: RootStateType) => state.trading
  );
  useEffect(() => {
    dispatch(getOrderList({ page: nowPage }));
    dispatch(setPageActive("tradinglist"));
  }, [dispatch, nowPage]);

  return (
    <Admin>
      <Tables />
    </Admin>
  );
};
export default TradingList;
