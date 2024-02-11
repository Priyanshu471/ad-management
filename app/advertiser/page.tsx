"use client";
import CampaignCard from "@/components/Cards/campaignCard";
import CardDataStats from "@/components/Cards/cardStats";
import { Button } from "@/components/ui/button";
import useActive from "@/hooks/useActive";
import useOpen from "@/hooks/useOpen";
import useUser from "@/hooks/useUser";
import { CampaignStats, Stats, campaignsData } from "@/lib/data";
import { Plus } from "lucide-react";
import { ReloadPageAction } from "next/dist/server/dev/hot-reloader-types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

const Advertiser: React.FC = () => {
  const { setOpen } = useOpen();
  const { setActive } = useActive();
  const { isLoggedIn } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
      // toast.error("Redirecting...");
    }
  }, [isLoggedIn]);
  return (
    <>
      <div className="flex w-full justify-between mb-2 items-center">
        <h1 className="font-semibold text-xl ">Overview</h1>
        <Link href={"/advertiser/create"}>
          <Button
            variant={"primary"}
            className=" gap-x-2 flex items-center"
            onClick={() => {
              setOpen(true);
              setActive(2);
            }}
          >
            <Plus className="w-5" />
            Create Campaign
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        {Stats.map((stats, i) => (
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
        <h1 className="font-semibold text-xl ">Live Campaign</h1>
        <Link href={"/advertiser/campaigns"}>
          <Button variant={"link"} className="text-primary text-base">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        {campaignsData.slice(0, 4).map((campaign, i) => (
          <CampaignCard
            key={i}
            title={campaign.title}
            impression={campaign.impression.toString()}
            description={campaign.description ?? ""}
            budget={campaign.budget ?? ""}
            duration={campaign.duration ?? ""}
            status={campaign.status}
          />
        ))}
      </div>
    </>
  );
};

export default Advertiser;
