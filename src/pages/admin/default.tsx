import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setPageActive } from "@/module/common";
import {
  getAccountThunk,
  getPossessionCoin,
  useRecommendPrice,
} from "../api/dash";
import { YMD } from "@/lib/dateFormat";
import Dashboard from "@/views/admin/default";
import Admin from "@/layouts/admin";

const Home: NextPage = () => {
  const dispatch = useDispatch<any>();
  const [recommandPriceData, setRecommandPrice] = useState([]);
  const now = new Date();
  const { request: recommandPrice }: any = useRecommendPrice();
  console.log(recommandPrice);

  useEffect(() => {
    // setRecommandPrice(recommandPrice.data);
    dispatch(setPageActive("Dash"));
    dispatch(getPossessionCoin());
    dispatch(
      getAccountThunk({
        date: [YMD(now) + "000000", YMD(now) + "235959"],
      })
    );
  }, [dispatch, recommandPrice, now]);

  return (
    <>
      <Admin>
        <Dashboard
        // rpLoading={recommandPrice.isLoading}
        />
      </Admin>
    </>
  );
};

export default Home;
