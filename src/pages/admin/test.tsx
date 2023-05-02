import { FC } from "react";
import { setPageActive } from "@/module/common";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import SettingPage from "@/components/Setting/SettingPage";
import { getDisparityOptionThunk } from "../api/settingAPI";
import Admin from "@/layouts/admin";
import SelectBox from "@/components/common/select/SelectBox";
import { Input } from "@/components/common/input/index";

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
        <Input width={150} onChange={(e) => console.log(e.target.value)} />
        <SelectBox
          width={150}
          itemList={TEST_ARRAY}
          event={() => console.log("ASD")}
        />
      </div>
    </Admin>
  );
};

export default Setting;
