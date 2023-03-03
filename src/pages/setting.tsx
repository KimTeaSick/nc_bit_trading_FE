import LayoutComponent from "@/components/common/Layout";
import { FC } from "react";
import { setPageActive } from "@/module/common";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SettingPage from "@/components/Setting/SettingPage";

const Setting: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageActive("Setting"));
  }, [dispatch]);
  return (
    <LayoutComponent>
      <SettingPage />
    </LayoutComponent>
  );
};

export default Setting;
