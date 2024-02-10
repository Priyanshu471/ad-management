import TopCampaignsTable from "../_components/topCampaignsTable";
import YourCampaignsTable from "../_components/yourCampaignsTable";

const Campaigns = () => {
  return (
    <div className="flex flex-col w-full gap-y-8">
      <TopCampaignsTable />
      <YourCampaignsTable />
    </div>
  );
};

export default Campaigns;
