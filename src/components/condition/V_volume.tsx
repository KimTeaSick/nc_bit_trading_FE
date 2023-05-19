import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { useV_volumeType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface V_volumeProps {
  volume: useV_volumeType;
  setVolume: Dispatch<useV_volumeType>;
}

const V_volume: FC<V_volumeProps> = ({ volume, setVolume }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>거래량</div>
      <div className="flex gap-1 items-center">
        <p>일</p>
        <Input
          onChange={(e) => setVolume({ ...volume, term: e.target.value })}
          value={volume.term}
          width={100}
          type="number"
        />

        <Input
          onChange={(e) =>
            setVolume({ ...volume, first_value: e.target.value })
          }
          value={volume.first_value}
          width={100}
          type="number"
        />
        <p>{`<=`} 거래량</p>
        <Input
          onChange={(e) =>
            setVolume({ ...volume, second_value: e.target.value })
          }
          value={volume.second_value}
          width={100}
          type="number"
        />
        <p>{`<=`} 이하</p>
      </div>
      <ConditionUseButton state={volume} setState={setVolume} />
    </div>
  );
};

export default V_volume;
