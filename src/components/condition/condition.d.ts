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

/* condition option type */

export type useP_fluctuationType = {
  term: number;

  prev: number;
  now: number;
  percent: number;
};

export type useP_rangeType = {
  term: number;

  first_value: number;
  second_value: number;
};

export type useV_avg_volumeType = {
  term: number;
  timeing: number;
  recent: number;
  first: number;
  second: number;
};

export type useMASP_comparisonType = {
  term: number;
  timeing: number;

  first: number;
  second: number;
  range: number;
  percent: number;
};

export type useMASP_comparison_doubleType = {
  term: number;
  timeing: number;

  first_disparity_first_value: number;
  first_comparision: "<" | ">";
  first_disparity_second_value: number;
  second_disparity_first_value: number;
  second_comparision: "<" | ">";
  second_disparity_second_value: number;
};

export type useMASP_disparityType = {
  term: number;
  timeing: number;

  first_disparity: number;
  second_disparity: number;
  percent: number;
};

export type useMASP_trendType = {
  term: number;
  timeing: number;

  disparity_term: number;
  trend_type: "상승" | "하락";
  trend_term: number;
};

export type useD_overRVType = {
  term: number;
  timeing: number;

  disparity_term: number;
  disparity_value: number;
  trend_type: "상향" | "하향";
};

export type useD_rangeRVType = {
  term: number;
  timeing: number;

  range: number;
  firstRange_value: number;
  secondRange_value: number;
};

export type useD_RV_up_downType = {
  term: number;
  timeing: number;

  range: number;
  disparity_value: number;
  up_down: "이상";
};

export type useD_trendType = {
  term: number;
  timeing: number;

  range: number;
  trend_term: number;
  trend_type: "상승" | "하락";
};

export type useD_reverseType = {
  term: number;
  timeing: number;

  range: number;
  trend_term: number;
  trend_type: "상승" | "하락";
};

export type useMACD_line_overType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  signal: number;
  line_over: "상향" | "하향";
};

export type useMACD_line_comparisonType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  signal: number;
  line_comparison: "이하" | "이상";
};

export type useMACD_value_overType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  value: number;
  value_over_type: "상향" | "하향";
};

export type useMACD_value_up_downType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  value: number;
  value_up_down: "이하" | "이상";
};

export type useMACD_value_rangeType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  value_range_one: number;
  value_range_two: number;
};

export type useMACD_trendType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  trend_term: number;
  trend_type: "상승" | "하락";
};

export type useMACD_reverseType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  trend_term: number;
  trend_type: "상승" | "하락";
};

export type useMACDS_value_overType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  signal: number;
  value: number;
  value_over_type: "상향" | "하향";
};

export type useMACDS_value_up_downType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  signal: number;
  value: number;
  value_up_down: "이하" | "이상";
};

export type useMACDS_value_rangeType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  signal: number;
  value_range_one: number;
  value_range_two: number;
};

export type useMACDS_trendType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  signal: number;
  trend_term: number;
  trend_type: "상승" | "하락";
};

export type useMACDS_reverseType = {
  term: number;
  timeing: number;

  shot: number;
  long: number;
  signal: number;
  trend_term: number;
  trend_type: "상승" | "하락";
};
