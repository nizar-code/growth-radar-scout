
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Settings, Edit } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>
        
        {/* Workflow Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Workflow</CardTitle>
            <button className="p-2 hover:bg-accent rounded-full">
              <Edit size={18} className="text-muted-foreground" />
            </button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between max-w-3xl mx-auto py-6">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="text-sm">✓</span>
                  </div>
                </div>
                <span className="mt-2 text-sm text-center">Review Sources</span>
              </div>
              
              <div className="w-16 h-0.5 bg-primary"></div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="text-sm">✓</span>
                  </div>
                </div>
                <span className="mt-2 text-sm text-center">Assign Lead</span>
              </div>
              
              <div className="w-16 h-0.5 bg-primary"></div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="text-sm">✓</span>
                  </div>
                </div>
                <span className="mt-2 text-sm text-center">Email Pitch</span>
              </div>
              
              <div className="w-16 h-0.5 bg-primary"></div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="text-sm">✓</span>
                  </div>
                </div>
                <span className="mt-2 text-sm text-center">Follow up Call</span>
              </div>
              
              <div className="w-16 h-0.5 bg-primary"></div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="text-sm">✓</span>
                  </div>
                </div>
                <span className="mt-2 text-sm text-center">Send to Salesforce</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Ideal Customer Profile Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Ideal Customer Profile (ICP)</CardTitle>
            <button className="p-2 hover:bg-accent rounded-full">
              <Edit size={18} className="text-muted-foreground" />
            </button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Fit (Demographic)</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Category</TableHead>
                      <TableHead className="w-[500px]">Description</TableHead>
                      <TableHead className="w-[100px] text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Industries</TableCell>
                      <TableCell>Tech, IT, Retail, Manufacturing, Business Services, Pharma, Semiconductor, Banking, Financial Services</TableCell>
                      <TableCell className="text-right">19</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Company size</TableCell>
                      <TableCell>50 - 200+ Employees</TableCell>
                      <TableCell className="text-right">2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Annual revenue</TableCell>
                      <TableCell>$50M - $100M</TableCell>
                      <TableCell className="text-right">7</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Funding stages</TableCell>
                      <TableCell>Series A, Series B, Series C +</TableCell>
                      <TableCell className="text-right">14</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Job function</TableCell>
                      <TableCell>CTO, CEO, CFO, HR Director, HR Lead</TableCell>
                      <TableCell className="text-right">20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Job level</TableCell>
                      <TableCell>Lead, Director +</TableCell>
                      <TableCell className="text-right">20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Actively hiring in</TableCell>
                      <TableCell>More than one country</TableCell>
                      <TableCell className="text-right">20</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Intent (Behavior)</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Category</TableHead>
                      <TableHead className="w-[500px]">Description</TableHead>
                      <TableHead className="w-[100px] text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Ad engagement</TableCell>
                      <TableCell>More than 3 times</TableCell>
                      <TableCell className="text-right">12</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Search terms</TableCell>
                      <TableCell>hiring abroad, hiring in *any*, employment laws</TableCell>
                      <TableCell className="text-right">20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Website visits in one day</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell className="text-right">10</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>AI chat</TableCell>
                      <TableCell>At least once</TableCell>
                      <TableCell className="text-right">20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Whitepaper download</TableCell>
                      <TableCell>At least one</TableCell>
                      <TableCell className="text-right">8</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Viewed demo</TableCell>
                      <TableCell>At least once</TableCell>
                      <TableCell className="text-right">12</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
