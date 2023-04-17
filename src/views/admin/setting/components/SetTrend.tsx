import Card from "@/components/card";
import Selection from "@/components/common/Selection";
import { FC, ReactNode } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { RxDot } from "react-icons/rx";

interface SetTrendProps {
  optionInsertEvent: () => void;
  optionUpdateEvent: () => void;
  useSearchOptionEvent: () => void;
  event: any;
  updateEvent: any;
  SELECT_ITEMS: any[];
  children: ReactNode;
}

const SetTrend: FC<SetTrendProps> = ({
  optionInsertEvent,
  optionUpdateEvent,
  useSearchOptionEvent,
  event,
  updateEvent,
  SELECT_ITEMS,
  children,
}) => {
  return (
    <Card extra="!rounded-[20px]">
      <div className="flex flex-row items-center ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <AiOutlineRise />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            추세 설정
          </h4>
        </div>
      </div>
      <div className="p-5 flex flex-col">
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            조건 이름
          </h4>
          <ul>
            <li className="flex items-center">
              <input
                type="text"
                value={event.name}
                placeholder="00"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) => updateEvent({ name: e.target.value })}
              />
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            가격 설정 설정
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 가격이
              <input
                type="number"
                value={event.price}
                placeholder="00"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) => updateEvent({ price: e.target.value })}
              />{" "}
              이상인 종목
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            추세 설정
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 추세 범위
              <Selection
                width={120}
                value={event.trends_idx || 1}
                itemList={SELECT_ITEMS}
                event={(e) => updateEvent({ trends_idx: e.target.value })}
              />
              평균선이
              <input
                type="number"
                placeholder="00"
                value={event.trends}
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) => updateEvent({ trends: e.target.value })}
              />{" "}
              번 상승인 종목
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            가격 설정 설정
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 거래대금 거래대금이
              <input
                type="number"
                placeholder="00"
                value={event.transaction_amount}
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) =>
                  updateEvent({ transaction_amount: e.target.value })
                }
              />{" "}
              이상인 종목
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            평균거래량
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 평균거래량이
              <input
                type="number"
                placeholder="00"
                value={event.avg_volume}
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) => updateEvent({ avg_volume: e.target.value })}
              />{" "}
              이상인 종목
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            이격도 설정
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 이격도 범위가
              <input
                type="number"
                placeholder="00"
                value={event.first_disparity}
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) =>
                  updateEvent({ first_disparity: e.target.value })
                }
              />{" "}
              이상
              <input
                type="number"
                placeholder="00"
                value={event.second_disparity}
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) =>
                  updateEvent({ second_disparity: e.target.value })
                }
              />
              이하인 종목
            </li>
          </ul>
        </div>
        <div className="text-right mt-8">
          <button
            className="linear rounded-xl bg-brand-500 py-[12px] px-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={event.idx === 0 ? optionInsertEvent : optionUpdateEvent}
          >
            저장
          </button>
        </div>
      </div>
      {children}
    </Card>
  );
};

export default SetTrend;
