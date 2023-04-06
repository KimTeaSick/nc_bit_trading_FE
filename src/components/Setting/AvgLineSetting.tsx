import { RootStateType } from "@/module/rootReducer.d";
import { Dispatch, FC, SetStateAction, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import SettingButton from "./SettingButton";
import { AvgLineDetailActive, AvgLineDetailComplete } from "./AvgLineDetail";
import { AvgLineSection } from "./Setting.styled";
import {
  useDisparityLineMutation,
  useDisparityLineQuery,
} from "@/pages/api/settingAPI";

interface AvgLineSettingProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const AvgLineSetting: FC<AvgLineSettingProps> = ({ active, setActive }) => {
  const [disparityOption, setDisparityOption] = useReducer(
    (prev: any, next: any) => {
      return { ...prev, ...next };
    },
    {
      line_one: { name: "line_one", range: "", color: "" },
      line_two: { name: "line_two", range: "", color: "" },
      line_three: { name: "line_three", range: "", color: "" },
    }
  );

  const request = useDisparityLineQuery();

  const { mutate: updateDisparity } = useDisparityLineMutation(disparityOption);
  const changeOption = () => {
    if (active) {
      updateDisparity(disparityOption);
      setActive(!active);
    } else {
      setActive(!active);
    }
  };

  return (
    <AvgLineSection>
      <p>이동평균선 설정</p>
      {active === true ? (
        <>
          <AvgLineDetailActive
            lineName="Line One"
            setColor={(e) =>
              setDisparityOption({
                line_one: {
                  ...disparityOption.line_one,
                  color: e.target.value,
                },
              })
            }
            setRange={(e) =>
              setDisparityOption({
                line_one: {
                  ...disparityOption.line_one,
                  range: e.target.value,
                },
              })
            }
          />
          <AvgLineDetailActive
            lineName="Line Two"
            setColor={(e) =>
              setDisparityOption({
                line_two: {
                  ...disparityOption.line_two,
                  color: e.target.value,
                },
              })
            }
            setRange={(e) =>
              setDisparityOption({
                line_two: {
                  ...disparityOption.line_two,
                  range: e.target.value,
                },
              })
            }
          />
          <AvgLineDetailActive
            lineName="Line Three"
            setColor={(e) =>
              setDisparityOption({
                line_three: {
                  ...disparityOption.line_three,
                  color: e.target.value,
                },
              })
            }
            setRange={(e) =>
              setDisparityOption({
                line_three: {
                  ...disparityOption.line_three,
                  range: e.target.value,
                },
              })
            }
          />
        </>
      ) : (
        <>
          <AvgLineDetailComplete
            lineName="Line One"
            range={request.data?.line_one.range}
            color={request.data?.line_one.color}
          />
          <AvgLineDetailComplete
            lineName="Line Two"
            range={request.data?.line_two.range}
            color={request.data?.line_two.color}
          />
          <AvgLineDetailComplete
            lineName="Line Three"
            range={request.data?.line_three.range}
            color={request.data?.line_three.color}
          />
        </>
      )}
      <div className="buttonSection">
        <SettingButton active={active} event={changeOption} />
      </div>
    </AvgLineSection>
  );
};

export default AvgLineSetting;
