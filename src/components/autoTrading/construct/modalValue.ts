import {
  SearchOptionType,
  TradingOptionType,
} from "@/module/autoTrading/index.d";

export const SEARCH_OPTION = [
  "이름",
  "종목 최저가",
  "종목 최고가",
  "종목 거래 대금 기준 시간",
  "종목 거래 대금 최저가",
  "종목 거래 대금 최고가",
  "첫번째 이격도",
  " 기준 ",
  "두번째 이격도",
  "이동 평균",
  "차트 기준",
  "추세 상승 하락",
  "반전 사용",
  "이격도 텀",
  "저점 이격도",
  "고점 이격도",
  "MACD 단기",
  "MACD 장기",
  "0선 이상 이하",
];

export const TRADING_OPTION_VALUE_LIST = [
  "이름",
  "종목 수",
  "로스컷 손절 %",
  "로스컷 전량 손절 매도 호가",
  "로스컷 특정 종목 손절 매도 %",
  "로스컷 특정 종목 손절 매도 호가",
  "로스컷 익절 %",
  "로스컷 전량 익절 매도 호가",
  "로스컷 특정 종목 익절 매도 %",
  "로스컷 특정 종목 익절 매도 호가",
  "매수 주문 취소 시간",
  "매도 주문 취소 시간",
  "분할 매수 %",
  "매수 원화",
  "매수 호가",
  "손절 종목 설정 %",
  "익절 종목 설정 %",
  "익절 종목 선별 이평선",
  "익절 이평선 대비 상승 %",
  "손절 종목 선별 이평선",
  "손절 이평선 대비 상승 %",
  "매도 호가",
  "분할 매도 % ",
  "macd 단기선",
  "macd 징기선",
  "signal 선",
];

type SEARCH_CONDITION_TYPE = {
  price: string;
  transactionA: string;
  MASP: string;
  trend: string;
  disparity: string;
  MACD: string;
  [key: string]: string;
};

export const SEARCH_CONDITION = (
  value: SearchOptionType
): SEARCH_CONDITION_TYPE => {
  console.log("SEARCH_CONDITION :::: ", value);

  return {
    price: `24시간 종가가 ${value.low_price}원 이상 ${value.high_price}원 이하인 종목`,

    transactionA: `${value.TA_chart_term?.replace(
      "h",
      "시간"
    )}차트 기준, 거래대금이 ${value.low_transaction_amount}원 이상 ${
      value.high_transaction_amount
    }원 이하인 종목`,

    MASP: `${value.MASP_chart_term?.replace("h", "시간 ")}차트 기준, ${
      value.first_disparity
    } 이평선 ${value.comparison} ${value.second_disparity} 이평선`,

    trend: `${value.trend_chart_term?.replace("h", "시간 ")}차트 기준, ${
      value.MASP
    } 이평 ${value.trend_term}번 동안 ${
      value.trend_type === "up_trend" ? "상승" : "하락"
    }추세, 반전${value.trend_reverse}`,

    disparity: `${value.disparity_chart_term?.replace(
      "h",
      "시간 "
    )}차트 기준, ${value.disparity_term} 이격 이평도가 ${
      value.low_disparity
    }이상 ${value.high_disparity}이하`,

    MACD: `${value.MACD_chart_term?.replace(
      "h",
      "시간 "
    )}차트 기준, 단기 이평 ${value.short_disparity} 장기 이평 ${
      value.long_disparity
    } 시그널 ${value.signal}, 시그널 선 ${
      value.up_down === "up" ? "이상" : "이하"
    }`,
  };
};

type TRADING_CONDITION_TYPE = {
  account: {
    price_count: string;
    loss_cut_loss: string;
    loss_cut_gain: string;
    auto_cancle_buy: string;
    auto_cancle_sell: string;
    re_buy_block: string;
  };
  buy: {
    buy_call_price: string;
    buy_fix_money: string;
    buy_utility_money: string;
  };
  sell: {
    price_condition_to_sell_upper: string;
    price_condition_to_sell_down: string;
    disparity_condition_to_sell_upper: string;
    disparity_condition_to_sell_down: string;
    MACD_to_sell: string;
    price_to_sell_fn: string;
    percent_to_sell_fn: string;
  };
  [key: string]: any;
};

export const TRADING_CONDITION = (
  value: TradingOptionType
): TRADING_CONDITION_TYPE => {
  const CALL_PRICE: {
    "+5": string;
    "+4": string;
    "+3": string;
    "+2": string;
    "+1": string;
    "0": string;
    "-1": string;
    "-2": string;
    "-3": string;
    "-4": string;
    "-5": string;
    [key: string]: string;
  } = {
    "+5": "+5 호가",
    "+4": "+4 호가",
    "+3": "+3 호가",
    "+2": "+2 호가",
    "+1": "+1 호가",
    "0": "시장가",
    "-1": "-1 호가",
    "-2": "-2 호가",
    "-3": "-3 호가",
    "-4": "-4 호가",
    "-5": "-5 호가",
  };

  return {
    account: {
      price_count: `미체결 포함 종목의 수 ${value.price_count} 개 제한`,
      loss_cut_loss: `잔고의 총 손실이 ${
        value.loss_cut_under_percent
      }% 이상일 때, 전체 종목을 ${
        CALL_PRICE[value.loss_cut_under_call_price_sell_all]
      } 매도, ${value.loss_cut_under_coin_specific_percent} 이상인 종목만 ${
        CALL_PRICE[value.loss_cut_under_call_price_specific_coin]
      } 매도`,
      loss_cut_gain: `잔고의 총 이익이 ${
        value.loss_cut_over_percent
      }% 이상일 때, 전체 종목을 ${
        CALL_PRICE[value.loss_cut_over_call_price_sell_all]
      } 매도, ${value.loss_cut_over_coin_specific_percent} 이상인 종목만 ${
        CALL_PRICE[value.loss_cut_over_call_price_specific_coin]
      } 매도`,
      auto_cancle_buy: `매도 미체결 주문 시점으로 ${value.sell_cancle_time} 초 후 자동으로 취소`,
      auto_cancle_sell: `매수 미체결 주문 시점으로 ${value.buy_cancle_time} 초 후 자동으로 취소`,
      re_buy_block: `감시 중 포착 후 매수 주문이 실행한 종목은 재 매수하지 않습니다`,
    },
    buy: {
      buy_call_price: `가격 현재가 대비 ${
        CALL_PRICE[value.callmoney_to_buy_method]
      }`,
      buy_fix_money: `1 종목당 증거금 ${value.price_to_buy_method} 으로 고정`,
      buy_utility_money: `1 종목당 증거금 매매 시작전 예수금의 ${value.percent_to_buy_method}% 으로 고정`,
    },
    sell: {
      price_condition_to_sell_upper: `보유 종목의 평균 매수 단가가 기준 대비 ${value.upper_percent_to_price_condition}이상 상승 시`,
      price_condition_to_sell_down: `보유 종목의 평균 매수 단가가 기준 대비 ${value.down_percent_to_price_condition}이상 하락 시`,
      disparity_condition_to_sell_upper: `현재가가 ${value.disparity_for_upper_case}이평선 대비 ${value.upper_percent_to_disparity_condition} 이상 상승 시`,
      disparity_condition_to_sell_down: `현재가가 ${value.disparity_for_down_case}이평선 대비 ${value.down_percent_to_disparity_condition} 이상 하락 시`,
      MACD_to_sell: `${value.short_MACD_value}단기 ${value.long_MACD_value}장기 ${value.MACD_signal_value}시그널 MACD가 MACD 시그널을 하향 돌파할 경우`,
      price_to_sell_fn: `현재가 대비 ${
        CALL_PRICE[value.call_money_to_sell_method]
      }로 주문`,
      percent_to_sell_fn: `보유 종목의 ${value.percent_to_split_sell}% 씩 분할 매도`,
    },
  };
};
