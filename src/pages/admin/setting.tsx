import SettingPage from "@/views/admin/setting/index";
import { FC } from "react";
import { setPageActive } from "@/module/common";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import SettingPage from "@/components/Setting/SettingPage";
import { getDisparityOptionThunk } from "../api/settingAPI";
import Admin from "@/layouts/admin";

const Setting: FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(setPageActive("Setting"));
    dispatch(getDisparityOptionThunk());
  }, [dispatch]);

  return (
    <Admin>
      <SettingPage />
    </Admin>
  );
};

export default Setting;
