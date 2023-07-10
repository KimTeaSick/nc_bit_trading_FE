import React, { useEffect } from "react";
import CardMenu from "@/components/common/card/CardMenu";
import Card from "@/components/common/card";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { krwChage } from "@/lib/krwChage";
import { CHANGE_KR_NAME } from "@/variables/coinNameChange";

type RowObj = {
  name: string;
  previousclosingprice: number;
  marketprice: number;
  closingprice: number;
  catch_price: number;
  highprice: number;
  lowprice: number;

  tradingvolume24: number;
  floatingprice: number;
  ratechange: number;
};

function CheckTable(props: { tableData: any }) {
  const { tableData = [] } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableData;

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
          {CHANGE_KR_NAME(info.getValue())}
        </p>
      ),
    }),
    columnHelper.accessor("catch_price", {
      id: "catch_price",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          포착가격
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {krwChage(info.getValue())}
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

  useEffect(() => {
    setData(defaultData);
  }, [tableData]);

  return (
    <Card extra={"w-full h-[50vh] px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          📚 실시간 종목
        </div>
        <CardMenu />
      </header>

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
      </table>

      <div className="max-h-[40vh] overflow-y-scroll">
        <table className="w-full">
          <tbody className="relative">
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="h-10">
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className="min-w-[150px] border-white/0 py-3 pr-4"
                      >
                        {cell.id.substring(cell.id.length - 5) === "price"
                          ? flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )
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
const columnHelper = createColumnHelper<RowObj>();
