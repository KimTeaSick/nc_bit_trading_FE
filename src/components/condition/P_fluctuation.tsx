import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const P_fluctuation = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>주가 등락률</div>
      <div className="flex gap-1">
        <div>차트캔들의 주기를 선택하세요</div>
        <SelectBox
          width={60}
          event={() => console.log("qwe")}
          itemList={["1m", "5m"]}
        />
      </div>
      <div className="flex items-center gap-1">
        <p>과거시점인 </p>
        <Input width={60} type="number" />
        <p> 봉 동안의 종가 중에</p>
      </div>
      <div className="flex items-center gap-1">
        <p>기준시점인</p>
        <Input width={60} type="number" />
        <p>봉 전의 종가가</p>
      </div>
      <div className="flex items-center gap-1">
        <Input width={60} type="number" />
        <p>%의 등락률을 보인 종목</p>
      </div>
    </div>
  );
};

export default P_fluctuation;
