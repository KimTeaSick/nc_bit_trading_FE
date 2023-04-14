import CardMenu from "@/components/card/CardMenu";
import Checkbox from "@/components/checkbox";
import Card from "@/components/card";
import { MdCancel, MdCheckCircle, MdOutlineError } from "react-icons/md";
import Widget from "@/components/widget/Widget";
import { MdBarChart, MdDashboard } from "react-icons/md";

import OptionWidget from "@/views/admin/default/components/OptionWidget";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { DiLaravel } from "react-icons/di";
import { RiAppStoreLine } from "react-icons/ri";

const OptionSearch = () => {
  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white pt-2">
          💸 자동매매 조건
        </div>
      </header>

      <div className="mt-5">
        {/* OptionWidget content */}

        <div className="h-full w-full">
          <div className="mb-3">
            <OptionWidget
              title={"매수조건"}
              subtitle={"예수금의"}
              percent={"3"}
              explanation={""}
            />
          </div>
          <div className="mb-8">
            <OptionWidget
              title={"매도조건"}
              subtitle={"매도 퍼센트"}
              percent={"2"}
              explanation={"당일매도 기능"}
            />
          </div>

          {/* button content */}

          <button className="linear mb-5 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            자동매매 시작
          </button>
        </div>
      </div>
    </Card>
  );
};

export default OptionSearch;
