import LayoutComponent from "@/components/common/Layout";
import { FC } from "react";
import { setPageActive } from "@/module/common";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SettingPage from "@/components/Setting/SettingPage";
import { getDisparityOptionThunk } from "./api/settingAPI";

const Setting: FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(setPageActive("Setting"));
    dispatch(getDisparityOptionThunk());
  }, [dispatch]);

  return (
    <LayoutComponent>
      <SettingPage />
    </LayoutComponent>
  );
};

export default Setting;
