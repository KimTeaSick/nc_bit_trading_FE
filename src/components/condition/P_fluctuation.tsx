import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import { TermSelectBox } from "../common/select/SelectBox";
import { useP_fluctuationType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  P_flu: useP_fluctuationType;
  setP_flu: Dispatch<useP_fluctuationType>;
}

const P_fluctuation: FC<Props> = ({ P_flu, setP_flu }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>주가 등락률</div>
      <div className="flex gap-1">
        <div>차트캔들의 주기를 선택하세요</div>
        <TermSelectBox
          width={60}
          event={(e) => setP_flu({ ...P_flu, term: e.target.value })}
          value={P_flu.term}
        />
      </div>
      <div className="flex items-center gap-1">
        <p>과거시점인 </p>
        <Input
          value={P_flu.prev}
          width={60}
          type="number"
          onChange={(e) => setP_flu({ ...P_flu, prev: e.target.value })}
        />
        <p> 봉 동안의 종가 중에</p>
      </div>
      <div className="flex items-center gap-1">
        <p>기준시점인</p>
        <Input
          value={P_flu.now}
          width={60}
          type="number"
          onChange={(e) => setP_flu({ ...P_flu, now: e.target.value })}
        />
        <p>봉 전의 종가가</p>
      </div>
      <div className="flex items-center gap-1">
        <Input
          value={P_flu.percent}
          width={60}
          type="number"
          onChange={(e) => setP_flu({ ...P_flu, percent: e.target.value })}
        />
        <p>%의 등락률을 보인 종목</p>
      </div>
      <ConditionUseButton state={P_flu} setState={setP_flu} />
    </div>
  );
};

export default P_fluctuation;
