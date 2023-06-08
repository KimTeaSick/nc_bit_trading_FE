import { Dispatch, SetStateAction, useState } from "react";
import { TransactionAmountType } from "../type/condition";

export const useTransactionAmount = (
  initial: TransactionAmountType | undefined
): [TransactionAmountType, Dispatch<SetStateAction<TransactionAmountType>>] => {
  const [value, setValue] = useState<TransactionAmountType>({
    flag: initial !== undefined ? initial.flag : 1,
    chart_term: initial !== undefined ? initial.chart_term : "1h",
    low_transaction_amount:
      initial !== undefined ? initial.low_transaction_amount : "1000",
    high_transaction_amount:
      initial !== undefined ? initial.high_transaction_amount : "1000000000",
  });
  return [value, setValue];
};
