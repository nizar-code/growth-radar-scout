
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { expansionHotspots } from '@/services/mockData';
import { MapPin } from 'lucide-react';

export function ExpansionHotspots() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Top Expansion Hotspots</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expansionHotspots.map((item) => (
            <div key={item.location} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{item.location}</span>
              </div>
              <span className="font-medium text-sm">{item.count} companies</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
