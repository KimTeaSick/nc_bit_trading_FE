import {
  Dispatch,
  FC,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
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
import V_avg_volume from "./V_avg_volume";
import V_transaction_amount from "./V_transaction_amount";
import V_volume from "./V_volume";
import { CHOICE_TYPE, CONNDITION_LIST_TYPE } from "./condition";
import * as Type from "./condition";
import axios from "axios";
import AddedConditionList from "./AddedConditionList";

const CONNDITION_SELECTOR = (
  CHOICE_CONDITION: string,
  setConditionList: Dispatch<any>
): ReactNode => {
  const [P_flu, setP_flu] = useReducer(
    (prev: Type.useP_fluctuationType, next: Type.useP_fluctuationType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      prev: "0",
      now: "0",
      percent: "0",
    }
  );
  const [P_ran, setP_ran] = useReducer(
    (prev: Type.useP_rangeType, next: Type.useP_rangeType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",

      first_value: "0",
      second_value: "0",
    }
  );
  const [V_a_v, setV_a_v] = useReducer(
    (prev: Type.useV_avg_volumeType, next: Type.useV_avg_volumeType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",
      recent: "0",
      first: "0",
      second: "0",
    }
  );
  const [transaction_amount, setTransaction_amount] = useReducer(
    (
      prev: Type.useV_transaction_amountType,
      next: Type.useV_transaction_amountType
    ) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      first_value: "0",
      second_value: "0",
    }
  );
  const [volume, setVolume] = useReducer(
    (prev: Type.useV_volumeType, next: Type.useV_volumeType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",

      first_value: "0",
      second_value: "0",
    }
  );
  const [MASP_com, setMASP_com] = useReducer(
    (prev: Type.useMASP_comparisonType, next: Type.useMASP_comparisonType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      first: "0",
      second: "0",
      range: "0",
      percent: "0",
    }
  );
  const [MASP_com_d, setMASP_com_d] = useReducer(
    (
      prev: Type.useMASP_comparison_doubleType,
      next: Type.useMASP_comparison_doubleType
    ) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      first_disparity_first_value: "0",
      first_comparision: "<",
      first_disparity_second_value: "0",
      second_disparity_first_value: "0",
      second_comparision: "<",
      second_disparity_second_value: "0",
    }
  );
  const [MASP_dis, setMASP_dis] = useReducer(
    (prev: Type.useMASP_disparityType, next: Type.useMASP_disparityType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      first_disparity: "0",
      second_disparity: "0",
      percent: "0",
      count: "0",
    }
  );
  const [MASP_t, setMASP_t] = useReducer(
    (prev: Type.useMASP_trendType, next: Type.useMASP_trendType) => {
      return { ...prev, ...next };
    },
    {
      term: "0",
      flag: "0",
      timing: "0",

      disparity_term: "0",
      trend_type: "상승",
      trend_term: "0",
    }
  );
  const [D_over, setD_over] = useReducer(
    (prev: Type.useD_overRVType, next: Type.useD_overRVType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      disparity_term: "0",
      disparity_value: "0",
      trend_type: "상향",
    }
  );
  const [D_range, setD_range] = useReducer(
    (prev: Type.useD_rangeRVType, next: Type.useD_rangeRVType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      range: "0",
      firstRange_value: "0",
      secondRange_value: "0",
    }
  );
  const [D_RV_up_down, setD_RV_up_down] = useReducer(
    (prev: Type.useD_RV_up_downType, next: Type.useD_RV_up_downType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      range: "0",
      disparity_value: "0",
      up_down: "이상",
    }
  );
  const [D_t, setD_t] = useReducer(
    (prev: Type.useD_trendType, next: Type.useD_trendType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      range: "0",
      trend_term: "0",
      trend_type: "상승",
    }
  );
  const [D_re, setD_re] = useReducer(
    (prev: Type.useD_reverseType, next: Type.useD_reverseType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      range: "0",
      trend_term: "0",
      trend_type: "상승",
    }
  );
  const [MACD_l_o, setMACD_l_o] = useReducer(
    (prev: Type.useMACD_line_overType, next: Type.useMACD_line_overType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      signal: "0",
      line_over: "상향",
    }
  );
  const [MACD_l_c, setMACD_l_c] = useReducer(
    (
      prev: Type.useMACD_line_comparisonType,
      next: Type.useMACD_line_comparisonType
    ) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      signal: "0",
      line_comparison: "이하",
    }
  );
  const [MACD_v_o, setMACD_v_o] = useReducer(
    (prev: Type.useMACD_value_overType, next: Type.useMACD_value_overType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      value: "0",
      value_over_type: "상향",
    }
  );
  const [MACD_v_u_d, setMACD_v_u_d] = useReducer(
    (
      prev: Type.useMACD_value_up_downType,
      next: Type.useMACD_value_up_downType
    ) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      value: "0",
      value_up_down: "이하",
    }
  );
  const [MACD_v_r, setMACD_v_r] = useReducer(
    (
      prev: Type.useMACD_value_rangeType,
      next: Type.useMACD_value_rangeType
    ) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      value_range_one: "0",
      value_range_two: "0",
    }
  );
  const [MACD_t, setMACD_t] = useReducer(
    (prev: Type.useMACD_trendType, next: Type.useMACD_trendType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      trend_term: "0",
      trend_type: "상승",
    }
  );
  const [MACD_re, setMACD_re] = useReducer(
    (prev: Type.useMACD_reverseType, next: Type.useMACD_reverseType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      trend_term: "0",
      trend_type: "상승",
    }
  );
  const [MACDS_v, setMACDS_v] = useReducer(
    (
      prev: Type.useMACDS_value_overType,
      next: Type.useMACDS_value_overType
    ) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      signal: "0",
      value: "0",
      value_over_type: "상향",
    }
  );
  const [MACDS_v_u_d, setMACDS_v_u_d] = useReducer(
    (
      prev: Type.useMACDS_value_up_downType,
      next: Type.useMACDS_value_up_downType
    ) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      signal: "0",
      value: "0",
      value_up_down: "이하",
    }
  );
  const [MACDS_v_r, setMACDS_v_r] = useReducer(
    (
      prev: Type.useMACDS_value_rangeType,
      next: Type.useMACDS_value_rangeType
    ) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      signal: "0",
      value_range_one: "0",
      value_range_two: "0",
    }
  );
  const [MACDS_t, setMACDS_t] = useReducer(
    (prev: Type.useMACDS_trendType, next: Type.useMACDS_trendType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      signal: "0",
      trend_term: "0",
      trend_type: "상승",
    }
  );
  const [MACDS_r, setMACDS_r] = useReducer(
    (prev: Type.useMACDS_reverseType, next: Type.useMACDS_reverseType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      timing: "0",

      short: "0",
      long: "0",
      signal: "0",
      trend_term: "0",
      trend_type: "상승",
    }
  );
  const CONNDITION_LIST: CONNDITION_LIST_TYPE = {
    "주가 범위": <P_range P_ran={P_ran} setP_ran={setP_ran} />,
    "주가 등락률": <P_fluctuation P_flu={P_flu} setP_flu={setP_flu} />,
    "주가 이동평균 비교": (
      <MASP_comparison MASP_com={MASP_com} setMASP_com={setMASP_com} />
    ),

    "주가 이동평균 2개 비교": (
      <MASP_comparison_double
        MASP_com_d={MASP_com_d}
        setMASP_com_d={setMASP_com_d}
      />
    ),
    "이동평균 이격도": (
      <MASP_disparity MASP_dis={MASP_dis} setMASP_dis={setMASP_dis} />
    ),
    "주가 이동 평균 추세": <MASP_trend MASP_t={MASP_t} setMASP_t={setMASP_t} />,

    "거래 대금": (
      <V_transaction_amount
        transaction_amount={transaction_amount}
        setTransaction_amount={setTransaction_amount}
      />
    ),
    "평균 거래량": <V_avg_volume V_a_v={V_a_v} setV_a_v={setV_a_v} />,
    "거래량 ": <V_volume volume={volume} setVolume={setVolume} />,
    "이격도 기준값 돌파": <D_overRV D_over={D_over} setD_over={setD_over} />,
    "이격도 기준값 범위": (
      <D_rangeRV D_range={D_range} setD_range={setD_range} />
    ),
    "이격도 기준값 이상 이하": (
      <D_overRV_up_down
        D_RV_up_down={D_RV_up_down}
        setD_RV_up_down={setD_RV_up_down}
      />
    ),
    "이격도 추세": <D_trend D_trend={D_t} setD_trend={setD_t} />,
    "이격도 반전": <D_reverse D_re={D_re} setD_re={setD_re} />,
    "MACD 기준선 돌파": (
      <MACD_line_over MACD_l_o={MACD_l_o} setMACD_l_o={setMACD_l_o} />
    ),
    "MACD 기준선 비교": (
      <MACD_line_comparison MACD_l_c={MACD_l_c} setMACD_l_c={setMACD_l_c} />
    ),
    "MACD 기준값 돌파": (
      <MACD_value_over MACD_v_o={MACD_v_o} setMACD_v_o={setMACD_v_o} />
    ),
    "MACD 기준값 이상 이하": (
      <MACD_value_up_down
        MACD_v_u_d={MACD_v_u_d}
        setMACD_v_u_d={setMACD_v_u_d}
      />
    ),
    "MACD 기준값 범위": (
      <MACD_value_range MACD_v_r={MACD_v_r} setMACD_v_r={setMACD_v_r} />
    ),
    "MACD 추세": <MACD_trend MACD_t={MACD_t} setMACD_t={setMACD_t} />,
    "MACD 반전": <MACD_reverse MACD_re={MACD_re} setMACD_re={setMACD_re} />,
    "MACD Signal 기준값 돌파": (
      <MACDS_value_over MACDS_v={MACDS_v} setMACDS_v={setMACDS_v} />
    ),
    "MACD Signal 기준값 이상 이하": (
      <MACDS_value_up_down
        MACDS_v_u_d={MACDS_v_u_d}
        setMACDS_v_u_d={setMACDS_v_u_d}
      />
    ),
    "MACD Signal 기준값 범위": (
      <MACDS_value_range MACDS_v_r={MACDS_v_r} setMACDS_v_r={setMACDS_v_r} />
    ),
    "MACD Signal 추세": (
      <MACDS_trend MACDS_t={MACDS_t} setMACDS_t={setMACDS_t} />
    ),
    "MACD Signal 반전": (
      <MACDS_reverse MACDS_r={MACDS_r} setMACDS_r={setMACDS_r} />
    ),
  };
  useEffect(() => {
    setConditionList({
      P_flu: P_flu,
      P_ran: P_ran,
      V_a_v: V_a_v,
      transaction_amount: transaction_amount,
      volume: volume,
      MASP_com: MASP_com,
      MASP_com_d: MASP_com_d,
      MASP_dis: MASP_dis,
      MASP_t: MASP_t,
      D_over: D_over,
      D_range: D_range,
      D_RV_up_down: D_RV_up_down,
      D_t: D_t,
      D_re: D_re,
      MACD_l_o: MACD_l_o,
      MACD_l_c: MACD_l_c,
      MACD_v_o: MACD_v_o,
      MACD_v_u_d: MACD_v_u_d,
      MACD_v_r: MACD_v_r,
      MACD_t: MACD_t,
      MACD_re: MACD_re,
      MACDS_v: MACDS_v,
      MACDS_v_u_d: MACDS_v_u_d,
      MACDS_v_r: MACDS_v_r,
      MACDS_t: MACDS_t,
      MACDS_r: MACDS_r,
    });
  }, [
    P_flu,
    P_ran,
    V_a_v,
    transaction_amount,
    volume,
    MASP_com,
    MASP_com_d,
    MASP_dis,
    MASP_t,
    D_over,
    D_range,
    D_RV_up_down,
    D_t,
    D_re,
    MACD_l_o,
    MACD_l_c,
    MACD_v_o,
    MACD_v_u_d,
    MACD_v_r,
    MACD_t,
    MACD_re,
    MACDS_v,
    MACDS_v_u_d,
    MACDS_v_r,
    MACDS_t,
    MACDS_r,
    setConditionList,
  ]);
  return CONNDITION_LIST[CHOICE_CONDITION];
};

interface ConditionProps {
  CHOICE: CHOICE_TYPE;
}

const Condition: FC<ConditionProps> = ({ CHOICE }) => {
  const [conditionList, setConditionList] = useState({});
  console.log("conditionList", conditionList);

  return (
    <div className="w-full h-screen rounded-3xl bg-gray-400 p-8 m-5 box-border">
      {CONNDITION_SELECTOR(CHOICE, setConditionList)}
      <AddedConditionList state={conditionList} />
      <button
        className="linear mb-5 w-full rounded-xl mt-5
        bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 
        hover:bg-brand-600 
        active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        onClick={() => {
          console.log(conditionList);
          axios.post(
            "http://192.168.10.43:8888/dash/getRecommendCoin",
            conditionList
          );
        }}
      >
        해당 조건으로 검색하기
      </button>
    </div>
  );
};

export default Condition;
