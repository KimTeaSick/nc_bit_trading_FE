import { NextPage } from "next";
import LayoutComponent from "@/components/common/Layout";
import DashBoardPage from "@/components/Dash/DashBoardPage";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setPageActive } from "@/module/common";
import {
  getAccountThunk,
  getPossessionCoin,
  useRecommendPrice,
} from "./api/dash";
import { YMD } from "@/lib/dateFormat";

const Home: NextPage = () => {
  const dispatch = useDispatch<any>();
  const [recommandPriceData, setRecommandPrice] = useState([]);
  const now = new Date();
  const { request: recommandPrice }: any = useRecommendPrice();

  useEffect(() => {
    setRecommandPrice(recommandPrice.data);
    dispatch(setPageActive("Dash"));
    dispatch(getPossessionCoin());
    dispatch(
      getAccountThunk({
        date: [YMD(now) + "000000", YMD(now) + "235959"],
      })
    );
  }, [dispatch, recommandPrice, now]);

  return (
    <LayoutComponent>
      <DashBoardPage
        recommendPrice={recommandPriceData}
        isLoading={recommandPrice.isLoading}
      />
    </LayoutComponent>
  );
};

export default Home;
