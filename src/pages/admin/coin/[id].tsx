// import CoinDetailPage from "@/components/CoinDetail/CoinDetailPage";
import { DetailCoinType } from "@/@types/CoinList";
import CoinDetailPage from "@/views/admin/coindetail/index";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import {
  getCoinDetailInfo,
  getChartData,
  get5AvgData,
  get20AvgData,
  get60AvgData,
} from "../../api/coinListAPIs";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import { setDetailCoin } from "@/module/coin";
import Loading from "@/components/common/Loading";
import Admin from "@/layouts/admin";
import { getDisparityOptionThunk } from "@/pages/api/settingAPI";

const CoinDetail: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const [flag, setFlag] = useState(0);
  const { id } = router.query;
  const [selectCoin, setSelectCoin] = useState<DetailCoinType>();
  const { line_one, line_two, line_three } = useSelector(
    (state: RootStateType) => state.setting
  );

  const {
    chartData,
    chartTerm,
    chartDataStatus,
    avg60DataStatus,
    avg20DataStatus,
    avg5DataStatus,
  } = useSelector((state: RootStateType) => state.coin);
  console.log(line_one);

  const setCoin = useCallback(async () => {
    const body = { id, term: chartTerm };
    dispatch(getDisparityOptionThunk());

    if (id !== undefined) {
      const coinData = await getCoinDetailInfo(id);
      dispatch(setDetailCoin(id));
      dispatch(getChartData(body));
      setSelectCoin(coinData);
      if (line_one !== null) {
        dispatch(
          get5AvgData({
            range: line_one?.range,
            coin: id,
            term: chartTerm,
          })
        );
        dispatch(
          get20AvgData({
            range: line_two?.range,
            coin: id,
            term: chartTerm,
          })
        );
        dispatch(
          get60AvgData({
            range: line_three?.range,
            coin: id,
            term: chartTerm,
          })
        );
      }
    }
  }, [
    id,
    dispatch,
    chartTerm,
    line_one?.range,
    line_two?.range,
    line_three?.range,
  ]);

  useEffect(() => {
    setCoin();
  }, [setCoin, dispatch, flag, id]);

  return (
    <Admin>
      {(chartDataStatus ||
        avg60DataStatus ||
        avg20DataStatus ||
        avg5DataStatus) === "Loading" ? (
        <Loading />
      ) : (
        <CoinDetailPage
          flag={line_one}
          setFlag={setFlag}
          selectCoin={selectCoin}
          data={chartData}
          coinName={id}
        />
      )}
    </Admin>
  );
};

export default CoinDetail;
