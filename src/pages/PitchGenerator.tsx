
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const PitchGenerator = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-5xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-6">Pitch Generator</h1>
        </div>

        <div className="space-y-8">
          {/* Starter Prompts Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Starter Prompts</h2>
            <div className="h-0.5 bg-border"></div>
            
            <Card className="p-6 bg-card/60">
              <div className="space-y-4">
                <p className="text-base">
                  Create an email sales pitch for hiring remotely that includes the following key points: reduced infrastructure 
                  costs, expanding your talent pool and improved employee satisfaction
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12H12.01M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Focus: United States</span>
                  </div>
                  <div className="ml-auto">
                    <Button size="icon" className="rounded-full bg-primary h-10 w-10">
                      <Mic className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Starter Templates Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Starter Templates</h2>
            <div className="h-0.5 bg-border"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Template 1 */}
              <Card className="overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-6 h-6 border border-primary/30 text-primary">
                      ◆
                    </div>
                    <h3 className="font-semibold">Expansion Opportunities</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur. Bibendum ullamcorper sit lectus nulla dictumst malesuada.
                  </p>
                  <div className="flex justify-start pt-2">
                    <Button variant="outline" className="gap-2">
                      Generate Pitch <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-64 bg-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Business person with tablet" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Template 2 */}
              <Card className="overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-6 h-6 border border-primary/30 text-primary">
                      ◆
                    </div>
                    <h3 className="font-semibold">Tailored Outreach Emails</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur. Bibendum ullamcorper sit lectus nulla dictumst malesuada.
                  </p>
                  <div className="flex justify-start pt-2">
                    <Button variant="outline" className="gap-2">
                      Select Template <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-64 bg-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Business person with tablet" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PitchGenerator;
