import { Input } from "@/components/common/input";
import SearchConditionCover from "../SearchConditionCover";
import SelectBox, { CHART_TERM, TA_TERM } from "../SelectBox";
import { SearchButton } from "../Condition";
import CheckTable from "../CheckTable";
import { TransactionAmountType } from "../type/condition";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
  value: TransactionAmountType;
  setValue: Dispatch<SetStateAction<TransactionAmountType>>;
  data: any[] | null;
}

const TransactionAmount: FC<Props> = ({ value, setValue, data }) => {
  const [resultShow, setShow] = useState(false);

  return (
    <SearchConditionCover title="가격대금 : " value={value} setValue={setValue}>
      <div className="flex justify-between flex-col md:flex-row ">
        <div className="flex items-center gap-2 text-xl flex-wrap md:flex-nowrap">
          <SelectBox
            width={"w-22"}
            itemList={CHART_TERM}
            value={value.chart_term}
            event={(e) => setValue({ ...value, chart_term: e.target.value })}
          />
          <div>차트기준, </div>
          <div>거래 대금이</div>
          <Input
            width={"w-1/6"}
            value={value.low_transaction_amount}
            onClick={() => setValue({ ...value, low_transaction_amount: "" })}
            onChange={(e) =>
              setValue({ ...value, low_transaction_amount: e.target.value })
            }
          />
          <div> 원 이상</div>
          <Input
            width={"w-1/5"}
            value={value.high_transaction_amount}
            onClick={() => setValue({ ...value, high_transaction_amount: "" })}
            onChange={(e) =>
              setValue({ ...value, high_transaction_amount: e.target.value })
            }
          />
          <div> 원 이하인 종목</div>
        </div>
        {data && data.length !== 0 && (
          <div className="flex justify-end w-full md:w-16 pr-3 mt-2 md:mt-0">
            <SearchButton event={() => setShow(!resultShow)} />
          </div>
        )}
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-2 flex w-11/12 flex-col">
          {data && resultShow && (
            <CheckTable title="거래 대금" tableData={data} />
          )}
        </div>
      </div>
    </SearchConditionCover>
  );
};

export default TransactionAmount;
