"use client";
import CampaignCard from "@/components/Cards/campaignCard";
import CardDataStats from "@/components/Cards/cardStats";
import { Button } from "@/components/ui/button";
import { CreatorStats, contentData } from "@/lib/data";
import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Ad {
  id: number;
  title: string;
  description: string;
}

const ads: Ad[] = [
  { id: 1, title: "Ad 1", description: "Description for Ad 1" },
  { id: 2, title: "Ad 2", description: "Description for Ad 2" },
  { id: 3, title: "Ad 3", description: "Description for Ad 3" },
];

const Creator: React.FC = () => {
  return (
    <>
      <div className="flex w-full justify-between mb-2 items-center">
        <h1 className="font-semibold text-xl ">Overview</h1>
        <Link href={"/creator/analytics"}>
          <Button variant={"link"} className="text-primary text-base">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        {CreatorStats.map((stats, i) => (
          <CardDataStats
            key={i}
            title={stats.title}
            total={stats.total}
            rate={stats.rate}
            levelUp={stats.levelUp}
            levelDown={stats.levelDown}
          >
            {stats.icon && <stats.icon className="text-primary" />}
          </CardDataStats>
        ))}
      </div>
      <div className="flex w-full justify-between mt-8 mb-2 items-center">
        <h1 className="font-semibold text-xl ">Your Campaigns</h1>
        <Link href={"/creator/campaigns"}>
          <Button variant={"link"} className="text-primary text-base">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        {contentData.slice(0, 4).map((content, i) => (
          <CampaignCard
            key={i}
            title={content.title}
            impression={content.engagement_metrics?.views.toString() || ""}
            description={content.description ?? ""}
            budget={content.author.includes("Creator") ? "You" : "Advertiser"}
            duration={content.duration ?? ""}
            status={content.status}
          />
        ))}
      </div>
    </>
  );
};

export default Creator;
