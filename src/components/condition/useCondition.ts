import { Dispatch, useReducer } from "react";
import * as Type from "./condition";

export default class ConditionSetter {

  const [P_flu, setP_flu] = useReducer(
    (prev: Type.useP_fluctuationType, next: Type.useP_fluctuationType) => {
      return { ...prev, ...next };
    },
    {
      flag: "0",
      term: "0",
      prev: "0",
      now: "0",
      percent: "0"
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
}
