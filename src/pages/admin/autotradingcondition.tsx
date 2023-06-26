import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageActive } from "@/module/common";
import AutoTradingComponent from "@/components/autoTradingCondition/index";
import Admin from "@/layouts/admin";

const Autotrading: NextPage = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(setPageActive("Search"));
  }, [dispatch]);

  return (
    <>
      <Admin extract=" w-[200vw] md:!w-full">
        <AutoTradingComponent />
      </Admin>
    </>
  );
};

export default Autotrading;
