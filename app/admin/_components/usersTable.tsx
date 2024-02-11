"use client";
import Pagination from "@/components/pagination";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

interface UsersTableProps {
  tableFor: string;
  tableData: any[];
  headings: string[];
  data: number[];
  memberSince: string[];
}
const UsersTable = ({
  tableFor,
  tableData,
  headings,
  data,
  memberSince,
}: UsersTableProps) => {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(tableData.length / perPage);
  const [paginatedData, setPaginatedData] = useState(
    tableData.slice((page - 1) * perPage, page * perPage)
  );
  useEffect(() => {
    setPaginatedData(tableData.slice((page - 1) * perPage, page * perPage));
  }, [page, tableData]);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {tableFor}
      </h4>

      <div className="flex flex-col -my-1">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          {headings.map((heading, i) => (
            <div
              className={cn(
                "p-2.5 xl:p-5",
                heading === "Name" ? "text-left " : "text-center"
              )}
              key={i}
            >
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                {heading}
              </h5>
            </div>
          ))}
        </div>

        {paginatedData.map((user, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === tableData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {user.name}
              </p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{data[key]}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{user.email}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 ">
              <p className="text-meta-5">{memberSince[key]}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 ">
              <p className="text-primary">
                <MoreHorizontal className="w-5 h-5 p-0.5 hover:bg-foreground/10 transition rounded-md cursor-pointer" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};
export default UsersTable;
