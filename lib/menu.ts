import { LayoutGrid, Library, LineChart, Megaphone } from "lucide-react";

export const advertiserMenu = [
  {
    id: 1,
    tab: "Dashboard",
    link: "/advertiser",
    icon: LayoutGrid,
  },
  {
    id: 2,
    tab: "Campaigns",
    link: "/advertiser/campaigns",
    icon: Megaphone,
  },
  {
    id: 3,
    tab: "Analytics",
    link: "/advertiser/analytics",
    icon: LineChart,
  },
  {
    id: 4,
    tab: "Media Library",
    link: "/advertiser/library",
    icon: Library,
  },
];
