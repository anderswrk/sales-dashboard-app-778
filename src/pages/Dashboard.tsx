
import React, { useState } from 'react';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';
import MetricsCard from '@/components/MetricsCard';
import SalesChart from '@/components/SalesChart';
import ProductPerformance from '@/components/ProductPerformance';
import RegionalSales from '@/components/RegionalSales';
import TopCustomers from '@/components/TopCustomers';
import DateRangePicker from '@/components/DateRangePicker';
import SalesByCategoryChart from '@/components/SalesByCategoryChart';

// Sample data
const salesData = [
  { name: 'Jan', value: 65000 },
  { name: 'Feb', value: 59000 },
  { name: 'Mar', value: 80000 },
  { name: 'Apr', value: 81000 },
  { name: 'May', value: 56000 },
  { name: 'Jun', value: 55000 },
  { name: 'Jul', value: 40000 },
  { name: 'Aug', value: 70000 },
  { name: 'Sep', value: 90000 },
  { name: 'Oct', value: 110000 },
  { name: 'Nov', value: 105000 },
  { name: 'Dec', value: 120000 },
];

const productData = [
  { name: 'Product A', value: 120000 },
  { name: 'Product B', value: 80000 },
  { name: 'Product C', value: 60000 },
  { name: 'Product D', value: 40000 },
  { name: 'Product E', value: 30000 },
];

const regionalData = [
  { name: 'North America', value: 420000 },
  { name: 'Europe', value: 280000 },
  { name: 'Asia', value: 190000 },
  { name: 'South America', value: 90000 },
  { name: 'Africa', value: 40000 },
];

const categoryData = [
  { name: 'Electronics', value: 350000 },
  { name: 'Clothing', value: 250000 },
  { name: 'Home & Garden', value: 180000 },
  { name: 'Sports', value: 120000 },
  { name: 'Books', value: 100000 },
];

const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', spent: 12500, orders: 5 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', spent: 9800, orders: 4 },
  { id: 3, name: 'Robert Johnson', email: 'robert@example.com', spent: 8700, orders: 3 },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', spent: 7600, orders: 3 },
  { id: 5, name: 'Michael Wilson', email: 'michael@example.com', spent: 6500, orders: 2 },
];

const Dashboard = () => {
  const [dateRange, setDateRange] = useState({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date(),
  });

  const handleDateChange = (range: { from: Date; to: Date }) => {
    setDateRange(range);
    // In a real app, you would fetch new data based on the date range
    console.log('Date range changed:', range);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Sales Overview</h2>
          <div className="w-full md:w-64">
            <DateRangePicker onDateChange={handleDateChange} />
          </div>
        </div>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricsCard 
            title="Total Revenue" 
            value="$1,024,500" 
            change={12.5} 
            icon={<DollarSign className="h-6 w-6 text-blue-500" />} 
          />
          <MetricsCard 
            title="Total Orders" 
            value="8,540" 
            change={5.2} 
            icon={<ShoppingCart className="h-6 w-6 text-green-500" />} 
          />
          <MetricsCard 
            title="Total Customers" 
            value="3,240" 
            change={-2.4} 
            icon={<Users className="h-6 w-6 text-orange-500" />} 
          />
          <MetricsCard 
            title="Conversion Rate" 
            value="3.2%" 
            change={1.1} 
            icon={<TrendingUp className="h-6 w-6 text-purple-500" />} 
          />
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SalesChart data={salesData} title="Sales Trend" />
          <ProductPerformance data={productData} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <RegionalSales data={regionalData} />
          <SalesByCategoryChart data={categoryData} />
        </div>
        
        {/* Top Customers */}
        <div className="mb-6">
          <TopCustomers customers={customers} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
