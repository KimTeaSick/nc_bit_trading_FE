import { dataChanger } from "../lib/modalDataChanger";
import { FC, useRef } from "react";
import {
  SEARCH_CONDITION,
  SEARCH_OPTION,
  TRADING_CONDITION,
  TRADING_OPTION_VALUE_LIST,
} from "../construct/modalValue";
import { SearchOptionType } from "@/module/autoTrading/index.d";

const MODAL_BACK =
  "bg-opacity-40 bg-gray-500 w-[100vw] h-[100vh] z-50 fixed top-0 left-0 overflow-hidden";
const MODAL_COVER =
  "bg-indigo-100 rounded-lg w-3/5 h-auto overflow-auto fixed top-[20%] left-[25%] flex flex-col items-center p-2 dark:bg-navy-600";

const CONDITION_COVER =
  "flex w-11/12 p-3 bg-white my-2 rounded-md box-border dark:bg-navy-700";
const CONDITION_TITLE = "font-bold mr-1 dark:text-white";
const CONDITION_CONTENT = "dark:text-white";

interface Props {
  condition: any[];
  type: string;
  showControl: (type: string) => void;
}

interface _Props {
  title?: string;
  content: string;
}

const SearchConditionC: FC<_Props> = ({ title, content }) => {
  return (
    <div className={CONDITION_COVER}>
      <p className={CONDITION_TITLE}>{title} :</p>
      <p className={CONDITION_CONTENT}>{content}</p>
    </div>
  );
};

export const SearchConditionM = ({
  cValue,
  showControl,
}: {
  cValue: SearchOptionType;
  showControl: (type: string) => void;
}) => {
  const modalRef = useRef(null);
  const S_TILE = [
    { kName: "가격", eName: "price" },
    { kName: "거래 대금", eName: "transactionA" },
    { kName: "이동평균선 비교", eName: "MASP" },
    { kName: "추세", eName: "trend" },
    { kName: "이격도", eName: "disparity" },
    { kName: "MACD", eName: "MACD" },
  ];
  return (
    <div
      ref={modalRef}
      onClick={(e) => {
        if (e.target == modalRef.current) showControl("N");
      }}
      className={MODAL_BACK}
    >
      <div className={MODAL_COVER}>
        {S_TILE.map(
          (value: { kName: string; eName: string }, index: number) => (
            <SearchConditionC
              key={index}
              title={value.kName}
              content={SEARCH_CONDITION(cValue)[`${value.eName}`]}
            />
          )
        )}
      </div>
    </div>
  );
};

const TradingConditionC: FC<_Props> = ({ title, content }) => {
  return (
    <div className="flex w-11/12 p-1 bg-white box-border dark:bg-navy-700">
      <p className={CONDITION_TITLE}>{title}</p>
      <p className={CONDITION_CONTENT}>{content}</p>
    </div>
  );
};

export const TradingConditionM = ({
  cValue,
  showControl,
}: {
  cValue: any;
  showControl: (type: string) => void;
}) => {
  const modalRef = useRef(null);
  const T_TILE = [
    { kName: "계좌 조건", eName: "account" },
    { kName: "매수 조건", eName: "buy" },
    { kName: "매도 조건", eName: "sell" },
  ];
  console.log("trading", cValue);

  return (
    <div
      ref={modalRef}
      onClick={(e) => {
        if (e.target == modalRef.current) showControl("N");
      }}
      className={MODAL_BACK}
    >
      <div className={MODAL_COVER}>
        {T_TILE.map(
          (value: { kName: string; eName: string }, index: number) => (
            <div
              className="flex flex-col items-center overflow-hidden rounded-lg my-2 w-full bg-white dark:bg-navy-700"
              key={index}
            >
              <p className="self-start ml-3 font-bold text-lg dark:text-white">
                {value.kName}
              </p>
              {Object.values(TRADING_CONDITION(cValue)[`${value.eName}`]).map(
                (value: any, index) => (
                  <TradingConditionC key={index} content={value} />
                )
              )}
            </div>
          )
        )}

        {/*  */}
      </div>
    </div>
  );
};
