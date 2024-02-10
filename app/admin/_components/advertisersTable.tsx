import { cn } from "@/lib/utils";

const headings = ["Name", "Campaigns", "Email", "Member Since"];
interface AdvertisersTableProps {
  tableData: any[];
}
const AdvertisersTable = ({ tableData }: AdvertisersTableProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Advertisers
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

        {tableData.slice(0, 5).map((campaign, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === tableData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">name</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">campaigns</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">email</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 ">
              <p className="text-meta-5">member since</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdvertisersTable;
