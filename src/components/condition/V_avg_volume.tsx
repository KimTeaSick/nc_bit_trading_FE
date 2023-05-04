import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const V_avg_volume = () => {
  return (
    <div className=" flex flex-col gap-2">
      <div>평균 거래량</div>
      <div className="flex gap-2">
        <p>차트의 주기를 선택하세요</p>
        <SelectBox width={70} itemList={["1m", "15m"]} />
      </div>
      <div className="flex gap-2">
        <p className="flex gap-2">
          기준시점인
          <SelectBox width={70} itemList={["1m", "15m"]} />
          봉을 기준으로
        </p>
      </div>
      <div className="flex gap-2">
        <p className="flex gap-2">
          최근
          <Input width={70} />
          봉의 평균 거래량이
          <Input width={70} />
          주 이상
          <Input width={70} />주 이하
        </p>
      </div>
    </div>
  );
};

export default V_avg_volume;
