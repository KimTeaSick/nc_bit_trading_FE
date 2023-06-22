import { TbPigMoney, TbMoneybag } from "react-icons/tb";
import { RiHandCoinFill, RiHandCoinLine } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import Widget from "@/components/widget/Widget";
import { FC } from "react";

interface Props {
  accountInfo: number[];
}

const AccountStatus: FC<Props> = ({ accountInfo }) => {
  return (
    <div className="mt-3 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-5">
      <Widget
        icon={<MdAccountBalance className="h-7 w-7" />}
        title={"종합잔고"}
        subtitle={accountInfo[0]?.toFixed(1)}
      />
      <Widget
        icon={<TbMoneybag className="h-6 w-6" />}
        title={"예수금"}
        subtitle={accountInfo[1]?.toFixed(1)}
      />
      <Widget
        icon={<RiHandCoinFill className="h-7 w-7" />}
        title={"당일 매수금"}
        subtitle={accountInfo[2]?.toFixed(1)}
      />
      <Widget
        icon={<RiHandCoinLine className="h-6 w-6" />}
        title={"당일 매도금"}
        subtitle={accountInfo[3]?.toFixed(1)}
      />
      <Widget
        icon={<TbPigMoney className="h-7 w-7" />}
        title={"손익금"}
        subtitle={accountInfo[4]?.toFixed(1)}
      />
    </div>
  );
};

export default AccountStatus;
