
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">CORPORATE SALES DASHBOARD</h1>
        <p className="text-xl text-gray-600 mb-6">View your sales analytics and performance metrics</p>
        <Link to="/dashboard">
          <Button size="lg" className="font-medium">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
