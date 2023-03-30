import { RootStateType } from "@/module/rootReducer.d";
import { FC } from "react";
import { useSelector } from "react-redux";
import { AccountInfoWrapper } from "./Dash.styled";

interface AccountInfoProps {}

const ACCOUNT_INFO_ITEM = [
  "추정 자산",
  "주문가능액",
  "당일 매수액",
  "당일 매도액",
  "매매 수수료",
  "손익금",
];

const AccountInfo: FC<AccountInfoProps> = ({}) => {
  const { accountInfo } = useSelector((state: RootStateType) => state.dash);

  return (
    <>
      <p>NC 계좌정보</p>
      <AccountInfoWrapper>
        <div className="accountItemWrapper">
          {ACCOUNT_INFO_ITEM.map((item: string, index: number) => (
            <div className="accountItem" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="accountItemWrapper">
          <div>{accountInfo[0]?.toFixed(1)}</div>
          <div>{accountInfo[1]?.toFixed(1)}</div>
          <div>{accountInfo[2]?.toFixed(1)}</div>
          <div>{accountInfo[3]?.toFixed(1)}</div>
          <div>{accountInfo[4]?.toFixed(1)}</div>
          <div>0</div>
        </div>
      </AccountInfoWrapper>
    </>
  );
};

export default AccountInfo;
