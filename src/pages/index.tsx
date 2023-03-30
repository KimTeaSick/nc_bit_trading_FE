import { NextPage } from "next";
import LayoutComponent from "@/components/common/Layout";
import DashBoardPage from "@/components/Dash/DashBoardPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageActive } from "@/module/common";
import { getProperty } from "./api/walletAPIs";
import {
  getAccountThunk,
  getPossessionCoin,
  // usePossessionCoin,
  useRecommendPrice,
} from "./api/dash";
import { YMD } from "@/lib/dateFormat";

const Home: NextPage = () => {
  const dispatch = useDispatch<any>();
  const now = new Date();
  const { request: recommandPrice }: any = useRecommendPrice();
  // const { request: possessionCoin }: any = usePossessionCoin();

  useEffect(() => {
    dispatch(setPageActive("Dash"));
    dispatch(getPossessionCoin());
    dispatch(
      getAccountThunk({
        date: [YMD(now) + "000000", YMD(now) + "235959"],
      })
    );
    console.log(YMD(now));
  }, [dispatch, , recommandPrice]);

  return (
    <LayoutComponent>
      <DashBoardPage
        recommendPrice={recommandPrice?.data}
        isLoading={recommandPrice.isLoading}
      />
    </LayoutComponent>
  );
};

export default Home;
