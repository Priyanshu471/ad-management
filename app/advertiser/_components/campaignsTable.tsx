"use client";
import Status from "@/components/status";
import useCampaign from "@/hooks/useCampaign";
import { Campaign } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";

interface CampaignsTableProps {
  campaignsData: Campaign[];
  headings: string[];
  tableTitle: string;
}
const CampaignsTable = ({
  campaignsData,
  headings,
  tableTitle,
}: CampaignsTableProps) => {
  const { openModal, closeModal, editCampaign } = useCampaign();
  if (tableTitle.includes("Recent")) {
    campaignsData.forEach((c, i) => {
      c.budget = c.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
  }
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {tableTitle}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
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

        {campaignsData.map((campaign, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === campaignsData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {campaign.title}
              </p>
            </div>
            <Status status={campaign.status} />
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">₹{campaign.budget}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
                {campaign.click ? campaign.click : campaign.objective}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">
                {campaign.ctr
                  ? campaign.ctr.toString() + "%"
                  : campaign.duration + " days left"}
              </p>
            </div>
            <div
              className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 "
              role="button"
              onClick={() => {
                openModal();
                editCampaign({
                  title: campaign.title || "",
                  description: campaign.description || "",
                  duration: campaign.duration?.includes("days")
                    ? campaign.duration
                    : campaign.duration + " days left" || "",
                  budget: campaign.budget || "",
                  status: campaign.status || "",
                });
              }}
            >
              <MoreHorizontal className="text-primary p-0.5 hover:bg-foreground/10 transition rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsTable;
