import { FC } from "react";
import { setPageActive } from "@/module/common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDisparityOptionThunk } from "../api/settingAPI";
import Admin from "@/layouts/admin";
import ConditionModal from "@/components/autoTrading/components/ConditionModal";
import { getNowUsedCondition } from "../api/autotrading";
import { RootStateType } from "@/module/rootReducer.d";

const Setting: FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(setPageActive("Setting"));
    dispatch(getDisparityOptionThunk());
    dispatch(getNowUsedCondition());
  }, [dispatch]);

  const at = useSelector((state: RootStateType) => state.autotrading);
  console.log("at.searchCondition", at.searchCondition);
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
        <ConditionModal
          type="search"
          condition={Object.values(
            at.searchCondition ? at.searchCondition : []
          )}
        />
        <ConditionModal
          type="trading"
          condition={Object.values(
            at.tradingCondition ? at.tradingCondition : []
          )}
        />
      </div>
    </Admin>
  );
};

export default Setting;
