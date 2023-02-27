import { FC, useEffect } from "react";
import LayoutComponent from "@/components/common/Layout";
import { setPageActive } from "@/module/common";
import { useDispatch } from "react-redux";
import TradingPage from "@/components/TradingList/TradingListPage";

const TradingList = () => {
  const dispatch = useDispatch();

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
