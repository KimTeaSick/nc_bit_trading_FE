export const PURE_CONDITION_STATUS = {
  Price: {
    flag: 1,
    low_price: "0",
    high_price: "0",
  },
  TransactionAmount: {
    flag: 1,
    low_transaction_amount: "0",
    high_transaction_amount: "0",
  },
  MASP: {
    flag: 1,
    chart_term: "1h",
    first_disparity: "0",
    comparison: ">=",
    second_disparity: "0",
  },
  Disparity: {
    flag: 1,
    chart_term: "1h",
    disparity_term: "12",
    low_disparity: "0",
    high_disparity: "100",
  },
  Trend: {
    flag: 1,
    chart_term: "1h",
    MASP: "5",
    trend_term: "0",
    trend_type: "상승",
    trend_reverse: "0",
  },
  MACD: {
    flag: 1,
    chart_term: "1h",
    short_disparity: "12",
    long_disparity: "24",
    signal: "9",
    up_down: "이하",
  },
};
