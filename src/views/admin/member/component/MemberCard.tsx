import { useState } from "react";

import { krwChage } from "@/lib/krwChage";
import { controlTrading } from "@/pages/api/member";
import { AutoButton } from "./Button";
import { MemberType } from "@/@types/Member";

export const MemberCard = ({
  name,
  account,
  email,
  active,
  startDate,
  id,
}: MemberType) => {
  const [_active, setActive] = useState(active);
  const controlTradingEvent = async () => {
    const res = await controlTrading({ id, status: active });
    if (res === 200) setActive(_active === 1 ? 0 : 1);
  };
  return (
    <div className="flex bg-white shadow-md rounded-md border-gray-50 border-2 p-2 gap-4 items-center w-full md:w-2/5">
      <div className="w-1/2 flex flex-col gap-1">
        <div>이름 : {name}</div>
        <div>이메일 : {email}</div>
        <div>잔고 : {krwChage(account) + " 원"}</div>
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <div className="flex 2-full gap-2 items-center justify-between">
          자동매매 제어:
          <AutoButton active={active} event={controlTradingEvent} />
        </div>
        <div>자동 매매 실행 시간 : {startDate}</div>
      </div>
    </div>
  );
};
