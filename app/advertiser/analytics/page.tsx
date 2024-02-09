"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CtrChart from "../_components/ctrChart";
import UsersChart from "../_components/usersChart";
import { campaignsCtr, campaignsData } from "@/lib/data";
import { use, useEffect, useState } from "react";

const Analytics = () => {
  const [data, setData] = useState<{
    ctr: number[];
    values: number[];
    percentages: number[];
  }>({
    ctr: [],
    values: [],
    percentages: [],
  });
  const handleSelect = (value: string) => {
    const campaignId = campaignsCtr.find(
      (campaign) => campaign.title === value
    )?.id;
    if (campaignId) {
      const selectedCampaign = campaignsCtr.find(
        (campaign) => campaign.id === campaignId
      );
      if (selectedCampaign) {
        setData({
          ctr: selectedCampaign.ctr,
          values: selectedCampaign.userStats,
          percentages: selectedCampaign.userPercentage,
        });
        console.log(data);
      }
    }
  };
  return (
    <div className="flex flex-col gap-y-6">
      <div className="w-1/2">
        <h1 className="text-xl font-medium mt-2">
          Select Campaign for Analytics
        </h1>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="h-12 text-lg">
            <SelectValue
              placeholder="Select Campaign"
              className="text-foreground/60 placeholder:text-foreground/20 placeholder-opacity-60 "
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {campaignsCtr.map((campaign, key) => (
                <SelectItem value={campaign.title} key={campaign.id}>
                  <div className="flex justify-between items-center gap-x-4 gap-y-2 w-full ">
                    <p className="text-lg font-medium">{campaign.title}</p>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="font-medium text-xl">
          Conversion Rate -{" "}
          <span className="text-muted-foreground text-base font-medium">
            Number of click per impression
          </span>
        </p>
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7">
          <CtrChart data={data.ctr} />
        </div>
      </div>
      <div>
        <p className="font-medium text-xl">
          Audience -{" "}
          <span className="text-muted-foreground text-base font-medium">
            People of different categories
          </span>
        </p>
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7">
          <UsersChart values={data.values} percentages={data.percentages} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
