
import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800 mr-6">Sales Dashboard</h1>
        <div className="hidden md:block">
          <Input 
            className="w-64" 
            type="text" 
            placeholder="Search..." 
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>
        <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
          <User className="h-5 w-5 text-gray-600" />
          <span className="hidden md:inline text-sm font-medium text-gray-700">Admin</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
