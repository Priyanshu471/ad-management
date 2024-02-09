import {
  ArrowUpLeftFromCircle,
  Eye,
  IndianRupee,
  LucideIcon,
  Users,
} from "lucide-react";

export type Campaign = {
  id: string;
  title: string;
  description?: string;
  status: "Active" | "End";
  impression: number;
  click?: number;
  ctr: string;
  budget: string;
  duration?: string;
  objective?: string;
};

export const campaignsData: Campaign[] = [
  {
    id: "1",
    title: "Campaign 1",
    description:
      "Description for Campaign 1 this is a long description for campaign 1",
    status: "Active",
    impression: 10000,
    click: 500,
    ctr: "5",
    budget: "10,000",
    duration: "10 days",
  },
  {
    id: "2",
    title: "Campaign 2",
    description: "Description for Campaign 2 ",
    status: "End",
    impression: 5000,
    click: 200,
    ctr: "4",
    budget: "8,000",
    duration: "0 days",
  },
  {
    id: "3",
    title: "Campaign 3",
    description: "Description for Campaign 3 ",
    status: "Active",
    impression: 15000,
    click: 750,
    ctr: "5",
    budget: "12,000",
    duration: "5 days",
  },
  {
    id: "4",
    title: "Campaign 4",
    description:
      "Description for Campaign 4 this is very long description for campaign 4 ",
    status: "End",
    impression: 12000,
    click: 600,
    ctr: "5",
    budget: "15,000",
    duration: "0 days",
  },
  {
    id: "5",
    title: "Campaign 5",
    description: "Description for Campaign 5 ",
    status: "Active",
    impression: 20000,
    click: 1000,
    ctr: "5",
    budget: "20,000",
    duration: "7 days",
  },
  {
    id: "6",
    title: "Campaign 6",
    description: "Description for Campaign 6 ",
    status: "End",
    impression: 8000,
    click: 400,
    ctr: "5",
    budget: "9,000",
    duration: "0 days",
  },
  {
    id: "7",
    title: "Campaign 7",
    description: "Description for Campaign 7 ",
    status: "Active",
    impression: 25000,
    click: 1200,
    ctr: "5",
    budget: "25,000",
    duration: "3 days",
  },
  {
    id: "8",
    title: "Campaign 8",
    description:
      "Description for Campaign 8 this is very very long description for campaign 8",
    status: "End",
    impression: 18000,
    click: 900,
    ctr: "5",
    budget: "18,000",
    duration: "0 days",
  },
  {
    id: "9",
    title: "Campaign 9",
    description: "Description for Campaign 9 ",
    status: "Active",
    impression: 30000,
    click: 1500,
    ctr: "5",
    budget: "30,000",
    duration: "10 days",
  },
  {
    id: "10",
    title: "Campaign 10",
    description: "Description for Campaign 10 ",
    status: "End",
    impression: 22000,
    click: 1100,
    ctr: "5",
    budget: "22,000",
    duration: "0 days",
  },
  {
    id: "11",
    title: "Campaign 11",
    description: "Description for Campaign 11 ",
    status: "End",
    impression: 1600,
    click: 500,
    ctr: "3",
    budget: "18,000",
    duration: "0 days",
  },
  {
    id: "12",
    title: "Campaign 12",
    description: "Description for Campaign 12 ",
    status: "Active",
    impression: 15000,
    click: 750,
    ctr: "5",
    budget: "12,000",
    duration: "5 days",
  },
];

type CampaignObejctive = {
  name: string;
  des: string;
};
export const campaignObjective: CampaignObejctive[] = [
  {
    name: "Brand Awareness",
    des: "Increase awareness for your brand by reaching people who are more likely to be interested in it.",
  },
  {
    name: "Reach",
    des: "Show your ad to the maximum number of people.",
  },
  {
    name: "Traffic",
    des: "Send more people to a destination on or off Facebook, such as a website, app or Messenger conversation.",
  },
  {
    name: "Engagement",
    des: "Get more post engagements, Page likes, event responses or offer claims.",
  },
  {
    name: "App installs",
    des: "Get more people to install your app.",
  },
  {
    name: "Video views",
    des: "Get more people to view your video content.",
  },
  {
    name: "Lead generation",
    des: "Drive more sales leads, such as email addresses, from people interested in your brand or business.",
  },
  {
    name: "Messages",
    des: "Get more people to send messages to your business in Messenger or WhatsApp.",
  },
  {
    name: "Conversions",
    des: "Get more people to take valuable actions on your website or app, such as adding payment info or making a purchase.",
  },
];

type Interests = {
  [category: string]: string[];
};

export const InterestsData: Interests = {
  food: [
    "Snacks",
    "Sweets",
    "Healthy Eating",
    "Cooking",
    "Baking",
    "Fast Food",
  ],
  sports: [
    "Football",
    "Basketball",
    "Tennis",
    "Running",
    "Cycling",
    "Golf",
    "Cricket",
  ],
  music: ["Rock", "Pop", "Hip Hop", "Classical", "Jazz", "Blues", "Country"],
  travel: [
    "Adventure Travel",
    "Beach Vacations",
    "Cultural Tourism",
    "Solo Travel",
    "Family Travel",
    "Luxury Travel",
  ],
  technology: [
    "Gadgets",
    "Artificial Intelligence",
    "Software Development",
    "Cybersecurity",
    "Data Science",
    "Cloud Computing",
  ],
  fashion: [
    "Streetwear",
    "Vintage Fashion",
    "Luxury Brands",
    "Sustainable Fashion",
    "Athleisure",
    "Fast Fashion",
  ],
  health: [
    "Mental Health",
    "Physical Fitness",
    "Nutrition",
    "Yoga",
    "Meditation",
    "Healthy Living",
  ],
  finance: [
    "Personal Finance",
    "Investing",
    "Cryptocurrency",
    "Stock Market",
    "Retirement Planning",
    "Real Estate",
  ],
  entertainment: [
    "Movies",
    "TV Shows",
    "Comedy",
    "Dance",
    "Theatre",
    "Nightlife",
  ],
  education: [
    "Online Learning",
    "Higher Education",
    "Early Childhood Education",
    "Special Education",
    "Adult Education",
  ],
  beauty: [
    "Skincare",
    "Makeup",
    "Hair Care",
    "Fragrance",
    "Cosmetics",
    "Beauty Products",
  ],
  home: [
    "Home Decor",
    "Gardening",
    "Home Improvement",
    "Interior Design",
    "DIY",
    "Home Appliances",
  ],
  pets: [
    "Dogs",
    "Cats",
    "Pet Adoption",
    "Pet Supplies",
    "Pet Services",
    "Pet Food",
  ],
  automotive: [
    "Electric Vehicles",
    "Car Enthusiasts",
    "Car Racing",
    "Car Rentals",
    "Car Dealers",
    "Car Repair",
  ],
};

type StatsType = {
  title: string;
  total: string;
  rate: string;
  icon: LucideIcon;
  levelUp?: boolean;
  levelDown?: boolean;
};
export const Stats: StatsType[] = [
  {
    title: "Total views",
    total: "86,568",
    rate: "0.43%",
    icon: Eye,
    levelUp: true,
  },
  {
    title: "Profit",
    total: "12,236",
    rate: "4.03%",
    icon: IndianRupee,
    levelUp: true,
  },
  {
    title: "Click rate",
    total: "56.3%",
    rate: "8%",
    icon: ArrowUpLeftFromCircle,
    levelUp: true,
  },
  {
    title: "Total users",
    total: "40,568",
    rate: "0.83%",
    icon: Users,
    levelDown: true,
  },
];

type CampaignType = {
  title: string;
  impressions: string;
  description: string;
  duration: string;
};

export const CampaignStats: CampaignType[] = [
  {
    title: "Campaign 1",
    impressions: "2,568",
    description:
      "Description for Campaign 1 this is a long description for campaign 1",
    duration: "2 days",
  },
  {
    title: "Campaign 2",
    impressions: "6529",
    description: "Description for Campaign 2 ",
    duration: "10 days",
  },
  {
    title: "Campaign 3",
    impressions: "2,568",
    description: "Description for Campaign 3 ",
    duration: "2 days",
  },
  {
    title: "Campaign 4",
    impressions: "2,568",
    description:
      "Description for Campaign 4 this is very long description for campaign 4 ",
    duration: "2 days",
  },
];
type CTRType = {
  id: string;
  title: string;
  ctr: number[];
  userStats: number[];
  userPercentage: number[];
};
export const campaignsCtr: CTRType[] = [
  {
    id: "1",
    title: "Campaign 1",
    ctr: [5, 4, 3, 5, 6, 3, 2, 6, 4, 3, 6, 5],
    userStats: [1200, 800, 600, 400],
    userPercentage: [30, 20, 15, 35],
  },
  {
    id: "2",
    title: "Campaign 2",
    ctr: [3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5],
    userStats: [800, 1000, 700, 500],
    userPercentage: [20, 25, 18, 37],
  },
  {
    id: "3",
    title: "Campaign 3",
    ctr: [4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6],
    userStats: [1500, 700, 800, 600],
    userPercentage: [35, 15, 20, 30],
  },
  {
    id: "4",
    title: "Campaign 4",
    ctr: [5, 6, 3, 5, 6, 3, 5, 6, 3, 5, 6, 3],
    userStats: [1000, 1200, 500, 700],
    userPercentage: [25, 30, 12, 33],
  },
  {
    id: "5",
    title: "Campaign 5",
    ctr: [6, 3, 2, 6, 4, 3, 6, 5, 5, 4, 5, 3],
    userStats: [900, 900, 1000, 700],
    userPercentage: [22.5, 22.5, 25, 30],
  },
  {
    id: "6",
    title: "Campaign 6",
    ctr: [3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5],
    userStats: [1100, 800, 700, 900],
    userPercentage: [27.5, 20, 17.5, 35],
  },
  {
    id: "7",
    title: "Campaign 7",
    ctr: [4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6],
    userStats: [1300, 600, 900, 700],
    userPercentage: [32.5, 15, 22.5, 30],
  },
  {
    id: "8",
    title: "Campaign 8",
    ctr: [5, 6, 3, 5, 6, 3, 5, 6, 3, 5, 6, 3],
    userStats: [800, 1100, 1000, 600],
    userPercentage: [20, 27.5, 25, 15],
  },
  {
    id: "9",
    title: "Campaign 9",
    ctr: [6, 3, 2, 6, 4, 3, 6, 5, 5, 4, 5, 3],
    userStats: [1200, 900, 800, 700],
    userPercentage: [30, 22.5, 20, 27.5],
  },
  {
    id: "10",
    title: "Campaign 10",
    ctr: [3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5],
    userStats: [1000, 1000, 700, 800],
    userPercentage: [25, 25, 17.5, 32.5],
  },
  {
    id: "11",
    title: "Campaign 11",
    ctr: [4, 5, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6],
    userStats: [1100, 700, 800, 900],
    userPercentage: [27.5, 17.5, 20, 35],
  },
  {
    id: "12",
    title: "Campaign 12",
    ctr: [5, 6, 3, 5, 6, 3, 5, 6, 3, 5, 6, 3],
    userStats: [900, 1200, 1000, 700],
    userPercentage: [22.5, 30, 25, 17.5],
  },
];
