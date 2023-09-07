import { TbPigMoney, TbMoneybag } from "react-icons/tb";
import { RiHandCoinFill, RiHandCoinLine } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import Widget from "@/components/common/widget/Widget";
import React, { FC } from "react";
import { AccountType } from "@/@types/Dash";
import { krwChage } from "@/lib/krwChage";

interface Props {
  accountInfo: AccountType | undefined;
}

const AccountStatus: FC<Props> = ({ accountInfo }) => {
  console.log("accountInfo", accountInfo);

  return (
    <div className="mt-3 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
      <Widget
        icon={<MdAccountBalance className="h-7 w-7" />}
        title={"종합잔고"}
        subtitle={krwChage(accountInfo?.total)}
      />
      <Widget
        icon={<TbMoneybag className="h-6 w-6" />}
        title={"예수금"}
        subtitle={krwChage(accountInfo?.deposit)}
      />
      <Widget
        icon={<RiHandCoinFill className="h-7 w-7" />}
        title={"당일 매수금"}
        subtitle={krwChage(accountInfo?.buy)}
      />
      <Widget
        icon={<RiHandCoinLine className="h-6 w-6" />}
        title={"당일 매도금"}
        subtitle={krwChage(accountInfo?.sell)}
      />
      <Widget
        icon={<TbPigMoney className="h-7 w-7" />}
        title={"손익금"}
        subtitle={krwChage(accountInfo?.revenue)}
      />
    </div>
  );
};

export default React.memo(AccountStatus);
