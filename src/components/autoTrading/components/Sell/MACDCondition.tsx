import { Dispatch, FC, SetStateAction } from "react";
import { UseSellConditionType } from "../../type/autoTrading";
import { Input } from "@/components/common/input";

interface Props {
  value: UseSellConditionType;
  setValue: Dispatch<SetStateAction<UseSellConditionType>>;
}

const MACDCondition: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex flex-col gap-2 font-semibold pl-2">
      <div className="flex gap-1">
        <Input
          width={60}
          value={value.shot_MACD_value}
          onClick={() => setValue({ ...value, shot_MACD_value: "" })}
          onChange={(e) =>
            setValue({ ...value, shot_MACD_value: e.target.value })
          }
        />
        <p>단기</p>
        <Input
          width={60}
          value={value.long_MACD_value}
          onClick={() => setValue({ ...value, long_MACD_value: "" })}
          onChange={(e) =>
            setValue({ ...value, long_MACD_value: e.target.value })
          }
        />
        <p>장기</p>
        <Input
          width={60}
          value={value.MACD_signal_value}
          onClick={() => setValue({ ...value, MACD_signal_value: "" })}
          onChange={(e) =>
            setValue({ ...value, MACD_signal_value: e.target.value })
          }
        />
        <p>시그널</p>
      </div>
      <p>MACD가 MACD Signal을 하향 돌파할 경우</p>
    </div>
  );
};

export default MACDCondition;
