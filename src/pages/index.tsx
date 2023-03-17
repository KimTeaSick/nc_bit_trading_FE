import { NextPage } from "next";
import LayoutComponent from "@/components/common/Layout";
import DashBoardPage from "@/components/Dash/DashBoardPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageActive } from "@/module/common";
import { getProperty } from "./api/walletAPIs";
import { useRecommendPrice } from "../components/Dash/dashQuery";

const Home: NextPage = () => {
  const dispatch = useDispatch<any>();

  const { request }: any = useRecommendPrice();

  useEffect(() => {
    dispatch(setPageActive("Dash"));
    dispatch(getProperty());
    console.log("coin", request);
    console.log("coin data", request.data);
  }, [dispatch, request]);

  return (
    <LayoutComponent>
      <DashBoardPage
        recommendPrice={request?.data}
        isLoading={request.isLoading}
      />
    </LayoutComponent>
  );
};

export default Home;
