
export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  expansionLocations?: string[];
  hiringCount?: number;
  growthRate?: number;
  saved?: boolean;
  description?: string;
}

export const mockCompanies: Company[] = [
  {
    id: "1",
    name: "TechGrowth Inc",
    logo: "",
    industry: "Technology",
    expansionLocations: ["Singapore", "Dubai"],
    hiringCount: 250,
    growthRate: 32,
    saved: true,
    description: "Enterprise cloud solutions provider expanding operations across Asia and Middle East"
  },
  {
    id: "2",
    name: "Global Logistics Ltd",
    logo: "",
    industry: "Logistics",
    expansionLocations: ["Miami", "Rotterdam"],
    hiringCount: 180,
    growthRate: 24,
    description: "International shipping and logistics company establishing new distribution hubs"
  },
  {
    id: "3",
    name: "FinTech Solutions",
    logo: "",
    industry: "Financial Services",
    expansionLocations: ["London", "Sydney"],
    hiringCount: 320,
    growthRate: 41,
    saved: true,
    description: "Digital payment solutions provider scaling operations in European and Australian markets"
  },
  {
    id: "4",
    name: "GreenEnergy Co",
    logo: "",
    industry: "Energy",
    expansionLocations: ["Berlin", "Stockholm"],
    hiringCount: 150,
    growthRate: 28,
    description: "Renewable energy company establishing R&D centers across Northern Europe"
  },
  {
    id: "5",
    name: "MedInnovate",
    logo: "",
    industry: "Healthcare",
    expansionLocations: ["Boston", "Tel Aviv"],
    hiringCount: 200,
    growthRate: 35,
    description: "Medical technology firm setting up advanced research facilities"
  },
  {
    id: "6",
    name: "RetailPlus",
    logo: "",
    industry: "Retail",
    expansionLocations: ["Tokyo", "Seoul"],
    hiringCount: 275,
    growthRate: 22,
    description: "Omnichannel retail company expanding across East Asian markets"
  }
];

export const mockIndustries = [
  "Technology",
  "Logistics",
  "Financial Services", 
  "Healthcare",
  "Energy",
  "Retail",
  "Manufacturing",
  "Telecommunications"
];

export const growthMetrics = {
  totalLeads: 412,
  newCompanies: 24,
  savedLeads: 56,
  averageGrowth: 28.5
};

export const expansionHotspots = [
  { location: "Singapore", count: 42 },
  { location: "Dubai", count: 38 },
  { location: "London", count: 35 },
  { location: "Boston", count: 29 },
  { location: "Berlin", count: 26 }
];

export const hiringTrends = [
  { month: "Jan", count: 1200 },
  { month: "Feb", count: 1350 },
  { month: "Mar", count: 1500 },
  { month: "Apr", count: 1640 },
  { month: "May", count: 1820 },
  { month: "Jun", count: 2100 }
];
