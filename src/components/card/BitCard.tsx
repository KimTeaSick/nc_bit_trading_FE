import { MdAccountBalance } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { SiBitcoinsv } from "react-icons/si";

import { useState } from "react";
import Card from "@/components/card";
import { sell } from "@/pages/api/walletAPIs";

const BitCard = (props: {
  account: string;
  image: string;
  coinList: string[];
  balance: any;
}) => {
  const { account, image, coinList, balance } = props;
  const [unit, setUnit] = useState<string>("0");

  const sellButtonEvent = (coin: string, unit: string) => {
    if (unit === "") {
      alert("갯수를 입력해주세요");
      return;
    }
    const body = {
      coin: coin.slice(6, coin.length),
      unit: parseFloat(unit),
    };
    sell(body);
  };

  return (
    <Card extra={`flex flex-row w-full h-full !p-4 3xl:p-![18px] bg-white`}>
      <div className="h-full w-full flex flex-row">
        <div className="relative w-[320px]">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt="img loading..."
          />
        </div>

        <div className="flex  w-full items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <ul className="mb-2 ml-3 w-full">
            <li className="my-1 flex text-lg font-bold text-navy-700 dark:text-white">
              <div className="flex items-center leading-10">
                <span className="flex items-center w-[200px]">
                  <MdAccountBalance className="mr-2" />
                  계좌 보유 금액
                </span>
                <span className="text-brand-500 dark:text-white px-2">
                  {Number(account).toFixed(0)}
                </span>
                {"원"}
              </div>
            </li>
            <li className="my-1 flex text-lg font-bold text-navy-700 dark:text-white">
              <div className="flex items-center leading-10">
                <span className="flex items-center w-[200px]">
                  <TbMoneybag className="mr-2" />
                  예수금
                </span>
                <span className="text-brand-500 dark:text-white px-2">
                  {Number(balance).toFixed(0)}
                </span>
                {" 원"}
              </div>
            </li>
            {coinList.map((coin, index) => (
              <li
                className="my-1 flex text-lg font-bold text-navy-700 dark:text-white"
                key={index}
              >
                <div className="flex items-center leading-10">
                  <span className="flex items-center w-[200px]">
                    <SiBitcoinsv className="mr-2" /> {coin[0]}
                  </span>
                  <span className="text-brand-500 dark:text-white px-2">
                    {Number(coin[1]).toFixed(2)}
                  </span>
                  {" 개"}
                  <input
                    type="number"
                    placeholder="00"
                    onChange={(e) => setUnit(e.target.value)}
                    className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                  />
                  <button
                    onClick={() => sellButtonEvent(coin[0], unit)}
                    className="linear w-auto rounded-xl bg-brand-500 py-[12px] px-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  >
                    판매
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-row-reverse md:mt-2 lg:mt-0"></div>
        </div>
      </div>
    </Card>
  );
};

export default BitCard;
