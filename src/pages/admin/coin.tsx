import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CoinPage from "@/views/admin/coinlist/index";
import Loading from "@/components/common/LoadingComponent";
import Admin from "@/layouts/admin";
import { setPageActive } from "@/module/common";
import { RootStateType } from "@/module/rootReducer.d";
import { getCoinList } from "../api/coinListAPIs";

const CoinList = () => {
  const dispatch = useDispatch<any>();
  const { coinList } = useSelector((state: RootStateType) => state.coin);

  useEffect(() => {
    dispatch(getCoinList());
    dispatch(setPageActive("Coin"));
  }, [dispatch]);

  return (
    <Admin>
      {coinList.length === 0 ? <Loading /> : <CoinPage coinList={coinList} />}
    </Admin>
  );
};
export default CoinList;
