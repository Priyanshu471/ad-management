import {
  FolderKanban,
  Landmark,
  LayoutGrid,
  Library,
  LineChart,
  Megaphone,
  PlusCircle,
  Settings,
  User,
  UserRoundCog,
  Users,
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

export const creatorMenu = [
  {
    id: 1,
    tab: "Dashboard",
    link: "/creator",
    icon: LayoutGrid,
  },
  {
    id: 2,
    tab: "Profile",
    link: "/creator/profile",
    icon: User,
  },
  {
    id: 3,
    tab: "Campaigns",
    link: "/creator/campaigns",
    icon: Megaphone,
  },
  {
    id: 4,
    tab: "Analytics",
    link: "/creator/analytics",
    icon: LineChart,
  },
  {
    id: 5,
    tab: "Media Library",
    link: "/creator/library",
    icon: Library,
  },
];

export const adminMenu = [
  {
    id: 1,
    tab: "Dashboard",
    link: "/admin",
    icon: LayoutGrid,
  },
  {
    id: 2,
    tab: "Users",
    link: "/admin/users",
    icon: UserRoundCog,
  },
  {
    id: 3,
    tab: "Manage",
    link: "/admin/manage",
    icon: FolderKanban,
  },
  {
    id: 4,
    tab: "System Settings",
    link: "/admin/settings",
    icon: Settings,
  },
  {
    id: 5,
    tab: "Finances",
    link: "/admin/finances",
    icon: Landmark,
  },
];
