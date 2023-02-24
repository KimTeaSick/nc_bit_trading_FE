import { NextPage } from "next";
import LayoutComponent from "@/components/common/Layout";
import DashBoardPage from "@/components/Dash/DashBoardPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageActive } from "@/module/common";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageActive("Dash"));
  }, [dispatch]);

  return (
    <LayoutComponent>
      <DashBoardPage />
    </LayoutComponent>
  );
};

export default Home;
