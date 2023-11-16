import { krwChage } from "@/lib/krwChage";
import React, { FC } from "react";

interface Props {
  money: number;
  status: "success" | "error" | "loading";
}

const RATE_WRAPPER = "flex flex-col justify-center items-center";

const All_people_money: FC<Props> = ({ status, money }) => {
  return (
    <div className={RATE_WRAPPER}>
      <div className="text-xl">자동매매 통합 자산</div>
      <div className="text-5xl font-bold">
        {status === "success" ? krwChage(money) : 0} 원
      </div>
    </div>
  );
};

export default React.memo(All_people_money);
