
import React from 'react';
import { Bell, User, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b p-4 bg-card flex items-center justify-between">
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Find Growth Opportunities</h2>
        <p className="text-muted-foreground text-sm">Discover companies with expansion signals</p>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        
        <div className="relative">
          <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </div>
        
        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <User className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
