
import { mockCompanies, mockIndustries, growthMetrics, expansionHotspots, hiringTrends } from './mockData';

// Add delay to simulate network request
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Define mock lead data for the Leads page
export interface Lead {
  id: number;
  name: string;
  country: string;
  status: 'New' | 'Active' | 'At Risk';
  industry: string;
  location: string;
  size: string;
  contactName: string;
  email: string;
  phone: string;
  jobTitle: string;
  level: string;
  scores?: {
    fit: number;
    intent: number;
  };
  icpMatching?: {
    profile: boolean;
    geography: boolean;
    revenue: boolean;
    hiring: boolean;
  };
}

// Mock leads data
const mockLeads: Lead[] = [
  {
    id: 1,
    name: 'TechInnovators Inc.',
    country: 'us',
    status: 'New',
    industry: 'Technology',
    location: 'North America',
    size: '200 - 500 Employees',
    contactName: 'Sarah Johnson',
    email: 'sarah.j@techinnovators.com',
    phone: '+1 (234) 567 89101',
    jobTitle: 'CTO',
    level: 'C Suite',
    scores: {
      fit: 89,
      intent: 78,
    },
    icpMatching: {
      profile: true,
      geography: true,
      revenue: true,
      hiring: true,
    },
  },
  {
    id: 2,
    name: 'Innovate IT',
    country: 'gb',
    status: 'New',
    industry: 'Technology',
    location: 'Europe',
    size: '50 - 200 Employees',
    contactName: 'Mark Williams',
    email: 'mark@innovateit.com',
    phone: '+44 789 123 4567',
    jobTitle: 'CIO',
    level: 'C Suite',
    scores: {
      fit: 76,
      intent: 82,
    },
    icpMatching: {
      profile: true,
      geography: false,
      revenue: true,
      hiring: true,
    },
  },
  {
    id: 3,
    name: 'Future Tech',
    country: 'dk',
    status: 'New',
    industry: 'Technology',
    location: 'Europe',
    size: '1000+ Employees',
    contactName: 'Emily Olsen',
    email: 'emily@futuretech.dk',
    phone: '+45 6789 0123',
    jobTitle: 'Head of Innovation',
    level: 'Director',
    scores: {
      fit: 92,
      intent: 65,
    },
    icpMatching: {
      profile: true,
      geography: false,
      revenue: false,
      hiring: true,
    },
  },
  {
    id: 4,
    name: 'Planitech',
    country: 'es',
    status: 'Active',
    industry: 'Consulting',
    location: 'Europe',
    size: '20 - 50 Employees',
    contactName: 'Carlos Pérez',
    email: 'carlos@planitech.es',
    phone: '+34 987 654 321',
    jobTitle: 'Managing Director',
    level: 'Executive',
    scores: {
      fit: 68,
      intent: 91,
    },
    icpMatching: {
      profile: false,
      geography: true,
      revenue: true,
      hiring: false,
    },
  },
  {
    id: 5,
    name: 'Erogeniscience',
    country: 'se',
    status: 'Active',
    industry: 'Biotech',
    location: 'Europe',
    size: '500 - 1000 Employees',
    contactName: 'Astrid Lindgren',
    email: 'astrid@erogeniscience.se',
    phone: '+46 8 1234567',
    jobTitle: 'Research Director',
    level: 'Director',
    scores: {
      fit: 81,
      intent: 74,
    },
    icpMatching: {
      profile: false,
      geography: true,
      revenue: true,
      hiring: true,
    },
  },
  {
    id: 6,
    name: 'Techtronics',
    country: 'cn',
    status: 'Active',
    industry: 'Electronics',
    location: 'Asia',
    size: '1000+ Employees',
    contactName: 'Li Wei',
    email: 'li.wei@techtronics.cn',
    phone: '+86 138 0000 1111',
    jobTitle: 'VP of Engineering',
    level: 'VP',
    scores: {
      fit: 85,
      intent: 88,
    },
    icpMatching: {
      profile: true,
      geography: false,
      revenue: true,
      hiring: true,
    },
  },
  {
    id: 7,
    name: 'DataLink',
    country: 'cz',
    status: 'Active',
    industry: 'Data Services',
    location: 'Europe',
    size: '200 - 500 Employees',
    contactName: 'Jan Novák',
    email: 'jan.novak@datalink.cz',
    phone: '+420 777 888 999',
    jobTitle: 'Data Architect',
    level: 'Manager',
    scores: {
      fit: 72,
      intent: 69,
    },
    icpMatching: {
      profile: true,
      geography: true,
      revenue: false,
      hiring: true,
    },
  },
  {
    id: 8,
    name: 'CloudMatrix',
    country: 'ca',
    status: 'At Risk',
    industry: 'Software',
    location: 'North America',
    size: '50 - 200 Employees',
    contactName: 'John Smith',
    email: 'john.smith@cloudmatrix.ca',
    phone: '+1 416 123 4567',
    jobTitle: 'Software Engineer',
    level: 'Employee',
    scores: {
      fit: 58,
      intent: 42,
    },
    icpMatching: {
      profile: false,
      geography: true,
      revenue: false,
      hiring: false,
    },
  },
];

export interface LeadScoreMetrics {
  fitScores: number;
  intentScores: number;
  idealProfileMatch: number;
}

export interface LeadCountsByType {
  newLeads: number;
  activeLeads: number;
  qualified: number;
  converted: number;
  highIntent: number;
  atRisk: number;
}

export interface TopRegionsBySector {
  sector: string;
  region: string;
  leadCount: number;
}

// Mock data for the Lead Dashboard
const mockLeadScoreMetrics: LeadScoreMetrics = {
  fitScores: 85,
  intentScores: 70,
  idealProfileMatch: 60
};

const mockLeadCountsByType: LeadCountsByType = {
  newLeads: 323,
  activeLeads: 436,
  qualified: 221,
  converted: 321,
  highIntent: 53,
  atRisk: 32
};

const mockTopRegionsBySector: TopRegionsBySector[] = [
  { sector: 'Tech', region: 'North America', leadCount: 104 },
  { sector: 'Finance', region: 'Europe', leadCount: 87 },
  { sector: 'Healthcare', region: 'Asia', leadCount: 73 },
  { sector: 'Retail', region: 'Australia', leadCount: 65 },
  { sector: 'Energy', region: 'Africa', leadCount: 57 }
];

// API functions
export const API = {
  // Companies endpoints
  companies: {
    getAll: async () => {
      await delay(500); // Simulate network delay
      return [...mockCompanies];
    },
    getByIndustry: async (industry: string) => {
      await delay(300);
      return mockCompanies.filter(company => company.industry === industry);
    },
    search: async (term: string) => {
      await delay(300);
      return mockCompanies.filter(company => 
        company.name.toLowerCase().includes(term.toLowerCase()) ||
        company.industry.toLowerCase().includes(term.toLowerCase()) ||
        (company.description && company.description.toLowerCase().includes(term.toLowerCase()))
      );
    },
    getExpanding: async () => {
      await delay(400);
      return mockCompanies.filter(company => 
        company.expansionLocations && company.expansionLocations.length > 0
      );
    },
    getHiring: async () => {
      await delay(400);
      return mockCompanies.filter(company => 
        company.hiringCount && company.hiringCount >= 150
      );
    },
    getSaved: async () => {
      await delay(300);
      return mockCompanies.filter(company => company.saved);
    }
  },
  
  // Industries endpoints
  industries: {
    getAll: async () => {
      await delay(200);
      return [...mockIndustries];
    }
  },
  
  // Growth metrics endpoints
  metrics: {
    getGrowthMetrics: async () => {
      await delay(300);
      return { ...growthMetrics };
    },
    getExpansionHotspots: async () => {
      await delay(400);
      return [...expansionHotspots];
    },
    getHiringTrends: async () => {
      await delay(500);
      return [...hiringTrends];
    }
  },
  
  // Leads endpoints
  leads: {
    getAll: async () => {
      await delay(600);
      return [...mockLeads];
    },
    getById: async (id: number) => {
      await delay(300);
      return mockLeads.find(lead => lead.id === id) || null;
    },
    getByStatus: async (status: 'New' | 'Active' | 'At Risk') => {
      await delay(400);
      return mockLeads.filter(lead => lead.status === status);
    },
    search: async (term: string) => {
      await delay(400);
      return mockLeads.filter(lead => 
        lead.name.toLowerCase().includes(term.toLowerCase()) ||
        lead.industry.toLowerCase().includes(term.toLowerCase()) ||
        lead.contactName.toLowerCase().includes(term.toLowerCase())
      );
    }
  },
  
  // Lead dashboard endpoints
  leadDashboard: {
    getScoreMetrics: async () => {
      await delay(300);
      return { ...mockLeadScoreMetrics };
    },
    getLeadCountsByType: async () => {
      await delay(400);
      return { ...mockLeadCountsByType };
    },
    getTopRegionsBySector: async () => {
      await delay(500);
      return [...mockTopRegionsBySector];
    }
  }
};
