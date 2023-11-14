import { Input } from "@/components/common/input";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

const COVER_CLASS = "flex items-center gap-2 font-semibold px-2";

interface Props {
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
}

const PriceCount: FC<Props> = ({ value, setValue }) => {
  return (
    <div className={COVER_CLASS}>
      <p>미체결 주문을 포함 보유 중인 종목의 수가</p>
      <Input
        width={"w-12"}
        value={value.price_count}
        onClick={() => setValue({ ...value, price_count: "" })}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue({ ...value, price_count: e.target.value })
        }
      />
      <p>종목인 경우, 일시적으로 매수를 제한 합니다.</p>
    </div>
  );
};

export default PriceCount;
