import { Dispatch, FC, SetStateAction } from "react";
import { useAccountType } from "../../type/autoTrading";

const COVER_CLASS = "flex flex-col font-semibold";
const TITLE_CLASS = "font-bold text-xl";
const COMPONENT_STYLR_CLASS = "flex gap-2 items-center px-2";

interface Props {
  value: useAccountType;
  setValue: Dispatch<SetStateAction<useAccountType>>;
}

const ReBuyLmit: FC<Props> = ({ value, setValue }) => {
  return (
    <div className={COVER_CLASS}>
      <p className={TITLE_CLASS}>3. 재 매수 제한</p>
      <div className={COMPONENT_STYLR_CLASS}>
        감시 중 포착 후 매수 주문이 실행된 종목은 재 매수하지 않습니다.
      </div>
    </div>
  );
};

export default ReBuyLmit;
