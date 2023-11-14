import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Admin from "@/layouts/admin";
import AutoTradingComponent from "@/views/admin/autoTradingCondition/index";
import { setPageActive } from "@/module/common";

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
