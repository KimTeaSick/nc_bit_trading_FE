import CoinListWapper from "@/components/CoinList/CoinListWapper";
import LayoutComponent from "@/components/common/Layout";
import { setPageActive } from "@/module/common";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CoinList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageActive("Coin"));
  }, [dispatch]);

  return (
    <LayoutComponent>
      <CoinListWapper />
    </LayoutComponent>
  );
};
export default CoinList;
