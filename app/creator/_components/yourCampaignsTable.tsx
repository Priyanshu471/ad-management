"use client";
import Pagination from "@/components/pagination";
import Status from "@/components/status";
import { Button } from "@/components/ui/button";
import { Campaign, campaignsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const headings = ["Name", "Status", "Earnings", "Audience Reach", "CTR"];
const earnings = [
  "₹1,000",
  "₹6,300",
  "₹8,963",
  "₹3,268",
  "₹5,000",
  "₹5,326",
  "₹7,000",
  "₹8,000",
  "₹9,000",
  "₹10,000",
];
const auidenceReach = [
  "5667",
  "46483",
  "23456",
  "12345",
  "34567",
  "45678",
  "56789",
  "67890",
  "78901",
  "89012",
];

const YourCampaignsTable = () => {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(campaignsData.length / perPage)
  );
  const [paginatedData, setPaginatedData] = useState<Campaign[]>(
    campaignsData.slice((page - 1) * perPage, page * perPage)
  );
  const [paginatedEarnings, setPaginatedEarnings] = useState<string[]>(
    earnings.slice((page - 1) * perPage, page * perPage)
  );
  const [paginatedAudienceReach, setPaginatedAudienceReach] = useState<
    string[]
  >(auidenceReach.slice((page - 1) * perPage, page * perPage));
  useEffect(() => {
    setPaginatedData(campaignsData.slice((page - 1) * perPage, page * perPage));
  }, [page]);

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Your Campaigns
        </h4>

        <div className="flex flex-col">
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

          {paginatedData.map((campaign, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === campaignsData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="hidden text-black dark:text-white sm:block">
                  {campaign?.title}
                </p>
              </div>
              <Status status={campaign?.status || "Deleted"} />
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{paginatedEarnings[key]}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white flex items-center">
                  {paginatedAudienceReach[key]}{" "}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">
                  {campaign?.ctr
                    ? campaign.ctr.toString() + "%"
                    : campaign?.duration + " days left"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default YourCampaignsTable;
