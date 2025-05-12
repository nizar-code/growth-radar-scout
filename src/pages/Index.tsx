
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/ui/stat-card';
import { CompanyCard } from '@/components/companies/CompanyCard';
import { HiringTrendChart } from '@/components/charts/HiringTrendChart';
import { ExpansionHotspots } from '@/components/charts/ExpansionHotspots';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, MapPin, Users, BookMarked } from 'lucide-react';
import { mockCompanies, mockIndustries, growthMetrics } from '@/services/mockData';

const Index = () => {
  const [filterIndustry, setFilterIndustry] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const filteredCompanies = mockCompanies.filter(company => {
    return (
      (filterIndustry === 'all' || company.industry === filterIndustry) &&
      (!searchTerm || 
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (company.description && company.description.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  });
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total Leads" 
            value={growthMetrics.totalLeads}
            icon={<BookMarked className="h-5 w-5" />}
            trend={{ value: 12, positive: true }}
          />
          <StatCard 
            title="New Companies" 
            value={growthMetrics.newCompanies}
            icon={<TrendingUp className="h-5 w-5" />}
            trend={{ value: 8, positive: true }}
            subtitle="Last 30 days"
          />
          <StatCard 
            title="Saved Leads" 
            value={growthMetrics.savedLeads}
            icon={<BookMarked className="h-5 w-5" />}
            trend={{ value: 5, positive: true }}
          />
          <StatCard 
            title="Avg Growth Rate" 
            value={`${growthMetrics.averageGrowth}%`}
            icon={<TrendingUp className="h-5 w-5" />}
            trend={{ value: 2.5, positive: true }}
          />
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <HiringTrendChart />
          <ExpansionHotspots />
        </div>
        
        {/* Companies Section */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <h2 className="text-xl font-semibold">Companies with Growth Signals</h2>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Input 
                placeholder="Search companies..." 
                className="max-w-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Industries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {mockIndustries.map((industry) => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Signals</TabsTrigger>
              <TabsTrigger value="expanding">
                <MapPin className="h-4 w-4 mr-1" />
                Expanding
              </TabsTrigger>
              <TabsTrigger value="hiring">
                <Users className="h-4 w-4 mr-1" />
                Hiring
              </TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredCompanies.map((company) => (
                  <CompanyCard key={company.id} {...company} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="expanding" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredCompanies
                  .filter(company => company.expansionLocations && company.expansionLocations.length > 0)
                  .map((company) => (
                    <CompanyCard key={company.id} {...company} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="hiring" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredCompanies
                  .filter(company => company.hiringCount && company.hiringCount >= 150)
                  .map((company) => (
                    <CompanyCard key={company.id} {...company} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="saved" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredCompanies
                  .filter(company => company.saved)
                  .map((company) => (
                    <CompanyCard key={company.id} {...company} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 flex justify-center">
            <Button variant="outline">Load More Companies</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
