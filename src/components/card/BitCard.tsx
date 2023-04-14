import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { MdAccountBalance } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { SiBitcoinsv } from "react-icons/si";

import { useState } from "react";
import Card from "@/components/card";

const BitCard = (props: {
  account: string;
  image: string;
  coinList: string[];
  balance: any;
}) => {
  const { account, image, coinList, balance } = props;
  const [heart, setHeart] = useState(true);
  console.log(balance);
  return (
    <Card extra={`flex flex-row w-full h-full !p-4 3xl:p-![18px] bg-white`}>
      <div className="h-full w-full flex flex-row">
        <div className="relative w-[320px]">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt="ㅁㄴㅇ"
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
                  {" 원"}
                  <input
                    type="number"
                    id=""
                    placeholder="00"
                    className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                  ></input>
                  <button className="linear w-auto rounded-xl bg-brand-500 py-[12px] px-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
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
