
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Edit, MoreHorizontal, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

// Mock lead data 
const mockLeads = [
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
  },
];

// Lead details component for when a lead is selected
const LeadDetails = ({ lead }: { lead: typeof mockLeads[0] }) => {
  const navigate = useNavigate();

  const handleGeneratePitch = () => {
    navigate('/generate-pitch-email');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-primary">
              <img 
                src={`https://flagcdn.com/${lead.country}.svg`} 
                className="w-full h-full object-cover"
                alt={`${lead.country} flag`}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-xs text-white px-2 py-0.5 rounded-full">
              {lead.status}
            </div>
          </div>
          <h2 className="text-2xl font-bold">{lead.name}</h2>
          <Badge variant="outline" className="bg-blue-600/20 text-blue-400 border-blue-600/20">
            New
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <MoreHorizontal size={16} />
          </Button>
          <Button className="gap-2" onClick={handleGeneratePitch}>
            Generate Pitch <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Lead Scores</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-accent/50 rounded-lg">
              <div className="text-sm text-muted-foreground">Fit Score</div>
              <div className="text-2xl font-semibold mt-1">89</div>
            </div>
            <div className="p-4 bg-accent/50 rounded-lg">
              <div className="text-sm text-muted-foreground">Intent Score</div>
              <div className="text-2xl font-semibold mt-1">78</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">ICP Matching Criteria</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-border py-3">
              <span className="text-sm">Ideal Customer Profile</span>
              <div className="flex justify-between items-center gap-4">
                <span>Mid-sized technology companies seeking cloud solutions</span>
                <span className="text-green-500">✓</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-border py-3">
              <span className="text-sm">Geography</span>
              <div className="flex justify-between items-center gap-4">
                <span>North America</span>
                <span className="text-green-500">✓</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-border py-3">
              <span className="text-sm">Annual Revenue</span>
              <div className="flex justify-between items-center gap-4">
                <span>$50M - $100M</span>
                <span className="text-green-500">✓</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-border py-3">
              <span className="text-sm">Actively Hiring In</span>
              <div className="flex justify-between items-center gap-4">
                <span>Spain, Italy, France, Germany, Sweden, Ireland</span>
                <span className="text-green-500">✓</span>
              </div>
            </div>
          </div>
        </div>
      
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Company Information</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <Separator className="mb-4" />
          <div className="space-y-4">
            <div className="flex">
              <div className="w-1/3 text-muted-foreground">Company Name</div>
              <div>{lead.name}</div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-muted-foreground">Industry</div>
              <div>{lead.industry}</div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-muted-foreground">Location</div>
              <div>{lead.location}</div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-muted-foreground">Size</div>
              <div>{lead.size}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">Contact Details</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <Separator className="mb-4" />
          <div className="space-y-4">
            <div className="flex">
              <div className="w-1/3 text-muted-foreground">Contact Name</div>
              <div>{lead.contactName}</div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-muted-foreground">Email</div>
              <div>{lead.email}</div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-muted-foreground">Phone</div>
              <div>{lead.phone}</div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-muted-foreground">Job Title</div>
              <div>{lead.jobTitle}</div>
            </div>
            <div className="flex">
              <div className="w-1/3 text-muted-foreground">Level</div>
              <div>{lead.level}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState<typeof mockLeads[0] | null>(mockLeads[0]);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        <div className="lg:col-span-1 border-r border-border">
          <div className="p-4 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Leads</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search leads..."
                className="w-full rounded-md pl-9 py-2 bg-accent/50 border-none focus:ring-1 focus:ring-primary text-sm"
              />
            </div>

            <div className="space-y-2 overflow-y-auto flex-1">
              {mockLeads.map((lead) => (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className={cn(
                    "p-3 rounded-lg cursor-pointer transition-colors",
                    selectedLead?.id === lead.id
                      ? "bg-primary/20 border border-primary/30"
                      : "hover:bg-accent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
                        <img
                          src={`https://flagcdn.com/${lead.country}.svg`}
                          className="w-full h-full object-cover"
                          alt={`${lead.country} flag`}
                        />
                      </div>
                      <div
                        className={cn(
                          "absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background",
                          lead.status === "New" ? "bg-blue-500" :
                          lead.status === "Active" ? "bg-green-500" : "bg-red-500"
                        )}
                      ></div>
                    </div>
                    <div>
                      <div className="font-medium">{lead.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className={cn(
                          "h-2 w-2 rounded-full",
                          lead.status === "New" ? "bg-blue-500" :
                          lead.status === "Active" ? "bg-green-500" : "bg-red-500"
                        )}></span>
                        {lead.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 p-4">
          {selectedLead ? (
            <LeadDetails lead={selectedLead} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-xl mb-2">No lead selected</h2>
                <p className="text-muted-foreground">Select a lead from the list to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
