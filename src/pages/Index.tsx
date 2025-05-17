
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const IndexPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Master Dashboard</CardTitle>
          <CardDescription className="text-center">
            A comprehensive analytics platform for your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6">
            Track your sales performance, analyze customer behavior, and make data-driven decisions.
          </p>
          <div className="flex justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="w-full">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-500">
          © 2023 Master Dashboard. All rights reserved.
        </CardFooter>
      </Card>
    </div>
  );
};

export default IndexPage;
