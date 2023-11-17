import { usePage, useTableList } from "@/pages/api/dash";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import AssetsTable from "./AssetsTable";
import Loading from "@/components/common/LoadingComponent";

export type PageType = {
  now: number;
  next: number;
  prev: number;
  count: number;
};

type PageProps = {
  page: PageType;
  status: "success" | "error" | "loading";
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

const Page = ({ status, page, value, setValue }: PageProps) => {
  const next = () => {
    if (page.count !== value) setValue(value + 1);
  };
  const prev = () => {
    if (value !== 1) setValue(value - 1);
  };
  return (
    <div className="flex justify-center font-bold gap-2">
      {status === "success" ? (
        <>
          <div onClick={prev} className="cursor-pointer">
            {"<"}
          </div>
          <div>
            {value} / {page.count}
          </div>
          <div onClick={next} className="cursor-pointer">
            {">"}
          </div>
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export const AssetsTableSection = () => {
  const [now, setNow] = useState(1);
  const tableList = useTableList(now);
  const page = usePage(now);
  const dataLoad = useRef(null);

  return (
    <div className="flex items-center flex-col overflow-y-scroll h-[40vh]">
      {tableList.status === "success" ? (
        tableList.data.map((value: number, index: number) => (
          <AssetsTable idx={value} key={index} />
        ))
      ) : (
        <div className="flex items-center justify-center h-full">
          <Loading />
        </div>
      )}
    </div>
  );
};
