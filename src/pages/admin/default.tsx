import { useDispatch } from "react-redux";
import { FC, useCallback, useEffect, useState } from "react";
import { setPageActive } from "@/module/common";
import { all_user_deposit, getPossessionCoin } from "../api/dash";
import Dashboard from "@/views/admin/default";
import Admin from "@/layouts/admin";
import { useRecommendCoin } from "../api/autotrading";
import { getBalance, getProperty } from "../api/walletAPIs";

const Home: FC = () => {
  const dispatch = useDispatch<any>();
  const { request: recommandPrice }: any = useRecommendCoin();

  const [money, set_money] = useState(0);
  const user_deposit_event = useCallback(async () => {
    const a_u_d = await all_user_deposit();
    set_money(a_u_d);
  }, []);

  useEffect(() => {
    dispatch(setPageActive("Dash"));
    dispatch(getPossessionCoin());
    user_deposit_event();
    dispatch(getBalance());
    dispatch(getProperty());
  }, [dispatch]);

  return (
    <Admin>
      <Dashboard
        money={money}
        searchList={recommandPrice.data}
        rpLoading={recommandPrice.isLoading}
      />
    </Admin>
  );
};

export default Home;
