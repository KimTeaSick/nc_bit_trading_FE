import React, { useCallback, useEffect } from "react";
import CardMenu from "@/components/card/CardMenu";
import Card from "@/components/card";
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

function ChoiceCondition(props: {
  tableData: any;
  setch: any;
  registerBtnEvent: any;
}) {
  const { tableData, setch, registerBtnEvent } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  let defaultData = tableData ? tableData : [];

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
    console.log("tableData in useEffect", tableData);
    setData(defaultData);
  }, [tableData]);

  return (
    <div>
      <Card extra={"w-full h-full sm:overflow-auto px-6"}>
        <header className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            조건 리스트
          </div>
          <CardMenu />
        </header>
        <div className="mt-8 overflow-x-scroll overflow-y-scroll overscroll-contain xl:overflow-x-hidden h-64">
          <table className="w-full">
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
                        row.original.used === 1 ? "bg-red-100" : ""
                      }`}
                      onClick={async () => {
                        const detail = await getConditionDetail({
                          option: row.original.Name,
                        });
                        dispatch(setConditionDetail(detail));
                        setch(1);
                      }}
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className="min-w-[150px] border-white/0 py-3 pr-4 cursor-pointer"
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
        <div className="w-1/6 flex gap-2 self-end p-2">
          <SearchButton event={() => registerBtnEvent()} title="등록" />
        </div>
      </Card>
    </div>
  );
}

export default ChoiceCondition;
// const columnHelper = createColumnHelper<RowObj>();
const columnHelper = createColumnHelper<any>();
