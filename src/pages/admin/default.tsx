import { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Admin from "@/layouts/admin";
import Dashboard from "@/views/admin/default";
import { setPageActive } from "@/module/common";
import { getBalance, getProperty } from "../api/walletAPIs";
import { all_user_deposit, useTotalMoney } from "../api/dash";

const Home: FC = () => {
  const dispatch = useDispatch<any>();
  const money = useTotalMoney();

  useEffect(() => {
    dispatch(setPageActive("Dash"));
    dispatch(getBalance());
    dispatch(getProperty());
  }, [dispatch]);

  return (
    <Admin>
      <Dashboard moneyStatus={money.status} money={money.data} />
    </Admin>
  );
};

export default Home;
