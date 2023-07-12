import React, { useEffect } from "react";
import Card from "@/components/common/card";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { SearchButton } from "./Condition";
import { getConditionDetail } from "@/pages/api/searchAPIs";
import { useDispatch } from "react-redux";
import { setConditionDetail } from "@/module/search";
import { flagDistinguish } from "./lib/flagDistinguish";
import Link from "next/link";

function ChoiceCondition(props: {
  tableData: any;
  setStage: any;
  registerBtnEvent: any;
}) {
  const { tableData, setStage, registerBtnEvent } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [defaultData, setDefaultData] = React.useState<SortingState>([]);
  const [data, setData] = React.useState(() => [...defaultData]);
  const flag = flagDistinguish(tableData);
  useEffect(() => {
    setDefaultData(tableData ? tableData : []);
    setData(defaultData);
  }, [defaultData, tableData]);

  const dispatch = useDispatch();

  const columns = [
    columnHelper.accessor("Name", {
      id: "Name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          조건 이름
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("Create_date", {
      id: "Create_date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          생성일
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("Update_date", {
      id: "Update_date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          수정일
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue() === null ? "-" : info.getValue()}
        </p>
      ),
    }),
  ];

  // eslint-disable-next-line

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div className="h-[80vh]">
      <Card extra={"w-full h-full sm:overflow-auto px-6"}>
        <header className="relative flex items-center justify-between pt-4 ">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            조건 리스트
          </div>
        </header>
        <div className="mt-8 overflow-x-scroll overflow-y-scroll overscroll-contain scrollbar-hide xl:overflow-x-hidden">
          <table className="w-full h-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="!border-px !border-gray-400"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                      >
                        <div className="items-center justify-between text-xs text-gray-200">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: "",
                            desc: "",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, tableData?.legnth)
                .map((row) => {
                  return (
                    <tr
                      key={row.id}
                      className={`${
                        row.original.used === 1
                          ? "bg-red-100 dark:bg-navy-200"
                          : ""
                      }`}
                      onClick={async () => {
                        const detail = await getConditionDetail({
                          option: row.original.Name,
                        });
                        dispatch(setConditionDetail(detail));
                        setStage(1);
                      }}
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className="min-w-[150px] border-white/0 py-3 pr-4 cursor-pointer px-2"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="w-1/6 flex gap-2 self-end p-2 absolute bottom-1">
          <SearchButton event={() => registerBtnEvent()} title="등록" />
          {flag && (
            <Link className="w-full" href={"/admin/autotradingcondition"}>
              <SearchButton
                event={() => console.log("asd")}
                title="매매 시작"
              />
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
}

export default ChoiceCondition;
// const columnHelper = createColumnHelper<RowObj>();
const columnHelper = createColumnHelper<any>();
