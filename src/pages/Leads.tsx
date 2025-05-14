
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MoreHorizontal, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock lead data 
const mockLeads = [
  {
    id: 1,
    name: 'TechInnovators Inc.',
    country: 'us',
    status: 'New',
  },
  {
    id: 2,
    name: 'Innovate IT',
    country: 'gb',
    status: 'New',
  },
  {
    id: 3,
    name: 'Future Tech',
    country: 'dk',
    status: 'New',
  },
  {
    id: 4,
    name: 'Planitech',
    country: 'es',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Erogeniscience',
    country: 'se',
    status: 'Active',
  },
  {
    id: 6,
    name: 'Techtronics',
    country: 'cn',
    status: 'Active',
  },
  {
    id: 7,
    name: 'DataLink',
    country: 'cz',
    status: 'Active',
  },
  {
    id: 8,
    name: 'CloudMatrix',
    country: 'ca',
    status: 'At Risk',
  },
];

// Lead details component for when a lead is selected
const LeadDetails = ({ lead }: { lead: typeof mockLeads[0] }) => (
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
        <Button className="gap-2">
          Generate Pitch <ArrowRight size={16} />
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-card/50 border border-border">
        <CardContent className="p-4">
          <div className="flex justify-between py-2">
            <div className="text-sm text-muted-foreground">Engaged</div>
            <div>Multiple Channels</div>
          </div>
          <div className="flex justify-between py-2">
            <div className="text-sm text-muted-foreground">Last Engaged</div>
            <div>2 hours ago</div>
          </div>
          <div className="flex justify-between py-2">
            <div className="text-sm text-muted-foreground">Next Steps</div>
            <div>Send Email Pitch</div>
          </div>
          <div className="flex justify-between py-2">
            <div className="text-sm text-muted-foreground">Priority</div>
            <Badge variant="outline" className="bg-red-600/20 text-red-400 border-red-600/20">High</Badge>
          </div>
          <div className="flex justify-between py-2">
            <div className="text-sm text-muted-foreground">Sources</div>
            <div className="flex gap-2">
              <span className="text-blue-400">LinkedIn</span>
              <span className="text-blue-400">Glassdoor</span>
              <Button variant="link" size="sm" className="p-0 text-sm text-primary h-auto">
                See Details <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Lead Scores</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm">Fit Score</span>
            <span className="font-medium">89%</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: '89%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm">Intent Score</span>
            <span className="font-medium">78%</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: '78%' }}></div>
          </div>
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
  </div>
);

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
