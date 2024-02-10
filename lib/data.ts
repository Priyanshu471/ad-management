import {
  ArrowUpLeftFromCircle,
  ArrowUpRightFromCircle,
  Eye,
  EyeIcon,
  IndianRupee,
  LucideIcon,
  Users,
} from "lucide-react";

// This is for Advertiser Data
export type Campaign = {
  id: string;
  title: string;
  description?: string;
  status: "Active" | "End" | "Live" | "Deleted";
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
    title: "Just Do It",
    description:
      "Encourages people to push their limits and strive for greatness, promoting the idea of determination and achievement.",
    status: "Active",
    impression: 10000,
    click: 500,
    ctr: "5",
    budget: "10,000",
    duration: "10 days",
  },
  {
    id: "2",
    title: "Think Different",
    description:
      "Inspires creativity and innovation, encouraging individuals to challenge conventions and embrace new ideas.",
    status: "End",
    impression: 5000,
    click: 200,
    ctr: "4",
    budget: "8,000",
    duration: "0 days",
  },
  {
    id: "3",
    title: "Share a Coke",
    description:
      "Personalizes the Coca-Cola experience by featuring individual names on Coke bottles, fostering connections and social sharing. ",
    status: "Active",
    impression: 15000,
    click: 750,
    ctr: "5",
    budget: "12,000",
    duration: "5 days",
  },
  {
    id: "4",
    title: "The Most Interesting Man in the World",
    description:
      "Features a suave and adventurous character who embodies the essence of worldly sophistication and intrigue.",
    status: "End",
    impression: 12000,
    click: 600,
    ctr: "5",
    budget: "15,000",
    duration: "0 days",
  },
  {
    id: "5",
    title: "Got Milk?",
    description:
      "Promotes the consumption of milk with a simple and memorable catchphrase, highlighting the importance of milk in daily life.",
    status: "Active",
    impression: 20000,
    click: 1000,
    ctr: "5",
    budget: "20,000",
    duration: "7 days",
  },
  {
    id: "6",
    title: "Impossible Is Nothing",
    description:
      "Encourages individuals to overcome challenges and push beyond their limits, emphasizing the power of perseverance and resilience.",
    status: "End",
    impression: 8000,
    click: 400,
    ctr: "5",
    budget: "9,000",
    duration: "0 days",
  },
  {
    id: "7",
    title: "Dove Campaign for Real Beauty",
    description:
      "Challenges traditional beauty standards and celebrates the diversity and authenticity of real people's appearances.",
    status: "Active",
    impression: 25000,
    click: 1200,
    ctr: "5",
    budget: "25,000",
    duration: "3 days",
  },
  {
    id: "8",
    title: "The Man Your Man Could Smell Like",
    description:
      "Features a humorous and confident character to promote men's grooming products, appealing to both men and women with its memorable ads.",
    status: "End",
    impression: 18000,
    click: 900,
    ctr: "5",
    budget: "18,000",
    duration: "0 days",
  },
  {
    id: "9",
    title: "The Best a Man Can Get",
    description:
      "Promotes the idea of striving for excellence in personal grooming and character, encouraging men to be the best versions of themselves.",
    status: "Active",
    impression: 30000,
    click: 1500,
    ctr: "5",
    budget: "30,000",
    duration: "10 days",
  },
  {
    id: "10",
    title: "The Marlboro Man",
    description:
      "Depicts a rugged cowboy symbolizing masculinity and freedom, effectively promoting Marlboro cigarettes as a symbol of rugged individualism.",
    status: "End",
    impression: 22000,
    click: 1100,
    ctr: "5",
    budget: "22,000",
    duration: "0 days",
  },
  {
    id: "11",
    title: "M&M's Melts in Your Mouth, Not in Your Hand",
    description:
      "Highlights the unique selling point of M&M's candies, assuring consumers of their quality and taste experience.",
    status: "End",
    impression: 1600,
    click: 500,
    ctr: "3",
    budget: "18,000",
    duration: "0 days",
  },
  {
    id: "12",
    title: "Have It Your Way",
    description:
      "Emphasizes customization and personalization, allowing customers to tailor their orders according to their preferences, promoting Burger King's commitment to customer satisfaction.",
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

// This is for Creator Data
export const CreatorStats: StatsType[] = [
  {
    title: "Total Views",
    total: "1,02,345",
    rate: "0.65%",
    icon: EyeIcon,
    levelUp: true,
  },
  {
    title: "Earnings",
    total: "₹15,890",
    rate: "3.21%",
    icon: IndianRupee,
    levelUp: true,
  },
  {
    title: "Engagement Rate",
    total: "62.8%",
    rate: "6.5%",
    icon: ArrowUpRightFromCircle,
    levelUp: true,
  },
  {
    title: "Audience Growth",
    total: "45,789",
    rate: "1.25%",
    icon: Users,
    levelDown: true,
  },
];

type Content = {
  title: string;
  description: string;
  type: string;
  category: string;
  author: "Creator" | "Advertiser";
  status: "Live" | "Deleted";
  duration?: string | null;
  tags?: string[];
  creation_date?: string | null;
  engagement_metrics?: {
    views: number;
    likes: number;
    shares: number;
    comments: number;
  };
  target_audience?: string;
  campaign_association?: string | null;
};

export const contentData: Content[] = [
  {
    title: "Summer Sale Banner",
    description: "Promotional banner for summer sale event",
    type: "image",
    category: "Sales & Promotions",
    author: "Advertiser",
    status: "Live",
    duration: null,
    tags: ["summer", "sale", "banner", "discount"],
    creation_date: "2023-06-15",
    engagement_metrics: {
      views: 25000,
      likes: 1200,
      shares: 500,
      comments: 100,
    },
    target_audience: "Online shoppers",
    campaign_association: "Summer Sale Campaign",
  },
  {
    title: "Product Demo Video",
    description: "Demonstration video showcasing product features",
    type: "video",
    category: "Product Demonstrations",
    author: "Creator",
    status: "Live",
    duration: "2:30",
    tags: ["product", "demo", "video", "features"],
    creation_date: "2023-07-10",
    engagement_metrics: {
      views: 15000,
      likes: 800,
      shares: 300,
      comments: 50,
    },
    target_audience: "Tech enthusiasts",
    campaign_association: "Product Launch Campaign",
  },
  {
    title: "Healthy Eating Article",
    description: "Informative article about healthy eating habits",
    type: "text",
    category: "Health & Wellness",
    author: "Creator",
    status: "Deleted",
    duration: null,
    tags: ["healthy", "eating", "nutrition", "wellness"],
    creation_date: "2023-08-20",
    engagement_metrics: {
      views: 35000,
      likes: 1500,
      shares: 700,
      comments: 200,
    },
    target_audience: "Health-conscious readers",
    campaign_association: null,
  },
  {
    title: "Travel Photography Collection",
    description: "Collection of stunning travel photographs",
    type: "image",
    category: "Travel & Exploration",
    author: "Advertiser",
    status: "Live",
    duration: null,
    tags: ["travel", "photography", "landscape", "adventure"],
    creation_date: "2023-09-05",
    engagement_metrics: {
      views: 28000,
      likes: 1300,
      shares: 600,
      comments: 150,
    },
    target_audience: "Travel enthusiasts",
    campaign_association: "Wanderlust Campaign",
  },
  {
    title: "Cooking Tutorial Video",
    description: "Step-by-step cooking tutorial for a popular recipe",
    type: "video",
    category: "Food & Cooking",
    author: "Creator",
    status: "Deleted",
    duration: "5:00",
    tags: ["cooking", "tutorial", "recipe", "culinary"],
    creation_date: "2023-10-15",
    engagement_metrics: {
      views: 20000,
      likes: 1000,
      shares: 400,
      comments: 100,
    },
    target_audience: "Cooking enthusiasts",
    campaign_association: null,
  },
  {
    title: "Tech Review Blog Post",
    description: "In-depth review of the latest tech gadgets",
    type: "text",
    category: "Technology",
    author: "Advertiser",
    status: "Live",
    duration: null,
    tags: ["tech", "review", "blog", "gadgets"],
    creation_date: "2023-11-20",
    engagement_metrics: {
      views: 50000,
      likes: 2500,
      shares: 800,
      comments: 300,
    },
    target_audience: "Tech enthusiasts",
    campaign_association: "Tech Gadgets Review",
  },
  {
    title: "Fitness Workout Video",
    description: "High-intensity workout video for fitness enthusiasts",
    type: "video",
    category: "Fitness & Exercise",
    author: "Creator",
    status: "Live",
    duration: "10:00",
    tags: ["fitness", "workout", "exercise", "health"],
    creation_date: "2023-12-05",
    engagement_metrics: {
      views: 18000,
      likes: 1200,
      shares: 400,
      comments: 150,
    },
    target_audience: "Fitness enthusiasts",
    campaign_association: "Fitness Challenge Campaign",
  },
  {
    title: "DIY Home Decor Tutorial",
    description: "Step-by-step tutorial for creating DIY home decor",
    type: "video",
    category: "Home & Decor",
    author: "Creator",
    status: "Live",
    duration: "7:30",
    tags: ["DIY", "home decor", "tutorial", "crafts"],
    creation_date: "2024-01-10",
    engagement_metrics: {
      views: 22000,
      likes: 1500,
      shares: 600,
      comments: 200,
    },
    target_audience: "Home decor enthusiasts",
    campaign_association: null,
  },
  {
    title: "Fashion Lookbook Photoshoot",
    description: "Photoshoot showcasing latest fashion trends",
    type: "image",
    category: "Fashion & Style",
    author: "Advertiser",
    status: "Live",
    duration: null,
    tags: ["fashion", "lookbook", "photoshoot", "trends"],
    creation_date: "2024-02-15",
    engagement_metrics: {
      views: 30000,
      likes: 1800,
      shares: 700,
      comments: 300,
    },
    target_audience: "Fashion enthusiasts",
    campaign_association: "Spring Fashion Collection",
  },
  {
    title: "Financial Planning Guide",
    description: "Comprehensive guide to financial planning and investing",
    type: "text",
    category: "Finance & Investing",
    author: "Creator",
    status: "Live",
    duration: null,
    tags: ["financial planning", "investing", "finance", "money"],
    creation_date: "2024-03-20",
    engagement_metrics: {
      views: 40000,
      likes: 2200,
      shares: 800,
      comments: 400,
    },
    target_audience: "Investment enthusiasts",
    campaign_association: "Wealth Management Campaign",
  },
];
