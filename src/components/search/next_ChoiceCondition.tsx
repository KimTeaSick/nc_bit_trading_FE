import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import Card from "@/components/common/card";

import { SearchButton } from "./Condition";
import { getConditionDetail } from "@/pages/api/searchAPIs";
import { useDispatch } from "react-redux";
import { setConditionDetail } from "@/module/search";
import { flagDistinguish } from "./lib/flagDistinguish";
import Link from "next/link";
import { CONDITION_COL } from "./variable/col";
import { OptionType } from "./ConditionType";

interface Props {
  tableData: OptionType[];
  setStage: Dispatch<SetStateAction<number>>;
  registerBtnEvent: () => void;
  flag: string | null;
}

const ChoiceCondition: FC<Props> = ({
  tableData,
  setStage,
  registerBtnEvent,
  flag,
}) => {
  const dispatch = useDispatch();
  const CLICK_EVENT = async (idx: number) => {
    const detail = await getConditionDetail({ option: idx });
    dispatch(setConditionDetail(detail));
    setStage(1);
  };

  return (
    <div className="h-[80vh]">
      <Card extra={"w-full h-full sm:overflow-auto px-6"}>
        <header className="relative flex items-center justify-between pt-4 ">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            조건 리스트
          </div>
        </header>
        <div>
          <div className="flex w-full justify-between border-b-2 my-3">
            {CONDITION_COL.map((value, index) => (
              <p
                key={index}
                className="w-1/3 text-start font-bold text-gray-600 text-sm"
              >
                {value}
              </p>
            ))}
          </div>
          <div className="flex flex-col w-full gap-2 text-sm">
            {tableData?.map((value, index) => (
              <div
                key={index}
                className={`flex w-full justify-between font-bold ${
                  value.Used === 1 ? "bg-red-100 dark:bg-navy-200" : ""
                }`}
                onClick={() => CLICK_EVENT(value.idx)}
              >
                <div className="w-1/3 text-start">{value.Name}</div>
                <div className="w-1/3 text-start">{value.Create_date}</div>
                <div className="w-1/3 text-start">{value.Update_date}</div>
              </div>
            ))}
          </div>
          <div className="w-1/2 md:w-1/6 flex gap-2 self-end p-2 absolute bottom-1">
            <SearchButton event={() => registerBtnEvent()} title="등록" />
            {flag === "0" && (
              <Link className="w-full" href={"/admin/autotradingcondition"}>
                <SearchButton
                  event={() => console.log("asd")}
                  title="매매 시작"
                />
              </Link>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChoiceCondition;
