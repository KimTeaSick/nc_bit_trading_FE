import CoinListWapper from "@/components/CoinList/CoinListWapper";
import CoinPage from "@/views/admin/coinlist/index";
import Loading from "@/components/common/Loading";
import Admin from "@/layouts/admin";
import { setPageActive } from "@/module/common";
import { setDisparityLineOption } from "@/module/setting";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDisparityLineQuery } from "../api/settingAPI";
import { CoinType } from "@/@types/CoinList";
import { getCoinList } from "../api/coinListAPIs";

const CoinList = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useDisparityLineQuery();
  const [coinList, setCoinList] = useState<CoinType[]>([]);

  const coin = useCallback(async () => {
    const { data } = await getCoinList();
    setCoinList(Object.entries(data));
  }, []);

  useEffect(() => {
    coin();
  }, [coin]);

  useEffect(() => {
    dispatch(setPageActive("Coin"));
    dispatch(setDisparityLineOption(data));
  }, [dispatch, isLoading]);

  return (
    <Admin>{isLoading ? <Loading /> : <CoinPage coinList={coinList} />}</Admin>
  );
};
export default CoinList;
