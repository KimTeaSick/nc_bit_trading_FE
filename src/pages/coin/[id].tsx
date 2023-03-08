import CoinDetailPage from "@/components/CoinDetail/CoinDetailPage";
import { DetailCoinType } from "@/@types/CoinList";
import LayoutComponent from "@/components/common/Layout";
import { useCallback, useEffect, useState } from "react";
import {
  getCoinDetailInfo,
  getChartData,
  get5AvgData,
  get20AvgData,
  get60AvgData,
} from "../api/coinListAPIs";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import { setDetailCoin } from "@/module/coin";
import Loading from "@/components/common/Loading";

const CoinDetail: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const { id } = router.query;
  const [selectCoin, setSelectCoin] = useState<DetailCoinType>();
  const [clo, setClo] = useState<number[]>([]);

  const [term, setTerm] = useState<
    "1m" | "3m" | "5m" | "10m" | "30m" | "1h" | "6h" | "12h" | "24h"
  >("5m");

  const {
    chartData,
    chartDataStatus,
    avg60DataStatus,
    avg20DataStatus,
    avg5DataStatus,
  } = useSelector((state: RootStateType) => state.coin);

  const setCoin = useCallback(async () => {
    const coinData = await getCoinDetailInfo(id);
    const body = { id, term };
    dispatch(get5AvgData());
    dispatch(get20AvgData());
    dispatch(get60AvgData());
    dispatch(setDetailCoin(id));
    dispatch(getChartData(body));
    setSelectCoin(coinData);
  }, [id, term, dispatch]);

  useEffect(() => {
    setCoin();
  }, [setCoin]);

  return (
    <LayoutComponent>
      {(chartDataStatus &&
        avg60DataStatus &&
        avg20DataStatus &&
        avg5DataStatus) === "Loading" ? (
        <Loading />
      ) : (
        <CoinDetailPage
          selectCoin={selectCoin}
          data={chartData}
          coinName={id}
        />
      )}
    </LayoutComponent>
  );
};

export default CoinDetail;
