import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import Admin from "@/layouts/admin";
import { useTotalMoney } from "../api/dash";
import Dashboard from "@/views/admin/default";
import { setPageActive } from "@/module/common";
import { getBalance, getProperty } from "../api/walletAPIs";

const Home: FC = () => {
  const dispatch = useDispatch<any>();
  const money = useTotalMoney();

  useEffect(() => {
    dispatch(setPageActive("Dash"));
    dispatch(getProperty());
    dispatch(getBalance());
  }, [dispatch]);

  return (
    <Admin>
      <Dashboard moneyStatus={money.status} money={money.data} />
    </Admin>
  );
};

export default Home;
