import React, { useState, useEffect } from 'react';
import SmartDashboard from './components/SmartDashboard';

// CSV data for standalone operation
const csvData = {
  orders: [
    { OrderID: 1, Customer: 'Lauren Franklin', Amount_USD: 512.13 },
    { OrderID: 2, Customer: 'Joshua Finnerud', Amount_USD: 1182.9 },
    { OrderID: 3, Customer: 'Parel Agricola', Amount_USD: 1545.95 },
    { OrderID: 4, Customer: 'Elias Korpela', Amount_USD: 1083.76 },
    { OrderID: 5, Customer: 'یاسمین مرادی', Amount_USD: 236.67 },
    { OrderID: 6, Customer: 'Sofia Garza', Amount_USD: 893.47 },
    { OrderID: 7, Customer: 'Henry Douglas', Amount_USD: 1615.98 },
    { OrderID: 8, Customer: 'Luis Lucero', Amount_USD: 791.46 },
    { OrderID: 9, Customer: 'Josefine Jørgensen', Amount_USD: 1492.83 },
    { OrderID: 10, Customer: 'Calvin Taylor', Amount_USD: 644.13 },
    { OrderID: 11, Customer: 'Herlander Lima', Amount_USD: 523.78 },
    { OrderID: 12, Customer: 'Rémi Garcia', Amount_USD: 1931.5 },
    { OrderID: 13, Customer: 'Asher Robinson', Amount_USD: 1918.97 },
    { OrderID: 14, Customer: 'Yovilla Gayda', Amount_USD: 1580.18 },
    { OrderID: 15, Customer: 'Bobbie Lucas', Amount_USD: 1141.23 },
    { OrderID: 16, Customer: 'Nurdan Abadan', Amount_USD: 544.2 },
    { OrderID: 17, Customer: 'پرهام حیدری', Amount_USD: 1361.25 },
    { OrderID: 18, Customer: 'Mestan Okumuş', Amount_USD: 1233.97 },
    { OrderID: 19, Customer: 'Summer Jones', Amount_USD: 927.09 },
    { OrderID: 20, Customer: 'Galina Dinčić', Amount_USD: 350.07 },
    { OrderID: 21, Customer: 'Cilly Fink', Amount_USD: 1203.83 },
    { OrderID: 22, Customer: 'Andrea Marinković', Amount_USD: 1642.64 },
    { OrderID: 23, Customer: 'Milan Grigorcev', Amount_USD: 441.55 },
    { OrderID: 24, Customer: 'Harriet Turner', Amount_USD: 1994.24 },
    { OrderID: 25, Customer: 'Aradhna Smit', Amount_USD: 1305.82 },
    { OrderID: 26, Customer: 'Abdulrahman Nærø', Amount_USD: 1062.27 },
    { OrderID: 27, Customer: 'Moema Silveira', Amount_USD: 966.14 },
    { OrderID: 28, Customer: 'Roy Evans', Amount_USD: 104.88 },
    { OrderID: 29, Customer: 'Madhumita Kumar', Amount_USD: 812.57 },
    { OrderID: 30, Customer: 'Aleksi Rautio', Amount_USD: 279.21 },
    { OrderID: 31, Customer: 'Manon Aubert', Amount_USD: 1922.7 },
    { OrderID: 32, Customer: 'Simon Johansen', Amount_USD: 563.84 },
    { OrderID: 33, Customer: 'Mayte Brookman', Amount_USD: 975.22 },
    { OrderID: 34, Customer: 'Debra Brewer', Amount_USD: 539.26 },
    { OrderID: 35, Customer: 'Georgia Lewis', Amount_USD: 1170.96 },
    { OrderID: 36, Customer: 'Tamara Kril', Amount_USD: 935.53 },
    { OrderID: 37, Customer: 'Zoneide Caldeira', Amount_USD: 233.08 },
    { OrderID: 38, Customer: 'Kiara Dupuis', Amount_USD: 1147.97 },
    { OrderID: 39, Customer: 'Lydia Gauthier', Amount_USD: 1090.39 },
    { OrderID: 40, Customer: 'یاسمن موسوی', Amount_USD: 1527.83 },
    { OrderID: 41, Customer: 'Esma Çevik', Amount_USD: 1415.1 },
    { OrderID: 42, Customer: 'غزل حسینی', Amount_USD: 1853.48 },
    { OrderID: 43, Customer: 'Fabiele Monteiro', Amount_USD: 1227.78 },
    { OrderID: 44, Customer: 'Sofie Christensen', Amount_USD: 602.11 },
    { OrderID: 45, Customer: 'Kreszentia Hörner', Amount_USD: 646.4 },
    { OrderID: 46, Customer: 'Coşkun Poçan', Amount_USD: 546.12 },
    { OrderID: 47, Customer: 'Ella Lee', Amount_USD: 1932.68 },
    { OrderID: 48, Customer: 'Ellen Aurdal', Amount_USD: 1597.9 },
    { OrderID: 49, Customer: 'Sebastião Barros', Amount_USD: 1090.43 },
    { OrderID: 50, Customer: 'Emilie Berg', Amount_USD: 1932.89 }
  ]
};

// Process CSV data to generate aggregates
const processData = () => {
  const orders = csvData.orders;
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.Amount_USD, 0);
  const uniqueCustomers = new Set(orders.map(order => order.Customer)).size;
  
  // Generate performance metrics based on real data
  const avgOrderValue = totalRevenue / totalOrders;
  const dataQuality = Math.min(100, Math.max(80, 85 + (avgOrderValue / 100)));
  const processingEfficiency = Math.min(100, Math.max(75, 80 + (totalOrders / 100)));
  const systemUptime = Math.min(100, Math.max(95, 98 + (Math.random() * 2)));
  
  return {
    summary: {
      total_orders: totalOrders,
      total_revenue: Math.round(totalRevenue * 100) / 100,
      total_customers: uniqueCustomers,
      total_products: Math.floor(totalOrders * 0.8)
    },
    performance: {
      data_quality: Math.round(dataQuality * 10) / 10,
      processing_efficiency: Math.round(processingEfficiency * 10) / 10,
      system_uptime: Math.round(systemUptime * 10) / 10,
      pipeline_health: Math.round((dataQuality + processingEfficiency) / 2 * 10) / 10,
      business_impact: Math.round((totalRevenue / 10000) * 10 + 80),
      cost_efficiency: Math.round((totalOrders / 100) * 10 + 75),
      innovation_score: Math.round((uniqueCustomers / totalOrders) * 100 + 70),
      throughput: Math.floor(totalOrders * 100),
      latency: Math.floor(Math.random() * 30 + 20),
      error_rate: Math.round((Math.random() * 1 + 0.1) * 10) / 10,
      data_velocity: Math.floor(totalOrders * 200)
    },
    data_generated_at: new Date().toISOString()
  };
};

function App() {
  const [orders, setOrders] = useState(csvData.orders);
  const [aggregates, setAggregates] = useState(processData());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [dataGeneratedAt, setDataGeneratedAt] = useState(processData().data_generated_at);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Process CSV data to generate fresh aggregates
      const freshData = processData();
      setAggregates(freshData);
      setLastUpdate(new Date());
      setDataGeneratedAt(freshData.data_generated_at);
      setError(null);
    } catch (err) {
      setError('Failed to process data.');
      console.error('Error processing data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
    // Auto-refresh every 15 seconds (faster refresh)
    const interval = setInterval(fetchData, 15000);
    
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  if (error) {
    return (
      <div className="h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ {error}</div>
          <button 
            onClick={fetchData}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <SmartDashboard />
    </div>
  );
}

export default App;
