import { FC } from "react";
import { setPageActive } from "@/module/common";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import SettingPage from "@/components/Setting/SettingPage";
import { getDisparityOptionThunk } from "../api/settingAPI";
import Admin from "@/layouts/admin";
import Search from "@/components/search/next_index";

const Setting: FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(setPageActive("Setting"));
    dispatch(getDisparityOptionThunk());
  }, [dispatch]);

  const TEST_ARRAY = [1, 2, 3];

  return (
    <Admin>
      <div
        style={{
          padding: "5%",
          display: "flex",
          flexDirection: "column",
          rowGap: 15,
        }}
      >
        <Search />
      </div>
    </Admin>
  );
};

export default Setting;
