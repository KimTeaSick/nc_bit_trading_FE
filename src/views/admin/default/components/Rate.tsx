import Card from "@/components/common/card";
import React, { FC } from "react";
import AssetsTable from "./AssetsTable";

interface Props {
  rateInfo: any;
}

const Rate: FC<Props> = ({ rateInfo }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-xl">현재 자산 변화 추이</div>
      <div className="text-sm">( 당일 00시 기준 )</div>
      <div className="text-5xl font-bold">{rateInfo?.now_balance}</div>
      <div
        className={`text-2xl font-bold ${
          rateInfo?.rate > 0 ? "text-blue-600" : "text-red-600"
        }`}
      >
        {rateInfo?.rate} %
      </div>
    </div>
  );
};

export default React.memo(Rate);
