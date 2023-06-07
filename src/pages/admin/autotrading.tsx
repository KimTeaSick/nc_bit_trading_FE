import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setPageActive } from "@/module/common";
import AutoTradingComponent from "@/components/autoTrading/index";
import Admin from "@/layouts/admin";

const Autotrading: NextPage = () => {
  const dispatch = useDispatch<any>();
  const [recommandPriceData, setRecommandPrice] = useState([]);

  useEffect(() => {
    dispatch(setPageActive("Search"));
  }, [dispatch]);

  return (
    <>
      <Admin>
        <AutoTradingComponent />
      </Admin>
    </>
  );
};

export default Autotrading;
