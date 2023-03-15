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

  const {
    chartData,
    chartTerm,
    chartDataStatus,
    avg60DataStatus,
    avg20DataStatus,
    avg5DataStatus,
  } = useSelector((state: RootStateType) => state.coin);

  const { lineOneRange, lineTwoRange, lineThreeRange } = useSelector(
    (state: RootStateType) => state.common
  );

  const setCoin = useCallback(async () => {
    const coinData = await getCoinDetailInfo(id);
    const body = { id, term: chartTerm };
    dispatch(get5AvgData({ range: lineOneRange, coin: id, term: chartTerm }));
    dispatch(get20AvgData({ range: lineTwoRange, coin: id, term: chartTerm }));
    dispatch(
      get60AvgData({ range: lineThreeRange, coin: id, term: chartTerm })
    );
    dispatch(setDetailCoin(id));
    dispatch(getChartData(body));
    setSelectCoin(coinData);
  }, [id, dispatch, lineOneRange, lineTwoRange, lineThreeRange, chartTerm]);

  useEffect(() => {
    setCoin();
  }, [setCoin]);

  return (
    <LayoutComponent>
      {(chartDataStatus ||
        avg60DataStatus ||
        avg20DataStatus ||
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
