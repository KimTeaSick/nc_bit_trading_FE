import { MdAccountBalance } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { SiBitcoinsv } from "react-icons/si";

import { useState } from "react";
import Card from "@/components/card";
import { sell } from "@/pages/api/walletAPIs";
import Image from "next/image";
import { fixed } from "../autoTrading/lib/tool";

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
        <div className="flex w-full items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2 ml-3 w-full">
            <div className="gap-6 my-5 lg:!flex xl:!flex">
              <div className="my-1 flex text-lg font-bold text-navy-700 dark:text-white">
                <div className="flex items-center leading-10">
                  <span className="flex items-center w-[200px]">
                    <MdAccountBalance className="mr-2" />
                    계좌 보유 금액
                  </span>
                  <span className="text-brand-500 dark:text-white px-2 w-[100px]">
                    {fixed(account, 0)}
                  </span>
                  {"원"}
                </div>
              </div>
              <div className="my-1 flex text-lg font-bold text-navy-700 dark:text-white">
                <div className="flex items-center leading-10">
                  <span className="flex items-center w-[200px]">
                    <TbMoneybag className="mr-2" />
                    예수금
                  </span>
                  <span className="text-brand-500 dark:text-white px-2 w-[100px]">
                    {fixed(balance, 0)}
                  </span>
                  {" 원"}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 gap-x-6 ">
              {coinList.map((coin, index) => (
                <div
                  className="my-1 items-center flex text-lg flex-col font-bold text-navy-700 dark:text-wdivte md:flex-row"
                  key={index}
                >
                  <div className="flex items-center">
                    <SiBitcoinsv className="mr-2" /> {coin[0]}
                    <span className="text-brand-500 dark:text-white px-2 ">
                      {fixed(coin[1], 4)} 개
                    </span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      width={"70px"}
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
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row-reverse md:mt-2 lg:mt-0"></div>
        </div>
      </div>
    </Card>
  );
};

export default BitCard;
