import { FC, Dispatch } from "react";
import { Input } from "../common/input";
import { useV_transaction_amountType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  transaction_amount: useV_transaction_amountType;
  setTransaction_amount: Dispatch<useV_transaction_amountType>;
}

const V_transaction_amount: FC<Props> = ({
  transaction_amount,
  setTransaction_amount,
}) => {
  // const [transaction_amount, setTransaction_amount] = useV_transaction_amount();

  return (
    <div className="flex flex-col gap-2">
      <div>거래 대금</div>
      <div className="flex gap-1 items-center">
        <p>거래 대금이</p>
        <Input
          onChange={(e) =>
            setTransaction_amount({
              ...transaction_amount,
              first_value: e.target.value,
            })
          }
          value={transaction_amount.first_value}
          width={100}
          type="number"
        />
        <p>이상</p>
        <Input
          onChange={(e) =>
            setTransaction_amount({
              ...transaction_amount,
              second_value: e.target.value,
            })
          }
          value={transaction_amount.second_value}
          width={100}
          type="number"
        />
        <p>이하</p>
      </div>
      <ConditionUseButton
        state={transaction_amount}
        setState={setTransaction_amount}
      />
    </div>
  );
};

export default V_transaction_amount;
