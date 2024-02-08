"use client";
import { Button } from "@/components/ui/button";
import CampaignsTable from "../_components/campaignsTable";
import { useRouter } from "next/navigation";
import Link from "next/link";

const campaigns = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium mt-2">All Campaigns</h1>
          <Link href={"/advertiser/create"}>
            <Button variant={"primary"}>Create New</Button>
          </Link>
        </div>
        <CampaignsTable />
      </div>
    </>
  );
};

export default campaigns;
