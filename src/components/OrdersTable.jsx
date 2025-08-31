import React from 'react';

const OrdersTable = ({ orders, loading, compact = false }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="text-sm text-gray-500 mt-2">Loading orders...</p>
        </div>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 text-sm">
        No orders available
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-2 sm:px-3 lg:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-2 sm:px-3 lg:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-2 sm:px-3 lg:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-2 sm:px-3 lg:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-2 sm:px-3 lg:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Qty
              </th>
              <th className="px-2 sm:px-3 lg:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-2 sm:px-3 lg:px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, index) => (
              <tr key={order.OrderID || index} className="hover:bg-gray-50">
                <td className="px-2 sm:px-3 lg:px-4 py-2 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                  #{order.OrderID}
                </td>
                <td className="px-2 sm:px-3 lg:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                  {order.CustomerName}
                </td>
                <td className="px-2 sm:px-3 lg:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                  {order.ProductName}
                </td>
                <td className="px-2 sm:px-3 lg:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    order.Category === 'Electronics' ? 'bg-blue-100 text-blue-800' :
                    order.Category === 'Sports' ? 'bg-green-100 text-green-800' :
                    order.Category === 'Fashion' ? 'bg-purple-100 text-purple-800' :
                    order.Category === 'Books' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.Category}
                  </span>
                </td>
                <td className="px-2 sm:px-3 lg:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                  {order.Quantity}
                </td>
                <td className="px-2 sm:px-3 lg:px-4 py-2 whitespace-nowrap text-xs sm:text-sm font-medium text-green-600">
                  {formatCurrency(order.Amount_USD)}
                </td>
                <td className="px-2 sm:px-3 lg:px-4 py-2 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                  {formatDate(order.OrderDate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
