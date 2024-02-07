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
import { campaignsData } from "@/lib/data";

const Analytics = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="w-1/2">
        <h1 className="text-xl font-medium mt-2">
          Select Campaign for Analytics
        </h1>
        <Select>
          <SelectTrigger className="h-12 text-lg">
            <SelectValue
              placeholder="Select Campaign"
              className="text-foreground/60 placeholder:text-foreground/20 placeholder-opacity-60 "
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {campaignsData.map((campaign, key) => (
                <SelectItem value={campaign.title} key={key}>
                  <div className="flex justify-between items-center gap-x-4 gap-y-2 w-full ">
                    <p className="text-lg font-medium">{campaign.title}</p>
                    <p
                      className={` px-3 py-0.5 rounded-full  ${
                        campaign.status === "Active"
                          ? "text-meta-3 bg-meta-3/10"
                          : "text-meta-1 bg-meta-1/10"
                      }`}
                    >
                      {campaign.status}
                    </p>
                    <p>
                      {campaign.impression}{" "}
                      <span className="text-muted-foreground text-sm">
                        impressions
                      </span>
                    </p>
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
          <CtrChart />
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
          <UsersChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
