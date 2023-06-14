import { Dispatch, FC, SetStateAction } from "react";
import { useAccountType } from "../../type/autoTrading";
import { Input } from "@/components/common/input";

const COVER_CLASS = "flex flex-col gap-2 font-semibold";
const TITLE_CLASS = "font-bold text-xl";
const COMPONENT_STYLR_CLASS = "flex gap-2 items-center px-2";

interface Props {
  value: useAccountType;
  setValue: Dispatch<SetStateAction<useAccountType>>;
}

const TradingAutoCancle: FC<Props> = ({ value, setValue }) => {
  return (
    <div className={COVER_CLASS}>
      <p className={TITLE_CLASS}>2. 미체결 자동 취소</p>
      <div className={COMPONENT_STYLR_CLASS}>
        <p>매도 미 체결 주문 내역에 대하여 주문시점으로부터 </p>
        <Input
          width={50}
          value={value.sell_cancle_time}
          onClick={() => setValue({ ...value, sell_cancle_time: "" })}
          onChange={(e) =>
            setValue({ ...value, sell_cancle_time: e.target.value })
          }
        />
        <p>초 후 자동으로 주문 취소</p>
      </div>
      <div className={COMPONENT_STYLR_CLASS}>
        <p>매수 미 체결 주문 내역에 대하여 주문시점으로부터 </p>
        <Input
          width={50}
          value={value.sell_cancle_time}
          onClick={() => setValue({ ...value, buy_cancle_time: "" })}
          onChange={(e) =>
            setValue({ ...value, buy_cancle_time: e.target.value })
          }
        />
        <p>초 후 자동으로 주문 취소</p>
      </div>
    </div>
  );
};

export default TradingAutoCancle;
