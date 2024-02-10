"use client";
import { Button } from "@/components/ui/button";
import CampaignsTable from "../_components/campaignsTable";

import Link from "next/link";
import useOpen from "@/hooks/useOpen";
import useActive from "@/hooks/useActive";

import { campaignsData } from "@/lib/data";

const Campaigns = () => {
  const { setOpen } = useOpen();
  const { setActive } = useActive();

  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium mt-2">All Campaigns</h1>
          <Link href={"/advertiser/create"}>
            <Button
              variant={"primary"}
              onClick={() => {
                setOpen(true);
                setActive(2);
              }}
            >
              Create New
            </Button>
          </Link>
        </div>
        <CampaignsTable
          campaignsData={campaignsData}
          headings={["Name", "Status", "Budget", "Clicks", "Ctr", "Edit"]}
          tableTitle={"All Campaigns"}
        />
      </div>
    </>
  );
};

export default Campaigns;
