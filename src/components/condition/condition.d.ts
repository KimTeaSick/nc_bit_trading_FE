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
