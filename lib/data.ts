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
