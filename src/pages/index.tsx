import { NextPage } from "next";
import LayoutComponent from "@/components/common/Layout";
import DashBoardPage from "@/components/Dash/DashBoardPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageActive } from "@/module/common";
import { getProperty } from "./api/walletAPIs";
import {
  getAccountThunk,
  useAccountInfo,
  usePossessionCoin,
  useRecommendPrice,
} from "./api/dash";

const Home: NextPage = () => {
  const dispatch = useDispatch<any>();

  const { request: recommandPrice }: any = useRecommendPrice();
  const { request: possessionCoin }: any = usePossessionCoin();

  useEffect(() => {
    dispatch(setPageActive("Dash"));
    dispatch(
      getAccountThunk({
        date: ["20230329000000", "20230329235959"],
      })
    );
  }, [dispatch, , recommandPrice]);

  return (
    <LayoutComponent>
      <DashBoardPage
        recommendPrice={recommandPrice?.data}
        isLoading={recommandPrice.isLoading}
        possessionCoin={possessionCoin?.data}
      />
    </LayoutComponent>
  );
};

export default Home;
