import { FC } from "react";
import { AccountInfoWrapper } from "./Dash.styled";

interface AccountInfoProps {
  property: string;
}

const ACCOUNT_INFO_ITEM = [
  "추정 자산",
  "주문가능액",
  "당일 매수액",
  "당일 매도액",
  "매매 수수료",
  "손익금",
];

const AccountInfo: FC<AccountInfoProps> = ({ property }) => {
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
          <div>{property ? property : 0}</div>
          <div>0</div>
          <div>0</div>
          <div>0</div>
          <div>0</div>
          <div>0</div>
        </div>
      </AccountInfoWrapper>
    </>
  );
};

export default AccountInfo;
