import { Dispatch, FC, SetStateAction, useState } from "react";
import SearchConditionCover from "../SearchConditionCover";
import { MACDType } from "../type/condition";
import SelectBox, { CHART_TERM, UP_DOWN } from "../SelectBox";
import { Input } from "@/components/common/input";
import CheckTable from "../CheckTable";
import { SearchButton } from "../Condition";

interface Props {
  value: MACDType;
  setValue: Dispatch<SetStateAction<MACDType>>;
  data: any[] | null;
}

const MACD: FC<Props> = ({ value, data, setValue }) => {
  const [resultShow, setShow] = useState(false);

  return (
    <SearchConditionCover title="MACD :" value={value} setValue={setValue}>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-xl">
          <SelectBox
            width={80}
            value={value.chart_term}
            itemList={CHART_TERM}
            event={(e) => setValue({ ...value, chart_term: e.target.value })}
          />
          <div>차트기준</div>
          <div>단기 이평</div>
          <Input
            width={50}
            value={value.short_disparity}
            onClick={() => setValue({ ...value, short_disparity: "" })}
            onChange={(e) =>
              setValue({ ...value, short_disparity: e.target.value })
            }
          />
          <div>장기 이평</div>
          <Input
            width={50}
            value={value.long_disparity}
            onClick={() => setValue({ ...value, long_disparity: "" })}
            onChange={(e) =>
              setValue({ ...value, long_disparity: e.target.value })
            }
          />
          <div>signal</div>
          <Input
            width={50}
            value={value.signal}
            onClick={() => setValue({ ...value, signal: "" })}
            onChange={(e) => setValue({ ...value, signal: e.target.value })}
          />
          <div>MACD,</div>
          <div>0선</div>
          <SelectBox
            width={80}
            value={value.up_down}
            itemList={UP_DOWN}
            event={(e) => setValue({ ...value, up_down: e.target.value })}
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
          {resultShow && <CheckTable title="MACD" tableData={data} />}
        </div>
      </div>
    </SearchConditionCover>
  );
};

export default MACD;
