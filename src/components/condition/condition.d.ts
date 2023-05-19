import { ReactNode } from "react";

export type CONNDITION_LIST_TYPE = {
  [key: string]: ReactNode;
};

export type CHOICE_TYPE =
  | "주가 범위"
  | "주가 등락률"
  | "주가 이동평균 비교"
  | "주가 이동평균 2개 비교"
  | "이동평균 이격도"
  | "주가 이동 평균 추세"
  | "거래 대금"
  | "평균 거래량"
  | "거래량 "
  | "이격도 기준값 돌파"
  | "이격도 기준값 범위"
  | "이격도 기준값 이상 이하"
  | "이격도 추세"
  | "이격도 반전"
  | "MACD 기준선 돌파"
  | "MACD 기준선 비교"
  | "MACD 기준값 돌파"
  | "MACD 기준값 이상 이하"
  | "MACD 기준값 범위"
  | "MACD 추세"
  | "MACD 반전"
  | "MACD Signal 기준값 돌파"
  | "MACD Signal 기준값 이상 이하"
  | "MACD Signal 기준값 범위"
  | "MACD Signal 추세"
  | "MACD Signal 반전";

export type Key_namesType = {
  P_ran: "주가 범위";
  P_flu: "주가 등락률";
  MASP_com: "주가 이동평균 비교";
  MASP_com_d: "주가 이동평균 2개 비교";
  MASP_dis: "이동평균 이격도";
  MASP_t: "주가 이동 평균 추세";
  transaction_amount: "거래 대금";
  V_a_v: "평균 거래량";
  volume: "거래량 ";
  D_over: "이격도 기준값 돌파";
  D_range: "이격도 기준값 범위";
  D_RV_up_down: "이격도 기준값 이상 이하";
  D_t: "이격도 추세";
  D_re: "이격도 반전";
  MACD_l_o: "MACD 기준선 돌파";
  MACD_l_c: "MACD 기준선 비교";
  MACD_v_o: "MACD 기준값 돌파";
  MACD_v_u_d: "MACD 기준값 이상 이하";
  MACD_v_r: "MACD 기준값 범위";
  MACD_t: "MACD 추세";
  MACD_re: "MACD 반전";
  MACDS_v: "MACD Signal 기준값 돌파";
  MACDS_v_u_d: "MACD Signal 기준값 이상 이하";
  MACDS_v_r: "MACD Signal 기준값 범위";
  MACDS_t: "MACD Signal 추세";
  MACDS_r: "MACD Signal 반전";
};

export type Key_names_returnType = {
  [key: string]: ReactNode;
};
/* condition option type */

export type useP_fluctuationType = {
  flag: string;
  term: string;

  prev: string;
  now: string;
  percent: string;
};

export type useP_rangeType = {
  flag: string;
  term: string;

  first_value: string;
  second_value: string;
};

export type useV_avg_volumeType = {
  flag: string;
  term: string;
  timing: string;
  recent: string;
  first: string;
  second: string;
};

export type useV_transaction_amountType = {
  flag: string;
  first_value: string;
  second_value: string;
};

export type useV_volumeType = {
  flag: string;
  term: string;

  first_value: string;
  second_value: string;
};

export type useMASP_comparisonType = {
  flag: string;
  term: string;
  timing: string;

  first: string;
  second: string;
  range: string;
  percent: string;
};

export type useMASP_comparison_doubleType = {
  flag: string;
  term: string;
  timing: string;

  first_disparity_first_value: string;
  first_comparision: "<" | ">";
  first_disparity_second_value: string;
  second_disparity_first_value: string;
  second_comparision: "<" | ">";
  second_disparity_second_value: string;
};

export type useMASP_disparityType = {
  flag: string;
  term: string;
  timing: string;

  first_disparity: string;
  second_disparity: string;
  percent: string;
  count: string;
};

export type useMASP_trendType = {
  flag: string;
  term: string;
  timing: string;

  disparity_term: string;
  trend_type: "상승" | "하락";
  trend_term: string;
};

export type useD_overRVType = {
  flag: string;
  term: string;
  timing: string;

  disparity_term: string;
  disparity_value: string;
  trend_type: "상향" | "하향";
};

export type useD_rangeRVType = {
  flag: string;
  term: string;
  timing: string;

  range: string;
  firstRange_value: string;
  secondRange_value: string;
};

export type useD_RV_up_downType = {
  flag: string;
  term: string;
  timing: string;

  range: string;
  disparity_value: string;
  up_down: "이상";
};

export type useD_trendType = {
  flag: string;
  term: string;
  timing: string;

  range: string;
  trend_term: string;
  trend_type: "상승" | "하락";
};

export type useD_reverseType = {
  flag: string;
  term: string;
  timing: string;

  range: string;
  trend_term: string;
  trend_type: "상승" | "하락";
};

export type useMACD_line_overType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  signal: string;
  line_over: "상향" | "하향";
};

export type useMACD_line_comparisonType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  signal: string;
  line_comparison: "이하" | "이상";
};

export type useMACD_value_overType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  value: string;
  value_over_type: "상향" | "하향";
};

export type useMACD_value_up_downType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  value: string;
  value_up_down: "이하" | "이상";
};

export type useMACD_value_rangeType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  value_range_one: string;
  value_range_two: string;
};

export type useMACD_trendType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  trend_term: string;
  trend_type: "상승" | "하락";
};

export type useMACD_reverseType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  trend_term: string;
  trend_type: "상승" | "하락";
};

export type useMACDS_value_overType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  signal: string;
  value: string;
  value_over_type: "상향" | "하향";
};

export type useMACDS_value_up_downType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  signal: string;
  value: string;
  value_up_down: "이하" | "이상";
};

export type useMACDS_value_rangeType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  signal: string;
  value_range_one: string;
  value_range_two: string;
};

export type useMACDS_trendType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  signal: string;
  trend_term: string;
  trend_type: "상승" | "하락";
};

export type useMACDS_reverseType = {
  flag: string;
  term: string;
  timing: string;

  short: string;
  long: string;
  signal: string;
  trend_term: string;
  trend_type: "상승" | "하락";
};
