import {
  LayoutGrid,
  Library,
  LineChart,
  Megaphone,
  PlusCircle,
} from "lucide-react";

export const advertiserMenu = [
  {
    id: 1,
    tab: "Dashboard",
    link: "/advertiser",
    icon: LayoutGrid,
  },
  {
    id: 2,
    tab: "Create",
    link: "/advertiser/create",
    icon: PlusCircle,
  },
  {
    id: 3,
    tab: "Campaigns",
    link: "/advertiser/campaigns",
    icon: Megaphone,
  },
  {
    id: 4,
    tab: "Analytics",
    link: "/advertiser/analytics",
    icon: LineChart,
  },
  {
    id: 5,
    tab: "Media Library",
    link: "/advertiser/library",
    icon: Library,
  },
];
