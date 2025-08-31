// API configuration for both development and production
const isDevelopment = process.env.NODE_ENV === 'development';

// Use local backend in development, deployed backend in production
const API_BASE_URL = isDevelopment 
  ? 'http://localhost:8000' 
  : 'https://priyanga.pythonanywhere.com';

export const api = {
  async getOrders() {
    const response = await fetch(`${API_BASE_URL}/orders`);
    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }
    return response.json();
  },

  async getAggregates() {
    const response = await fetch(`${API_BASE_URL}/aggregates`);
    if (!response.ok) {
      throw new Error('Failed to fetch aggregates');
    }
    return response.json();
  },

  async getHealth() {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) {
      throw new Error('Failed to fetch health status');
    }
    return response.json();
  },

  async getDashboardMetrics() {
    const response = await fetch(`${API_BASE_URL}/dashboard-metrics`);
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard metrics');
    }
    return response.json();
  },

  async getRealTimeData() {
    const response = await fetch(`${API_BASE_URL}/real-time-data`);
    if (!response.ok) {
      throw new Error('Failed to fetch real-time data');
    }
    return response.json();
  }
};
