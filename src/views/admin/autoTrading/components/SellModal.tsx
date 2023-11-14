import { sellModalOpen, setSellCoin } from "@/module/autoTrading";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./Input";
import { CountButton } from "./CountButton";
import { SellModalButton } from "./Button";
import { sellLimitOrder } from "@/pages/api/autotrading";

interface Props {
  coin: string;
  unit: string;
}
const ModalWrapper =
  "w-full h-full bg-[#000000] fixed z-20 top-0 left-0 bg-opacity-80";
const ModalBody =
  "w-1/2 z-30 fixed h-[50vh] bg-white p-4 top-1/4 rounded-md left-1/4 flex flex-col gap-3";

const SellModal = ({ coin, unit }: Props) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const [sell, setSell] = useState({
    coin: coin,
    sellType: 1,
    sellPrice: "",
    coinUnit: "",
    cancleTime: "",
  });
  const divUnit = (unit: number, percent: number): string => {
    return (unit * percent).toFixed(4);
  };

  return (
    <div
      className={ModalWrapper}
      ref={modalRef}
      onClick={(e) => {
        if (e.target == modalRef.current) dispatch(sellModalOpen(false));
      }}
    >
      <div className={ModalBody}>
        {coin}
        <Input
          label="주문가격 : "
          value={sell.sellPrice}
          setValue={(value) => setSell({ ...sell, sellPrice: value })}
        />
        <Input
          label="주문개수 : "
          value={sell.coinUnit}
          setValue={(value) => setSell({ ...sell, coinUnit: value })}
        />
        <CountButton
          unit={unit}
          event={divUnit}
          setValue={(value) => setSell({ ...sell, coinUnit: value })}
        />
        <div className="flex self-end">보유 개수 : {unit}</div>
        <Input
          label="취소시간 : "
          value={sell.cancleTime}
          setValue={(value) => setSell({ ...sell, cancleTime: value })}
        />
        <SellModalButton
          title="Sell"
          event={() => {
            sellLimitOrder(sell);
            dispatch(sellModalOpen(false));
          }}
        />
      </div>
    </div>
  );
};

export default SellModal;
