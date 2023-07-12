import { Dispatch, FC, SetStateAction, useState, useCallback } from "react";
import SearchConditionCover from "../SearchConditionCover";
import { Input } from "@/components/common/input";
import CheckTable from "../CheckTable";
import { PriceConditionType } from "../type/condition";
import { SearchButton } from "../Condition";

interface Props {
  value: PriceConditionType;
  setValue: Dispatch<SetStateAction<PriceConditionType>>;
  data: any[] | null;
}

const Price: FC<Props> = ({ value, setValue, data }) => {
  const [resultShow, setShow] = useState(false);

  return (
    <SearchConditionCover title="가격 : " value={value} setValue={setValue}>
      <div className="flex justify-between  flex-col md:flex-row ">
        <div className="flex items-center gap-2 text-xl flex-wrap md:flex-nowrap">
          <div>24시간 종가가</div>
          <Input
            width={"w-1/5"}
            value={value.low_price}
            onClick={() => setValue({ ...value, low_price: "" })}
            onChange={(e) => setValue({ ...value, low_price: e.target.value })}
          />
          <div> 원 이상</div>
          <Input
            width={"w-1/5"}
            value={value.high_price}
            onClick={() => setValue({ ...value, high_price: "" })}
            onChange={(e) => setValue({ ...value, high_price: e.target.value })}
          />
          <div> 원 이하인 종목</div>
        </div>
        {data && data.length !== 0 && (
          <div className="flex justify-end pr-3 w-full md:w-16">
            <SearchButton event={() => setShow(!resultShow)} />
          </div>
        )}{" "}
      </div>

      <div className="flex w-full justify-center">
        <div className="mt-2 flex w-11/12 flex-col">
          {resultShow && <CheckTable title="가격" tableData={data} />}
        </div>
      </div>
    </SearchConditionCover>
  );
};

export default Price;
