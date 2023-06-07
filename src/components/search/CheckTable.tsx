import React, { useEffect } from "react";
import Card from "@/components/card";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { coinNameChange } from "@/variables/coinNameChange";
import { conditionNameChange } from "@/variables/conditionNameChange";

function CheckTable(props: {
  tableData: any;
  title?: string;
  optionList?: string[];
}) {
  const { tableData, title, optionList } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  // const [defaultData, setDefaultData] = React.useState<SortingState>([]);

  let defaultData =
    tableData !== undefined
      ? tableData?.map((coin: any, index: number) => {
          const key = Object.keys(coin);
          const value: any = Object.values(coin);
          return {
            closingprice: value[0].closing_price,
            floatingprice: value[0].fluctate_24H,
            highprice: value[0].max_price,
            lowprice: value[0].min_price,
            marketprice: value[0].opening_price,
            name: key,
            previousclosingprice: value[0].prev_closing_price,
            ratechange: value[0].fluctate_rate_24H,
            tradingvolume24: value[0].acc_trade_value_24H,
          };
        })
      : [];

  useEffect(() => {
    setData(defaultData);
  }, [tableData]);

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          종목명
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("previousclosingprice", {
      id: "previousclosingprice",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          전일종가
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("marketprice", {
      id: "marketprice",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">시가</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("closingprice", {
      id: "closingprice",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">종가</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("highprice", {
      id: "highprice",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">고가</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("lowprice", {
      id: "lowprice",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">저가</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("tradingvolume24", {
      id: "tradingvolume24",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          24시간 거래량
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("floatingprice", {
      id: "floatingprice",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          변동가
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("ratechange", {
      id: "ratechange",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          변동율
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
  ];

  // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
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

  // useEffect(() => {
  //   console.log("tableData in useEffect", tableData);
  // }, [tableData]);
  console.log("optionList :::::::::::::: ", optionList);

  return (
    // {/* <div className="w-5/6 bg-navy-200 rounded-md p-1"> */}
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          {title} 조건 검색 결과
        </div>
        <div className="w-20 text-2xl font-bold">
          {`${tableData.length}`} 개
        </div>
        {/* <CardMenu /> */}
      </header>
      <div className="font-bold flex gap-2">
        {conditionNameChange(optionList)?.map(
          (value: string, index: number) => (
            <div key={index}>
              {index + 1}. {value}
            </div>
          )
        )}
      </div>
      <div className="mt-8 overflow-x-scroll overflow-y-scroll overscroll-contain xl:overflow-x-hidden h-64">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-2 text-start"
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
              .rows.slice(0, tableData?.length)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[70px] border-white/0 py-3  pr-4 text-sm font-bold"
                        >
                          {cell.id.slice(-4) === "name"
                            ? coinNameChange(row.original.name[0])
                            : flexRender(
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
    </Card>
  );
}

export default CheckTable;
// const columnHelper = createColumnHelper<RowObj>();
const columnHelper = createColumnHelper<any>();
