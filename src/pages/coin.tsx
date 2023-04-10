import CoinListWapper from "@/components/CoinList/CoinListWapper";
import LayoutComponent from "@/components/common/Layout";
import Loading from "@/components/common/Loading";
import { setPageActive } from "@/module/common";
import { setDisparityLineOption } from "@/module/setting";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDisparityLineQuery } from "./api/settingAPI";

const CoinList = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useDisparityLineQuery();

  useEffect(() => {
    dispatch(setPageActive("Coin"));
    dispatch(setDisparityLineOption(data));
  }, [dispatch, isLoading]);

  return (
    <LayoutComponent>
      {isLoading ? <Loading /> : <CoinListWapper />}
    </LayoutComponent>
  );
};
export default CoinList;
