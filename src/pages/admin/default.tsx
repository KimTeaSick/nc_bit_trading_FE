import { useDispatch } from "react-redux";
import { FC, useEffect, useState } from "react";
import { setPageActive } from "@/module/common";
import {
  getAccountThunk,
  getPossessionCoin,
  json_file_download,
} from "../api/dash";
import Dashboard from "@/views/admin/default";
import Admin from "@/layouts/admin";
import { useRecommendCoin } from "../api/autotrading";
import { getBalance, getProperty } from "../api/walletAPIs";

const Home: FC = () => {
  const dispatch = useDispatch<any>();
  const { request: recommandPrice }: any = useRecommendCoin();

  useEffect(() => {
    dispatch(setPageActive("Dash"));
    dispatch(getPossessionCoin());
    dispatch(getBalance());
    dispatch(getProperty());
    json_file_download();
  }, [dispatch]);

  return (
    <Admin>
      <Dashboard
        searchList={recommandPrice.data}
        rpLoading={recommandPrice.isLoading}
      />
    </Admin>
  );
};

export default Home;
