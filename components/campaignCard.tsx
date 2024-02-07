import { Megaphone } from "lucide-react";

interface CampaignCardProps {
  title: string;
  impressions: string;
  description: string;
  duration: string;
}
const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  impressions,
  description,
  duration,
}) => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-7 py-6 shadow-default dark:border-strokedark dark:bg-boxdark cursor-pointer">
      <div className="flex items-center gap-x-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          <Megaphone className="text-primary" />
        </div>
        <span className="text-xl font-medium">{title}</span>
      </div>

      <div className="mt-4 flex flex-col items-center justify-between">
        <div className="w-full  overflow-hidden">
          <h4 className="text-base  text-black dark:text-white mb-2 truncate">
            {description}
          </h4>
        </div>
        <div className="flex w-full justify-between ">
          <p className="text-sm font-normal text-bodydark2">
            Impression <span className="text-black">{impressions}</span>
          </p>
          <p className=" items-center gap-1 text-base font-normal ">
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;