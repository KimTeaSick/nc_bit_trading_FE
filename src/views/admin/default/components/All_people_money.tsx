import { krwChage } from "@/lib/krwChage";
import React, { FC } from "react";

interface Props {
  money: any;
}

const RATE_WRAPPER = "flex flex-col justify-center items-center";

const All_people_money: FC<Props> = ({ money }) => {
  return (
    <div className={RATE_WRAPPER}>
      <div className="text-xl">자동매매 통합 자산</div>
      <div className="text-5xl font-bold">{krwChage(money)} 원</div>
    </div>
  );
};

export default React.memo(All_people_money);
