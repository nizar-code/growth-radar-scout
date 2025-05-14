
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  BarChart, 
  Users, 
  User
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { API } from '@/services/api';

const LeadDashboard = () => {
  // Fetch score metrics
  const { data: scoreMetrics } = useQuery({
    queryKey: ['leadDashboard', 'scoreMetrics'],
    queryFn: API.leadDashboard.getScoreMetrics
  });
  
  // Fetch lead counts
  const { data: leadCounts } = useQuery({
    queryKey: ['leadDashboard', 'leadCounts'],
    queryFn: API.leadDashboard.getLeadCountsByType
  });
  
  // Fetch top regions by sector
  const { data: topRegions = [] } = useQuery({
    queryKey: ['leadDashboard', 'topRegions'],
    queryFn: API.leadDashboard.getTopRegionsBySector
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Lead Dashboard</h1>
        </div>
        
        {/* Score Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card/50 dark:bg-card/50 border border-border">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="flex flex-col items-center space-y-2">
                <BarChart className="h-8 w-8 text-primary" />
                <p className="text-sm text-muted-foreground">Fit Scores</p>
                <h2 className="text-4xl font-bold">{scoreMetrics?.fitScores || 0}%</h2>
                <div className="bg-green-600/20 text-green-600 text-xs px-2 py-1 rounded">
                  Up 28.4%
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 dark:bg-card/50 border border-border">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="flex flex-col items-center space-y-2">
                <BarChart className="h-8 w-8 text-primary" />
                <p className="text-sm text-muted-foreground">Intent Scores</p>
                <h2 className="text-4xl font-bold">{scoreMetrics?.intentScores || 0}%</h2>
                <div className="bg-green-600/20 text-green-600 text-xs px-2 py-1 rounded">
                  Up 32%
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 dark:bg-card/50 border border-border">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="flex flex-col items-center space-y-2">
                <User className="h-8 w-8 text-primary" />
                <p className="text-sm text-muted-foreground">Match to Ideal Profile</p>
                <h2 className="text-4xl font-bold">{scoreMetrics?.idealProfileMatch || 0}%</h2>
                <div className="bg-green-600/20 text-green-600 text-xs px-2 py-1 rounded">
                  Up 26.5%
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* All Leads */}
          <Card className="bg-card/50 dark:bg-card/50 border border-border lg:col-span-3">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">All Leads</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span>New Leads</span>
                    <span className="ml-auto font-semibold">{leadCounts?.newLeads || 0}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>Active Leads</span>
                    <span className="ml-auto font-semibold">{leadCounts?.activeLeads || 0}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                    <span>Qualified</span>
                    <span className="ml-auto font-semibold">{leadCounts?.qualified || 0}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                    <span>Converted</span>
                    <span className="ml-auto font-semibold">{leadCounts?.converted || 0}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span>Intent: High</span>
                    <span className="ml-auto font-semibold">{leadCounts?.highIntent || 0}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <span>At Risk</span>
                    <span className="ml-auto font-semibold">{leadCounts?.atRisk || 0}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Top Regions by Sector */}
          <Card className="bg-card/50 dark:bg-card/50 border border-border lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Top Regions by Sector</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sector</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead className="text-right"># Leads</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topRegions.map((region, index) => (
                    <TableRow key={index}>
                      <TableCell>{region.sector}</TableCell>
                      <TableCell>{region.region}</TableCell>
                      <TableCell className="text-right">
                        <span className="bg-blue-600/20 text-blue-600 text-xs px-2 py-1 rounded">
                          {region.leadCount}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LeadDashboard;
