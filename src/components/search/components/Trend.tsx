import { Dispatch, FC, SetStateAction, useState } from "react";
import SearchConditionCover from "../SearchConditionCover";
import { TrendType } from "../type/condition";
import SelectBox, { CHART_TERM, TREND_TYPE } from "../SelectBox";
import { Input } from "@/components/common/input";
import { SearchButton } from "../Condition";
import CheckTable from "../CheckTable";

interface Props {
  data: any[] | null;
  value: TrendType;
  setValue: Dispatch<SetStateAction<TrendType>>;
}

const Trend: FC<Props> = ({ value, setValue, data }) => {
  const [resultShow, setShow] = useState(false);
  return (
    <SearchConditionCover title="추세 : " value={value} setValue={setValue}>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-xl">
          <SelectBox
            width={80}
            value={value.chart_term}
            itemList={CHART_TERM}
            event={(e) => setValue({ ...value, chart_term: e.target.value })}
          />
          <div>차트기준</div>
          <Input
            width={50}
            value={value.MASP}
            onClick={() => setValue({ ...value, MASP: "" })}
            onChange={(e) => setValue({ ...value, MASP: e.target.value })}
          />
          <div>이평,</div>
          <Input
            width={50}
            value={value.trend_term}
            onClick={() => setValue({ ...value, trend_term: "" })}
            onChange={(e) => setValue({ ...value, trend_term: e.target.value })}
          />
          <div>번 동안</div>
          <SelectBox
            itemList={TREND_TYPE(false)}
            value={value.trend_type}
            width={80}
            event={(e) => setValue({ ...value, trend_type: e.target.value })}
          />
          <div>추세,</div>
          <div>반전</div>
          <SelectBox
            itemList={TREND_TYPE(true)}
            value={value.trend_reverse}
            width={100}
            event={(e) => setValue({ ...value, trend_reverse: e.target.value })}
          />
        </div>
        {data && data.length !== 0 && (
          <div className="flex justify-end pr-3 w-16">
            <SearchButton event={() => setShow(!resultShow)} />
          </div>
        )}{" "}
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-2 flex w-11/12 flex-col">
          {data && resultShow && <CheckTable title="추세" tableData={data} />}
        </div>
      </div>
    </SearchConditionCover>
  );
};

export default Trend;
