
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, Users, Star, StarOff } from 'lucide-react';

export interface CompanyProps {
  id: string;
  name: string;
  logo: string;
  industry: string;
  expansionLocations?: string[];
  hiringCount?: number;
  growthRate?: number;
  saved?: boolean;
}

export function CompanyCard({ 
  name, 
  logo, 
  industry, 
  expansionLocations = [], 
  hiringCount, 
  growthRate,
  saved = false
}: CompanyProps) {
  const [isSaved, setIsSaved] = React.useState(saved);

  return (
    <Card className="overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded bg-muted flex items-center justify-center overflow-hidden">
            {logo ? (
              <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
            ) : (
              <span className="font-bold text-lg">{name.charAt(0)}</span>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{name}</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8" 
                onClick={() => setIsSaved(!isSaved)}
              >
                {isSaved ? <Star className="h-4 w-4 text-amber-400" fill="#fbbf24" /> : <StarOff className="h-4 w-4" />}
              </Button>
            </div>
            <Badge variant="outline" className="mt-1 bg-accent/50">
              {industry}
            </Badge>
          </div>
        </div>
        
        <div className="mt-4 space-y-3">
          {expansionLocations.length > 0 && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm">Expanding to: {expansionLocations.join(", ")}</span>
            </div>
          )}
          
          {hiringCount !== undefined && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm">Hiring {hiringCount}+ professionals</span>
            </div>
          )}
          
          {growthRate !== undefined && (
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm">{growthRate}% growth rate</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="border-t p-3 flex gap-2 justify-end">
        <Button variant="outline" size="sm">View Details</Button>
        <Button size="sm">Contact</Button>
      </div>
    </Card>
  );
}
