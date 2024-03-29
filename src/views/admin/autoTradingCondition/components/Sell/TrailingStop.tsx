import { Input } from "@/components/common/input";
import { Dispatch, FC, SetStateAction } from "react";
import { UseSellConditionType } from "../../type/autoTrading";
import SelectBox, { CALL_PRICE } from "../SelectBox";

const LINE_CLASS = "flex gap-2 items-center font-semibold pl-2";
const COVER_CLASS = "flex flex-col gap-2 ";

interface Props {
  value: UseSellConditionType;
  setValue: Dispatch<SetStateAction<UseSellConditionType>>;
}

const TrailingStop: FC<Props> = ({ value, setValue }) => {
  return (
    <div className={COVER_CLASS}>
      <div className={LINE_CLASS}>
        <p>평균 매수단가 대비</p>{" "}
        <Input
          width={"w-12"}
          value={value.trailing_start_percent}
          onClick={() => setValue({ ...value, trailing_start_percent: "" })}
          onChange={(e) =>
            setValue({ ...value, trailing_start_percent: e.target.value })
          }
        />
        <p>% 이상 상승할 때부터 감시한다. </p>
      </div>
      <div className={LINE_CLASS}>
        <p>최고가 달성 이후 가격이</p>{" "}
        <Input
          width={"w-12"}
          value={value.trailing_stop_percent}
          onClick={() => setValue({ ...value, trailing_stop_percent: "" })}
          onChange={(e) =>
            setValue({ ...value, trailing_stop_percent: e.target.value })
          }
        />
        <p>% 이상 하락하면 </p>
      </div>
      <div className={LINE_CLASS}>
        <p>해당 시점의 매도호가 최하단 기준</p>{" "}
        <SelectBox
          width={"w-20"}
          value={value.trailing_order_call_price}
          itemList={CALL_PRICE}
          event={(e) =>
            setValue({ ...value, trailing_order_call_price: e.target.value })
          }
        />
        <p>로 매도 주문을 실행한다.</p>
      </div>
    </div>
  );
};

export default TrailingStop;
