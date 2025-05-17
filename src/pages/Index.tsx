
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 mb-6">
          Master Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A comprehensive analytics platform for tracking and analyzing your sales performance metrics in real-time.
        </p>
        <Button 
          onClick={() => navigate('/dashboard')} 
          className="px-8 py-6 text-lg"
        >
          Go to Dashboard
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default IndexPage;
