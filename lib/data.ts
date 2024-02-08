// Define the Campaign type
type Campaign = {
  title: string;
  status: "Active" | "End";
  impression: number;
  click: number;
  ctr: string;
  budget: string;
};
export const campaignsData: Campaign[] = [
  {
    title: "Campaign 1",
    status: "Active",
    impression: 10000,
    click: 500,
    ctr: "5",
    budget: "10,000",
  },
  {
    title: "Campaign 2",
    status: "End",
    impression: 5000,
    click: 200,
    ctr: "4",
    budget: "8,000",
  },
  {
    title: "Campaign 3",
    status: "Active",
    impression: 15000,
    click: 750,
    ctr: "5",
    budget: "12,000",
  },
  {
    title: "Campaign 4",
    status: "End",
    impression: 12000,
    click: 600,
    ctr: "5",
    budget: "15,000",
  },
  {
    title: "Campaign 5",
    status: "Active",
    impression: 20000,
    click: 1000,
    ctr: "5",
    budget: "20,000",
  },
  {
    title: "Campaign 6",
    status: "End",
    impression: 8000,
    click: 400,
    ctr: "5",
    budget: "9,000",
  },
  {
    title: "Campaign 7",
    status: "Active",
    impression: 25000,
    click: 1200,
    ctr: "5",
    budget: "25,000",
  },
  {
    title: "Campaign 8",
    status: "End",
    impression: 18000,
    click: 900,
    ctr: "5",
    budget: "18,000",
  },
  {
    title: "Campaign 9",
    status: "Active",
    impression: 30000,
    click: 1500,
    ctr: "5",
    budget: "30,000",
  },
  {
    title: "Campaign 10",
    status: "End",
    impression: 22000,
    click: 1100,
    ctr: "5",
    budget: "22,000",
  },
  {
    title: "Campaign 11",
    status: "End",
    impression: 1600,
    click: 500,
    ctr: "3",
    budget: "18,000",
  },
  {
    title: "Campaign 12",
    status: "Active",
    impression: 15000,
    click: 750,
    ctr: "5",
    budget: "12,000",
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
