import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setPageActive } from "@/module/common";
import Dashboard from "@/views/admin/default";
import Admin from "@/layouts/admin";

const Autotrading: NextPage = () => {
  const dispatch = useDispatch<any>();
  const [recommandPriceData, setRecommandPrice] = useState([]);

  useEffect(() => {
    dispatch(setPageActive("Search"));
  }, [dispatch]);

  return (
    <>
      <Admin>ㅁㄴㅇ</Admin>
    </>
  );
};

export default Autotrading;
