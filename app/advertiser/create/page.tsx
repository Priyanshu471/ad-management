"use client";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreateNew from "../_components/createNew";
import useOpen from "@/hooks/useOpen";
import CampaignsTable from "../_components/campaignsTable";
import useCampaign from "@/hooks/useCampaign";

const Create = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { campaignId, setCampaignId } = useCampaign();
  const handleFetch = async () => {
    const res = await fetch("/api/campaign");
    const data = await res.json();
    setCampaigns(data.campaigns);
    console.log("CampaignsId: ");
    console.log("Recent campaigns: ", data.campaigns);
  };
  const { open, setOpen } = useOpen();
  const { isOpen } = useCampaign();
  useEffect(() => {
    handleFetch();
  }, [open, isOpen]);
  return (
    <div className="grid place-items-center h-full">
      {!open ? (
        <div className="flex flex-col gap-y-4 w-full my-2 h-full">
          <div className="flex flex-col justify-center items-center gap-y-4 text-xl">
            <p>Start new campaign</p>
            <Button
              variant={"primary"}
              className="flex items-center gap-x-2 w-36 text-lg"
              onClick={() => setOpen(true)}
            >
              <PlusCircle className="w-5 h-5" />
              Create
            </Button>
          </div>
          {campaigns.length > 0 && (
            <>
              <div className="border-b border-primary2 w-full" />
              <div className="flex flex-col justify-center w-full px-4">
                <CampaignsTable
                  campaignsData={campaigns}
                  headings={[
                    "Name",
                    "Status",
                    "Budget",
                    "Objective",
                    "Duration",
                    "Edit",
                  ]}
                  tableTitle={"Recent Campaigns"}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <CreateNew />
      )}
    </div>
  );
};

export default Create;
