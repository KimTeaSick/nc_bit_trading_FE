import { Dispatch, FC, SetStateAction, useEffect, useReducer } from "react";
import SettingButton from "./SettingButton";
import { AvgLineDetailActive, AvgLineDetailComplete } from "./AvgLineDetail";
import { AvgLineSection } from "./Setting.styled";
import {
  useDisparityLineMutation,
  useDisparityLineQuery,
} from "@/pages/api/settingAPI";
import { useDispatch } from "react-redux";
import { setDisparityLineOption } from "@/module/setting";

interface AvgLineSettingProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const AvgLineSetting: FC<AvgLineSettingProps> = ({ active, setActive }) => {
  const dispatch = useDispatch();
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

  const { data, isLoading } = useDisparityLineQuery();

  const { mutate: updateDisparity } = useDisparityLineMutation(disparityOption);
  const changeOption = () => {
    if (active) {
      updateDisparity(disparityOption);
      setActive(!active);
    } else {
      setActive(!active);
    }
  };

  useEffect(() => {
    console.log("request.data :::::::: ", data);
    setDisparityOption({
      line_one: {
        ...disparityOption.line_one,
        range: data?.line_one.range,
        color: data?.line_one.color,
      },
      line_two: {
        ...disparityOption.line_two,
        range: data?.line_two.range,
        color: data?.line_two.color,
      },
      line_three: {
        ...disparityOption.line_three,
        range: data?.line_three.range,
        color: data?.line_three.color,
      },
    });
    dispatch(setDisparityLineOption(data));
  }, [data, isLoading, dispatch]);

  return (
    <AvgLineSection>
      <p>이동평균선 설정</p>
      {active === true ? (
        <>
          <AvgLineDetailActive
            range={disparityOption.line_one.range}
            color={disparityOption.line_one.color}
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
            range={disparityOption.line_two.range}
            color={disparityOption.line_two.color}
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
            range={disparityOption.line_three.range}
            color={disparityOption.line_three.color}
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
            range={disparityOption.line_one.range}
            color={disparityOption.line_one.color}
          />
          <AvgLineDetailComplete
            lineName="Line Two"
            range={disparityOption.line_two.range}
            color={disparityOption.line_two.color}
          />
          <AvgLineDetailComplete
            lineName="Line Three"
            range={disparityOption.line_three.range}
            color={disparityOption.line_three.color}
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
