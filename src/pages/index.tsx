import { NextPage } from "next";
import LayoutComponent from "@/components/common/Layout";
import DashBoardPage from "@/components/Dash/DashBoardPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageActive } from "@/module/common";
import { getProperty } from "./api/walletAPIs";
import { getRecommendPrice } from "./api/dash";

const Home: NextPage = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(setPageActive("Dash"));
    dispatch(getProperty());
    dispatch(getRecommendPrice());
  }, [dispatch]);

  return (
    <LayoutComponent>
      <DashBoardPage />
    </LayoutComponent>
  );
};

export default Home;
