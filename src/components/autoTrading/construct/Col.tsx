import { FC } from "react";

export const SEARCH_RESULT_COL = ["종목명", "현재가"];

export const TRADING_STATUS_COL = [
  "종목명",
  "개수",
  "가격",
  "사용 원화",
  "수수료",
  "상태",
  "매도 이유",
  "날짜",
];

export const ACCOUNT_PRICE_COL = [
  "종목명",
  "수익률",
  "매입가",
  "보유수량",
  "가능수량",
];

interface Props {
  itemCol: string[];
  colCount: string;
}

const COL_COVER_CLASS =
  "flex gap-5 font-bold text-sm md:!text-lg bg-indigo-50 w-full justify-between p-3";
const COL_STYLE_CLASS = (colCount: string) => {
  return `w-1/${colCount} flex justify-center`;
};

export const Col: FC<Props> = ({ itemCol, colCount }) => {
  return (
    <div className={COL_COVER_CLASS}>
      {itemCol.map((value: string, index: number) => (
        <div key={index} className={COL_STYLE_CLASS(colCount)}>
          {value}
        </div>
      ))}
    </div>
  );
};
