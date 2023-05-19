import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox, UpDownSelectBox } from "../common/select/SelectBox";
import { useMACDS_value_up_downType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MACDS_v_u_d: useMACDS_value_up_downType;
  setMACDS_v_u_d: Dispatch<useMACDS_value_up_downType>;
}

const MACDS_value_up_down: FC<Props> = ({ MACDS_v_u_d, setMACDS_v_u_d }) => {
  return (
    <div className="flex flex-col gap-1">
      <div>MACD Signal 기준값 이상 이하</div>
      <div className="flex gap-2">
        <TermSelectBox
          event={(e) =>
            setMACDS_v_u_d({ ...MACDS_v_u_d, term: e.target.value })
          }
          value={MACDS_v_u_d.term}
          width={70}
        />{" "}
        주기
        <Input
          onChange={(e) =>
            setMACDS_v_u_d({ ...MACDS_v_u_d, timing: e.target.value })
          }
          value={MACDS_v_u_d.timing}
          width={70}
          type="number"
        />{" "}
        봉전 기준
      </div>
      <div className="flex gap-1">
        단기
        <Input
          onChange={(e) =>
            setMACDS_v_u_d({ ...MACDS_v_u_d, short: e.target.value })
          }
          value={MACDS_v_u_d.short}
          width={60}
          type="number"
        />
        장기
        <Input
          onChange={(e) =>
            setMACDS_v_u_d({ ...MACDS_v_u_d, long: e.target.value })
          }
          value={MACDS_v_u_d.long}
          width={60}
          type="number"
        />
        시그널
        <Input
          onChange={(e) =>
            setMACDS_v_u_d({ ...MACDS_v_u_d, signal: e.target.value })
          }
          value={MACDS_v_u_d.signal}
          width={60}
          type="number"
        />
      </div>
      <div className="flex gap-1">
        MACD SIGNAL
        <Input
          onChange={(e) =>
            setMACDS_v_u_d({ ...MACDS_v_u_d, value: e.target.value })
          }
          value={MACDS_v_u_d.value}
          width={60}
          type="number"
        />
        선
        <UpDownSelectBox
          event={(e) =>
            setMACDS_v_u_d({ ...MACDS_v_u_d, value_up_down: e.target.value })
          }
          value={MACDS_v_u_d.value_up_down}
          width={60}
        />
      </div>
      <ConditionUseButton state={MACDS_v_u_d} setState={setMACDS_v_u_d} />
    </div>
  );
};

export default MACDS_value_up_down;
