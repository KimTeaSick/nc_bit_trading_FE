export const PURE_CONDITION_STATUS = {
  Price: {
    flag: 1,
    low_price: "0",
    high_price: "100",
  },
  TransactionAmount: {
    flag: 1,
    chart_term: "1h",
    low_transaction_amount: "0",
    high_transaction_amount: "100000",
  },
  MASP: {
    flag: 1,
    chart_term: "1h",
    first_disparity: "1",
    comparison: ">=",
    second_disparity: "2",
  },
  Trend: {
    flag: 1,
    chart_term: "1h",
    MASP: "5",
    trend_term: "3",
    trend_type: "up_trend",
    trend_reverse: "0",
  },
  Disparity: {
    flag: 1,
    chart_term: "1h",
    disparity_term: "12",
    low_disparity: "0",
    high_disparity: "100",
  },
  MACD: {
    flag: 1,
    chart_term: "1h",
    short_disparity: "12",
    long_disparity: "24",
    signal: "9",
    up_down: "up",
  },
};
