import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox } from "../common/select/SelectBox";
import { useV_avg_volumeType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  V_a_v: useV_avg_volumeType;
  setV_a_v: Dispatch<useV_avg_volumeType>;
}

const V_avg_volume: FC<Props> = ({ V_a_v, setV_a_v }) => {
  return (
    <div className=" flex flex-col gap-2">
      <div>평균 거래량</div>
      <div className="flex gap-2">
        <p>차트의 주기를 선택하세요</p>
        <TermSelectBox
          event={(e) => setV_a_v({ ...V_a_v, term: e.target.value })}
          value={V_a_v.term}
          width={70}
        />
      </div>
      <div className="flex gap-2">
        <p className="flex gap-2">
          기준시점인
          <Input
            onChange={(e) => setV_a_v({ ...V_a_v, timing: e.target.value })}
            value={V_a_v.timing}
            width={70}
          />
          봉을 기준으로
        </p>
      </div>
      <div className="flex gap-2">
        <p className="flex gap-2">
          최근
          <Input
            onChange={(e) => setV_a_v({ ...V_a_v, recent: e.target.value })}
            value={V_a_v.recent}
            width={70}
          />
          봉의 평균 거래량이
          <Input
            onChange={(e) => setV_a_v({ ...V_a_v, first: e.target.value })}
            value={V_a_v.first}
            width={70}
          />
          주 이상
          <Input
            onChange={(e) => setV_a_v({ ...V_a_v, second: e.target.value })}
            value={V_a_v.second}
            width={70}
          />
          주 이하
        </p>
      </div>
      <ConditionUseButton state={V_a_v} setState={setV_a_v} />
    </div>
  );
};

export default V_avg_volume;
