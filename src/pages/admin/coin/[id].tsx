// import CoinDetailPage from "@/components/CoinDetail/CoinDetailPage";
import { DetailCoinType } from "@/@types/CoinList";
import CoinDetailPage from "@/views/admin/coindetail/index";
import { useCallback, useEffect, useState } from "react";
import { getCoinDetailInfo, getChartData } from "../../api/coinListAPIs";
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
  const { id } = router.query;
  const [selectCoin, setSelectCoin] = useState<DetailCoinType>();
  const { chartData, chartTerm, chartDataStatus } = useSelector(
    (state: RootStateType) => state.coin
  );

  const setCoin = useCallback(async () => {
    const body = { id, term: chartTerm };
    dispatch(getDisparityOptionThunk());
    if (id !== undefined) {
      const coinData = await getCoinDetailInfo(id);
      dispatch(setDetailCoin(id));
      dispatch(getChartData(body));
      setSelectCoin(coinData);
    }
  }, [id, dispatch, chartTerm]);

  useEffect(() => {
    setCoin();
  }, [setCoin, dispatch, id]);

  return (
    <Admin>
      {chartDataStatus === "Loading" ? (
        <Loading />
      ) : (
        <CoinDetailPage
          selectCoin={selectCoin}
          data={chartData}
          coinName={id ? id : ""}
        />
      )}
    </Admin>
  );
};

export default CoinDetail;
