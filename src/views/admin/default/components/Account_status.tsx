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

const WIDGET_WRAPPER =
  "mt-3 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5";
const SEVEN = "h-7 w-7";
const SIX = "h-6 w-6";

const Account_status: FC<Props> = ({ accountInfo }) => {
  return (
    <div className={WIDGET_WRAPPER}>
      <Widget
        title={"종합잔고"}
        icon={<MdAccountBalance className={SEVEN} />}
        subtitle={krwChage(accountInfo?.total)}
      />
      <Widget
        title={"예수금"}
        icon={<TbMoneybag className={SIX} />}
        subtitle={krwChage(accountInfo?.deposit)}
      />
      <Widget
        title={"당일 매수금"}
        icon={<RiHandCoinFill className={SEVEN} />}
        subtitle={krwChage(accountInfo?.buy)}
      />
      <Widget
        title={"당일 매도금"}
        icon={<RiHandCoinLine className={SIX} />}
        subtitle={krwChage(accountInfo?.sell)}
      />
      <Widget
        title={"손익금"}
        icon={<TbPigMoney className={SEVEN} />}
        subtitle={krwChage(accountInfo?.revenue)}
      />
    </div>
  );
};

export default React.memo(Account_status);
