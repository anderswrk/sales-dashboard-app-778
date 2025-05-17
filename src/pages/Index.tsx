
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const IndexPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Master Dashboard</CardTitle>
          <CardDescription className="text-center">
            Comprehensive analytics for your business
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Dashboard Preview" 
            className="w-full h-48 object-cover rounded-md"
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/dashboard">
            <Button size="lg" className="w-full">
              Enter Dashboard
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default IndexPage;
