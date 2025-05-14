
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PitchGenerator = () => {
  const navigate = useNavigate();
  
  const handleGeneratePitch = () => {
    navigate('/generate-pitch-email');
  };
  
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    Craft a pitch highlighting market growth potential and strategic expansion opportunities.
                  </p>
                  <div className="flex justify-start pt-2">
                    <Button variant="outline" className="gap-2" onClick={handleGeneratePitch}>
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
                    Create personalized outreach emails for different target audiences and industries.
                  </p>
                  <div className="flex justify-start pt-2">
                    <Button variant="outline" className="gap-2" onClick={handleGeneratePitch}>
                      Select Template <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-64 bg-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Email marketing" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Template 3 */}
              <Card className="overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-6 h-6 border border-primary/30 text-primary">
                      ◆
                    </div>
                    <h3 className="font-semibold">Follow-up Sequence</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Design a professional follow-up sequence for prospects who haven't responded.
                  </p>
                  <div className="flex justify-start pt-2">
                    <Button variant="outline" className="gap-2" onClick={handleGeneratePitch}>
                      Generate Sequence <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-64 bg-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
                    alt="Follow-up emails" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Template 4 */}
              <Card className="overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-6 h-6 border border-primary/30 text-primary">
                      ◆
                    </div>
                    <h3 className="font-semibold">Product Launch</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Create compelling pitches for new product launches highlighting key features and benefits.
                  </p>
                  <div className="flex justify-start pt-2">
                    <Button variant="outline" className="gap-2" onClick={handleGeneratePitch}>
                      Create Launch Pitch <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-64 bg-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="Product launch" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Template 5 */}
              <Card className="overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-6 h-6 border border-primary/30 text-primary">
                      ◆
                    </div>
                    <h3 className="font-semibold">Partnership Proposal</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Develop strategic partnership proposals highlighting mutual benefits and opportunities.
                  </p>
                  <div className="flex justify-start pt-2">
                    <Button variant="outline" className="gap-2" onClick={handleGeneratePitch}>
                      Create Proposal <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-64 bg-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="Business partnership" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Template 6 */}
              <Card className="overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-6 h-6 border border-primary/30 text-primary">
                      ◆
                    </div>
                    <h3 className="font-semibold">Recruitment Outreach</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Create compelling recruitment outreach emails to attract top talent to your organization.
                  </p>
                  <div className="flex justify-start pt-2">
                    <Button variant="outline" className="gap-2" onClick={handleGeneratePitch}>
                      Generate Outreach <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="h-64 bg-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Recruitment" 
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
