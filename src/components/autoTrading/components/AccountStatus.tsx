import Button from "@/components/common/button";
import Widget from "@/components/widget/Widget";
import { controlAuto } from "@/pages/api/autotradingCondition";
import { FC } from "react";
import { MdAccountBalance } from "react-icons/md";
import { RiHandCoinFill, RiHandCoinLine } from "react-icons/ri";
import { TbMoneybag, TbPigMoney } from "react-icons/tb";
import Router from "next/router";
import { fixed } from "../lib/tool";

const ACCOUNT_COVER_CLASS =
  "items-center mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6";
const BUTTON_COVER_CLASS = "flex h-12 justify-center";

interface Props {
  myProperty: string[];
}

const AccountStatus: FC<Props> = ({ myProperty }) => {
  const stopEvent = () => {
    controlAuto(false);
    alert("자동 매매가 중지되었습니다.");
    Router.replace("/admin/default");
  };

  return (
    <div className={ACCOUNT_COVER_CLASS}>
      <Widget
        icon={<MdAccountBalance className="h-7 w-7" />}
        title={"종합잔고"}
        subtitle={fixed(String(myProperty[0]), 0)}
      />
      <Widget
        icon={<TbMoneybag className="h-6 w-6" />}
        title={"예수금"}
        subtitle={fixed(String(myProperty[1]), 0)}
      />
      <Widget
        icon={<RiHandCoinFill className="h-7 w-7" />}
        title={"당일 매수금"}
        subtitle={"40"}
      />
      <Widget
        icon={<RiHandCoinLine className="h-6 w-6" />}
        title={"당일 매도금"}
        subtitle={"40"}
      />
      <Widget
        icon={<TbPigMoney className="h-7 w-7" />}
        title={"손익금"}
        subtitle={"40"}
      />
      <div className={BUTTON_COVER_CLASS}>
        <Button type={true} title="자동 매매 중지" event={() => stopEvent()} />
      </div>
    </div>
  );
};

export default AccountStatus;
