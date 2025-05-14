import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Bold, Italic, Link, List, ListOrdered, ThumbsDown, ThumbsUp, RotateCw, ArrowDown, Copy, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GeneratePitchEmail = () => {
  const navigate = useNavigate();
  const [emailSubject, setEmailSubject] = useState('Unlock Global Growth Effortlessly with AI-Powered EOR');
  const [emailBody, setEmailBody] = useState(`Hi [Name],

Considering expanding your business into new international markets? It can be complex and time-consuming to navigate local employment laws, payroll, and HR. That's where G-P can help.

We are a global Employer of Record (EOR) platform designed to make international hiring quick and easy. Our AI-powered platform handles all the heavy lifting: from ensuring compliance in different countries to managing`);
  const [buttonText, setButtonText] = useState('Sign up now');
  const [charCount, setCharCount] = useState(emailBody.length);
  const maxChars = 180;

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setEmailBody(newText);
    setCharCount(newText.length);
  };

  const handleBack = () => {
    navigate('/leads');
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Generate Pitch Email</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compose Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold border-b border-border pb-2">Compose</h2>
            
            <div className="space-y-2">
              <label htmlFor="email-subject" className="text-sm text-muted-foreground">
                Email Subject
              </label>
              <Input 
                id="email-subject"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className="bg-card/60"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="email-body" className="text-sm text-muted-foreground">
                  Email Body
                </label>
                <span className="text-sm text-muted-foreground">
                  {charCount}/{maxChars}
                </span>
              </div>
              
              <div className="rounded-md border border-input bg-card/60">
                <div className="flex items-center gap-1 p-1 border-b border-input">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <span className="font-bold underline">T</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Link className="h-4 w-4" />
                  </Button>
                  <div className="mx-1 h-4 border-r border-input"></div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                </div>
                
                <Textarea 
                  value={emailBody}
                  onChange={handleBodyChange}
                  className="border-none min-h-[180px] resize-none focus-visible:ring-0"
                  maxLength={maxChars}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="button-text" className="text-sm text-muted-foreground">
                Button Text
              </label>
              <Input 
                id="button-text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
                className="bg-card/60"
              />
            </div>
            
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <Button variant="ghost" size="icon">
                <ThumbsUp className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ThumbsDown className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <RotateCw className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ArrowDown className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Preview Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold border-b border-border pb-2">Preview</h2>
            
            <div className="bg-white p-6 rounded-md text-black min-h-[500px] shadow-md">
              <div className="flex justify-center mb-6">
                <div className="text-gradient font-bold text-2xl flex items-center">
                  <svg viewBox="0 0 100 100" className="h-8 w-8 mr-2">
                    <circle cx="50" cy="50" r="40" stroke="url(#blue-gradient)" strokeWidth="4" fill="none" />
                    <defs>
                      <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4F46E5" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  GP
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <p>Hi Sarah,</p>
                
                <p>
                  Considering expanding your business into new international markets? It can be complex and time-consuming to navigate local employment laws, payroll, and HR. That's where G-P can help.
                </p>
                
                <p>
                  We are a global Employer of Record (EOR) platform designed to make international hiring quick and easy. Our AI-powered platform handles all the heavy lifting: from ensuring compliance in different countries to managing payroll, benefits, and onboarding – saving you significant time and money. You can focus on your core business while we seamlessly build your global team.
                </p>
                
                <div className="mt-8">
                  <p className="font-medium">Ready to experience effortless global expansion?</p>
                  <p>Sign up for a free trial today and see how we can simplify your international hiring so you can build your global team with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-8 gap-4">
          <Button variant="outline" onClick={handleBack}>
            Back
          </Button>
          <Button className="gap-2">
            <Send className="h-4 w-4" /> Send
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GeneratePitchEmail;
