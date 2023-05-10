import { FC, ReactNode } from "react";
import D_overRV from "./D_overRV";
import D_reverse from "./D_reverse";
import D_overRV_up_down from "./D_RV_up_down";
import D_rangeRV from "./D_rangeRV";
import D_trend from "./D_trend";
import MACD_line_over from "./MACD_line_over";
import MACD_line_comparison from "./MACD_line_comparison";
import MACD_reverse from "./MACD_reverse";
import MACD_trend from "./MACD_trend";
import MACD_value_over from "./MACD_value_over";
import MACD_value_range from "./MACD_value_range";
import MACD_value_up_down from "./MACD_value_up_down";
import MACDS_value_over from "./MACDS_value_over";
import MACDS_value_up_down from "./MACDS_value_up_down";
import MACDS_value_range from "./MACDS_value_range";
import MACDS_trend from "./MACDS_trend";
import MACDS_reverse from "./MACDS_reverse";
import MASP_comparison from "./MASP_comparison";
import MASP_comparison_double from "./MASP_comparison_double";
import MASP_disparity from "./MASP_disparity";
import MASP_trend from "./MASP_trend";
import P_fluctuation from "./P_fluctuation";
import P_range from "./P_range";
import TP_avg_TP from "./TP_avg_TP";
import V_avg_volume from "./V_avg_volume";
import V_volume from "./V_volume";
import { CHOICE_TYPE, CONNDITION_LIST_TYPE } from "./condition";

const CONNDITION_SELECTOR = (CHOICE_CONDITION: string): ReactNode => {
  const CONNDITION_LIST: CONNDITION_LIST_TYPE = {
    "주가 범위": <P_range />,
    "주가 등락률": <P_fluctuation />,
    "주가 이동평균 비교": <MASP_comparison />,
    "주가 이동평균 2개 비교": <MASP_comparison_double />,
    "이동평균 이격도": <MASP_disparity />,
    "주가 이동 평균 추세": <MASP_trend />,
    "거래 대금": <V_volume />,
    "평균 거래량": <V_avg_volume />,
    "이격도 기준값 돌파": <D_overRV />,
    "이격도 기준값 범위": <D_rangeRV />,
    "이격도 기준값 이상 이하": <D_overRV_up_down />,
    "이격도 추세": <D_trend />,
    "이격도 반전": <D_reverse />,
    "MACD 기준선 돌파": <MACD_line_over />,
    "MACD 기준선 비교": <MACD_line_comparison />,
    "MACD 기준값 돌파": <MACD_value_over />,
    "MACD 기준값 이상 이하": <MACD_value_up_down />,
    "MACD 기준값 범위": <MACD_value_range />,
    "MACD 추세": <MACD_trend />,
    "MACD 반전": <MACD_reverse />,
    "MACD Signal 기준값 돌파": <MACDS_value_over />,
    "MACD Signal 기준값 이상 이하": <MACDS_value_up_down />,
    "MACD Signal 기준값 범위": <MACDS_value_range />,
    "MACD Signal 추세": <MACDS_trend />,
    "MACD Signal 반전": <MACDS_reverse />,
  };
  return CONNDITION_LIST[CHOICE_CONDITION];
};

interface ConditionProps {
  CHOICE: CHOICE_TYPE;
}

const Condition: FC<ConditionProps> = ({ CHOICE }) => {
  return (
    <div className="w-full h-screen rounded-3xl bg-gray-400 p-8 m-5 box-border">
      {CONNDITION_SELECTOR(CHOICE)}
    </div>
  );
};

export default Condition;
