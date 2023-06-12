import { Dispatch, FC, SetStateAction } from "react";
import { useAccountType } from "../../type/autoTrading";
import SelectBox, { CALL_PRICE } from "../SelectBox";
import { Input } from "@/components/common/input";

const COVER_CLASS = "flex flex-col font-semibold gap-2";
const TITLE_CLASS = "font-bold text-xl";
const SELL_BUY_WAPPER = "flex flex-col gap-1 px-2";
const FLEX_GAP_CLASS = "flex gap-2";

interface Props {
  value: useAccountType;
  setValue: Dispatch<SetStateAction<useAccountType>>;
}

const LossCut: FC<Props> = ({ value, setValue }) => {
  return (
    <div className={COVER_CLASS}>
      <p className={TITLE_CLASS}>1. 로스컷 수익 청산</p>
      <div className={SELL_BUY_WAPPER}>
        <div className={FLEX_GAP_CLASS}>
          <p>잔고의 총 손실이</p>
          <Input
            width={60}
            value={value.loss_cut_under_percent}
            onClick={() => setValue({ ...value, loss_cut_under_percent: "" })}
            onChange={(e) =>
              setValue({ ...value, loss_cut_under_percent: e.target.value })
            }
          />
          <p>% 이상일 때,</p>
        </div>
        <div className={FLEX_GAP_CLASS}>
          <div className={FLEX_GAP_CLASS}>
            <p>전체 종목을</p>
            <SelectBox
              itemList={CALL_PRICE}
              width={80}
              value={value.loss_cut_under_call_price_sell_all}
              event={(e) =>
                setValue({
                  ...value,
                  loss_cut_under_call_price_sell_all: e.target.value,
                })
              }
            />
            <p>매도,</p>
          </div>
          <div className={FLEX_GAP_CLASS}>
            <Input
              width={60}
              value={value.loss_cut_under_coin_specific_percent}
              onClick={() =>
                setValue({ ...value, loss_cut_under_coin_specific_percent: "" })
              }
              onChange={(e) =>
                setValue({
                  ...value,
                  loss_cut_under_coin_specific_percent: e.target.value,
                })
              }
            />
            <p>% 이상인 종목만</p>
            <SelectBox
              itemList={CALL_PRICE}
              width={80}
              value={value.loss_cut_under_call_price_specific_coin}
              event={(e) =>
                setValue({
                  ...value,
                  loss_cut_under_call_price_specific_coin: e.target.value,
                })
              }
            />
            <p>로 매도</p>
          </div>
        </div>
      </div>
      <div className={SELL_BUY_WAPPER}>
        <div className={FLEX_GAP_CLASS}>
          <p>잔고의 총 이익이</p>
          <Input
            width={60}
            value={value.loss_cut_over_percent}
            onClick={() => setValue({ ...value, loss_cut_over_percent: "" })}
            onChange={(e) =>
              setValue({ ...value, loss_cut_over_percent: e.target.value })
            }
          />
          <p>% 이상일 때,</p>
        </div>
        <div className={FLEX_GAP_CLASS}>
          <div className={FLEX_GAP_CLASS}>
            <p>전체 종목을</p>
            <SelectBox
              itemList={CALL_PRICE}
              width={80}
              value={value.loss_cut_over_call_price_sell_all}
              event={(e) =>
                setValue({
                  ...value,
                  loss_cut_over_call_price_sell_all: e.target.value,
                })
              }
            />
            <p>매도,</p>
          </div>
          <div className={FLEX_GAP_CLASS}>
            <Input
              width={60}
              value={value.loss_cut_over_coin_specific_percent}
              onClick={() =>
                setValue({ ...value, loss_cut_over_coin_specific_percent: "" })
              }
              onChange={(e) =>
                setValue({
                  ...value,
                  loss_cut_over_coin_specific_percent: e.target.value,
                })
              }
            />
            <p>% 이상인 종목만</p>
            <SelectBox
              width={80}
              itemList={CALL_PRICE}
              value={value.loss_cut_over_call_price_specific_coin}
              event={(e) =>
                setValue({
                  ...value,
                  loss_cut_over_call_price_specific_coin: e.target.value,
                })
              }
            />
            <p>로 매도</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LossCut;
