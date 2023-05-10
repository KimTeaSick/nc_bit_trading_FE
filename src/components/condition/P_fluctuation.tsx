import { Input } from "../common/input";
import { TermSelectBox } from "../common/select/SelectBox";
import { CANDLE_TIME_OPTION } from "../common/select/option";
import { useP_fluctuation } from "./useCondition";

const P_fluctuation = () => {
  const [P_flu, setP_flu] = useP_fluctuation();
  return (
    <div className="flex flex-col gap-2">
      <div>주가 등락률</div>
      <div className="flex gap-1">
        <div>차트캔들의 주기를 선택하세요</div>
        <TermSelectBox
          width={60}
          event={(e) => setP_flu({ ...P_flu, term: e.target.value })}
          value={P_flu.term}
          itemList={CANDLE_TIME_OPTION}
        />
      </div>
      <div className="flex items-center gap-1">
        <p>과거시점인 </p>
        <Input
          width={60}
          type="number"
          onChange={(e) => setP_flu({ ...P_flu, prev: e.target.value })}
        />
        <p> 봉 동안의 종가 중에</p>
      </div>
      <div className="flex items-center gap-1">
        <p>기준시점인</p>
        <Input
          width={60}
          type="number"
          onChange={(e) => setP_flu({ ...P_flu, now: e.target.value })}
        />
        <p>봉 전의 종가가</p>
      </div>
      <div className="flex items-center gap-1">
        <Input
          width={60}
          type="number"
          onChange={(e) => setP_flu({ ...P_flu, precent: e.target.value })}
        />
        <p>%의 등락률을 보인 종목</p>
      </div>
    </div>
  );
};

export default P_fluctuation;
