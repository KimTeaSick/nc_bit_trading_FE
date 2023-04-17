import { setDisparityLineOption } from "@/module/setting";
import {
  useDisparityLineMutation,
  useDisparityLineQuery,
} from "@/pages/api/settingAPI";
import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import Disparity from "./Disparity";
import SetDisparity from "./SetDisparity";

const DisparityOption = () => {
  const dispatch = useDispatch();
  const [fixMode, setFixMode] = useState(false);

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

  const { mutate: updateDisparity } = useDisparityLineMutation(disparityOption);
  const { data, isLoading } = useDisparityLineQuery();

  const buttonEvent = () => {
    if (fixMode) {
      console.log("disparityOption", disparityOption);
      updateDisparity(disparityOption);
      setFixMode(!fixMode);
    } else {
      setFixMode(!fixMode);
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
    <>
      {fixMode ? (
        <SetDisparity
          fixMode={fixMode}
          buttonEvent={buttonEvent}
          disparityOption={disparityOption}
          setDisparityOption={setDisparityOption}
        />
      ) : (
        <Disparity fixMode={fixMode} buttonEvent={buttonEvent} data={data} />
      )}
    </>
  );
};

export default DisparityOption;
