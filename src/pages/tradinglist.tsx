import { FC, useEffect } from "react";
import LayoutComponent from "@/components/common/Layout";
import { setPageActive } from "@/module/common";
import { useDispatch, useSelector } from "react-redux";
import TradingPage from "@/components/TradingList/TradingListPage";
import { RootStateType } from "@/module/rootReducer.d";

const TradingList = () => {
  const dispatch = useDispatch();
  const {} = useSelector((state: RootStateType) => state.trading);
  useEffect(() => {
    dispatch(setPageActive("tradinglist"));
  }, [dispatch]);

  return (
    <LayoutComponent>
      <TradingPage />
    </LayoutComponent>
  );
};
export default TradingList;
