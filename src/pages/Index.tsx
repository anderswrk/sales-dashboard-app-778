
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const IndexPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-700">Master Dashboard</CardTitle>
          <CardDescription className="text-gray-600">
            Your complete sales analytics platform
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Track your sales performance, analyze customer behavior, and make data-driven decisions with our comprehensive dashboard.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-semibold text-blue-700">Real-time Data</span>
              <span className="text-sm text-gray-600">Live updates</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-semibold text-blue-700">Insights</span>
              <span className="text-sm text-gray-600">Smart analytics</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-semibold text-blue-700">Reports</span>
              <span className="text-sm text-gray-600">Export & share</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-semibold text-blue-700">Customizable</span>
              <span className="text-sm text-gray-600">Your preferences</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleGetStarted} 
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default IndexPage;
