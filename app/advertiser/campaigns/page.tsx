import { Button } from "@/components/ui/button";
import CampaignsTable from "../_components/campaignsTable";

const campaigns = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium mt-2">All Campaigns</h1>
          <Button variant={"primary"}>Start New</Button>
        </div>
        <CampaignsTable />
      </div>
    </>
  );
};

export default campaigns;
