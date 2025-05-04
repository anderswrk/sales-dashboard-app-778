
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  className?: string;
}

const MetricsCard = ({ title, value, change, icon, className }: MetricsCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className={cn("bg-white rounded-lg p-6 shadow-sm border", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-2 rounded-full bg-gray-50">{icon}</div>
      </div>
      <div className="mt-4 flex items-center">
        <div className={cn(
          "flex items-center text-sm font-medium",
          isPositive ? "text-green-600" : "text-red-600"
        )}>
          {isPositive ? (
            <ArrowUp className="h-4 w-4 mr-1" />
          ) : (
            <ArrowDown className="h-4 w-4 mr-1" />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
        <span className="text-gray-500 text-sm ml-2">vs last month</span>
      </div>
    </div>
  );
};

export default MetricsCard;
