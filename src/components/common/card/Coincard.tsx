import { useState } from "react";

import { IoHeart, IoHeartOutline } from "react-icons/io5";
import Card from "@/components/common/card";

const price_up_dwon = (price: number, prevPrice: number) => {
  if (price > prevPrice) return "text-red-700";
  return "text-blue-700";
};

const CoinCard = (props: {
  title: string;
  price: string | number;
  prevPrice: string;
}) => {
  const { title, price, prevPrice } = props;
  const [heart, setHeart] = useState(true);
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white hover:bg-gray-100`}
    >
      <div className="h-full w-full flex justify-between">
        <div className="flex items-center font-bold justify-between px-1 gap-2">
          <p className="text-navy-700 dark:text-gray-500">
            {title?.length >= 8 ? title.slice(0, 7) + "..." : title}
          </p>
          <p
            className={price_up_dwon(~~price, ~~prevPrice) + ` dark:text-whit`}
          >
            {price} 원
          </p>
        </div>
        <div
          onClick={() => setHeart(!heart)}
          className="flex h-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900"
        >
          {heart ? <IoHeartOutline /> : <IoHeart className="text-brand-500" />}
        </div>
      </div>
    </Card>
  );
};

export default CoinCard;
