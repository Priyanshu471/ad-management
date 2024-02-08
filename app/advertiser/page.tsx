"use client";
import CampaignCard from "@/components/campaignCard";
import CardDataStats from "@/components/cardStats";
import { Button } from "@/components/ui/button";
import {
  ArrowUpLeftFromCircle,
  Eye,
  HandshakeIcon,
  IndianRupee,
  Plus,
  Users,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Advertiser: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div className="flex w-full justify-between mb-2 items-center">
        <h1 className="font-semibold text-xl ">Overview</h1>
        <Link href={"/advertiser/create"}>
          <Button variant={"primary"} className=" gap-x-2 flex items-center">
            <Plus className="w-5" />
            Create Campaign
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        <CardDataStats title="Total views" total="86,568" rate="0.43%" levelUp>
          <Eye className="text-primary" />
        </CardDataStats>
        <CardDataStats title="Profit" total="12,236" rate="4.03%" levelUp>
          <IndianRupee className="text-primary" />
        </CardDataStats>
        <CardDataStats title="Click rate" total="56.3%" rate="8%" levelUp>
          <ArrowUpLeftFromCircle className="text-primary" />
        </CardDataStats>
        <CardDataStats
          title="Total users"
          total="40,568"
          rate="0.83%"
          levelDown
        >
          <Users className="text-primary" />
        </CardDataStats>
      </div>
      <div className="flex w-full justify-between mt-8 mb-2 items-center">
        <h1 className="font-semibold text-xl ">Live Campaign</h1>
        <Link href={"/advertiser/campaigns"}>
          <Button variant={"link"} className="text-primary text-base">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        <CampaignCard
          title="Campaign 1"
          impressions="2,568"
          description="Description for Campaign 1 this is a long description for campaign 1"
          duration="2 days"
        />
        <CampaignCard
          title="Campaign 2"
          impressions="6529"
          description="Description for Campaign 2 "
          duration="10 days"
        />
        <CampaignCard
          title="Campaign 3"
          impressions="2,568"
          description="Description for Campaign 3 "
          duration="2 days"
        />
        <CampaignCard
          title="Campaign 4"
          impressions="2,568"
          description="Description for Campaign 4 this is very long description for campaign 4 "
          duration="2 days"
        />
      </div>
    </>
  );
};

export default Advertiser;
