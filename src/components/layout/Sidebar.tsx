
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  MapPin, 
  Users, 
  Activity, 
  Settings, 
  BarChart2,
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem = ({ icon, label, active, href }: SidebarItemProps) => (
  <Link 
    to={href} 
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
      active ? "bg-primary text-primary-foreground" : "hover:bg-accent text-muted-foreground hover:text-foreground"
    )}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
);

export function Sidebar() {
  // Get current path to determine active link
  const path = window.location.pathname;

  return (
    <div className="border-r w-full md:w-64 flex flex-col bg-card">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-gradient">Lead Explorer</h1>
      </div>
      
      <div className="p-2">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search companies..."
            className="w-full rounded-md pl-9 py-2 bg-accent/50 border-none focus:ring-1 focus:ring-primary text-sm"
          />
        </div>
      </div>
      
      <nav className="flex-1 p-2 space-y-1">
        <SidebarItem 
          icon={<BarChart2 size={18} />} 
          label="Dashboard" 
          href="/"
          active={path === '/'}
        />
        <SidebarItem 
          icon={<TrendingUp size={18} />} 
          label="Growth Signals" 
          href="/signals"
          active={path === '/signals'}
        />
        <SidebarItem 
          icon={<MapPin size={18} />} 
          label="Geographic Expansion" 
          href="/expansion"
          active={path === '/expansion'}
        />
        <SidebarItem 
          icon={<Users size={18} />} 
          label="Hiring Surge" 
          href="/hiring"
          active={path === '/hiring'}
        />
        <SidebarItem 
          icon={<Activity size={18} />} 
          label="Lead Tracker" 
          href="/tracker"
          active={path === '/tracker'}
        />
      </nav>
      
      <div className="mt-auto p-2">
        <SidebarItem 
          icon={<Settings size={18} />} 
          label="Settings" 
          href="/settings"
          active={path === '/settings'}
        />
      </div>
    </div>
  );
}
