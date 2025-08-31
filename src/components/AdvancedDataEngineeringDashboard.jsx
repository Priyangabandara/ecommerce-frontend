import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const AdvancedDataEngineeringDashboard = ({ ordersCount, revenue, lastUpdate, dataGeneratedAt, categoryData }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [performanceMetrics, setPerformanceMetrics] = useState({});

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const generateMetrics = () => {
      setPerformanceMetrics({
        dataQuality: Math.random() * 15 + 85,
        processingEfficiency: Math.random() * 20 + 80,
        systemUptime: Math.random() * 5 + 95,
        dataVelocity: Math.floor(Math.random() * 5000) + 10000,
        errorRate: Math.random() * 2 + 0.1,
        latency: Math.random() * 50 + 20,
        throughput: Math.floor(Math.random() * 2000) + 8000,
        pipelineHealth: Math.random() * 10 + 90,
        businessImpact: Math.random() * 20 + 80,
        costEfficiency: Math.random() * 25 + 75,
        innovationScore: Math.random() * 30 + 70
      });
    };

    generateMetrics();
    const interval = setInterval(generateMetrics, 10000);
    return () => clearInterval(interval);
  }, []);

  const pipelinePerformanceData = [
    {
      type: 'scatter3d',
      mode: 'lines+markers+text',
      x: [1, 2, 3, 4, 5, 6, 7, 8],
      y: [
        performanceMetrics.dataQuality || 90,
        performanceMetrics.processingEfficiency || 85,
        performanceMetrics.systemUptime || 98,
        performanceMetrics.pipelineHealth || 92,
        performanceMetrics.businessImpact || 85,
        performanceMetrics.costEfficiency || 82,
        performanceMetrics.innovationScore || 78,
        performanceMetrics.throughput || 9000
      ],
      z: [
        performanceMetrics.latency || 45,
        performanceMetrics.errorRate || 1.2,
        performanceMetrics.dataVelocity || 12000,
        performanceMetrics.systemUptime || 98,
        performanceMetrics.pipelineHealth || 92,
        performanceMetrics.dataQuality || 90,
        performanceMetrics.processingEfficiency || 85,
        performanceMetrics.businessImpact || 85
      ],
      text: [
        'Data Quality', 'Processing Efficiency', 'System Uptime', 'Pipeline Health',
        'Business Impact', 'Cost Efficiency', 'Innovation', 'Throughput'
      ],
      textposition: 'top center',
      line: { color: 'rgba(59, 130, 246, 0.9)', width: 8, shape: 'spline' },
      marker: {
        size: [20, 22, 24, 26, 28, 30, 32, 34],
        color: [
          'rgba(239, 68, 68, 0.9)', 'rgba(245, 158, 11, 0.9)', 'rgba(34, 197, 94, 0.9)',
          'rgba(59, 130, 246, 0.9)', 'rgba(168, 85, 247, 0.9)', 'rgba(6, 182, 212, 0.9)',
          'rgba(236, 72, 153, 0.9)', 'rgba(16, 185, 129, 0.9)'
        ],
        line: { color: '#FFFFFF', width: 3 }, symbol: 'diamond'
      },
      name: 'Pipeline Performance'
    }
  ];

  const pipelinePerformanceLayout = {
    title: {
      text: '🚀 3D Data Engineering Pipeline Performance Matrix',
      font: { size: 20, color: '#1F2937', family: 'Inter, sans-serif', weight: 'bold' },
      x: 0.5, xanchor: 'center'
    },
    scene: {
      xaxis: { title: 'Pipeline Stage', range: [0, 9] },
      yaxis: { title: 'Performance Score (%)', range: [75, 100] },
      zaxis: { title: 'Operational Metrics', range: [0, 15000] },
      camera: { eye: { x: 1.5, y: 1.5, z: 1.5 } }
    },
    paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 80, b: 40, l: 40, r: 40 }, height: 400, showlegend: false,
    // Clean performance zones
    shapes: [
      {
        type: 'rect',
        x0: -0.5, x1: 6.5, y0: 90, y1: 100,
        fillcolor: 'rgba(16, 185, 129, 0.05)',
        line: { width: 0 },
        layer: 'below'
      },
      {
        type: 'rect',
        x0: -0.5, x1: 6.5, y0: 80, y1: 90,
        fillcolor: 'rgba(245, 158, 11, 0.05)',
        line: { width: 0 },
        layer: 'below'
      },
      {
        type: 'rect',
        x0: -0.5, x1: 6.5, y0: 70, y1: 80,
        fillcolor: 'rgba(239, 68, 68, 0.05)',
        line: { width: 0 },
        layer: 'below'
      }
    ],
    annotations: [
      {
        x: 6.5, y: 95,
        xref: 'x', yref: 'y',
        text: '90-100%',
        showarrow: false,
        font: { size: 10, color: '#059669', weight: '500' },
        bgcolor: 'rgba(16, 185, 129, 0.1)',
        bordercolor: 'rgba(16, 185, 129, 0.2)',
        borderwidth: 1,
        borderpad: 4
      },
      {
        x: 6.5, y: 85,
        xref: 'x', yref: 'y',
        text: '80-89%',
        showarrow: false,
        font: { size: 10, color: '#D97706', weight: '500' },
        bgcolor: 'rgba(245, 158, 11, 0.1)',
        bordercolor: 'rgba(245, 158, 11, 0.2)',
        borderwidth: 1,
        borderpad: 4
      },
      {
        x: 6.5, y: 75,
        xref: 'x', yref: 'y',
        text: '70-79%',
        showarrow: false,
        font: { size: 10, color: '#DC2626', weight: '500' },
        bgcolor: 'rgba(239, 68, 68, 0.1)',
        bordercolor: 'rgba(239, 68, 68, 0.2)',
        borderwidth: 1,
        borderpad: 4
      }
    ]
  };

  const systemHealthData = [
    {
      type: 'indicator', mode: 'gauge+number+delta',
      value: performanceMetrics.pipelineHealth || 92,
      delta: { reference: 90, increasing: { color: '#10B981' }, decreasing: { color: '#EF4444' } },
      gauge: {
        axis: { range: [null, 100], tickwidth: 2, tickcolor: '#374151' },
        bar: { color: 'linear-gradient(90deg, #EF4444, #F59E0B, #10B981)', thickness: 0.9 },
        bgcolor: 'rgba(255,255,255,0.9)', borderwidth: 4, bordercolor: '#E5E7EB',
        steps: [
          { range: [0, 70], color: 'rgba(239, 68, 68, 0.2)' },
          { range: [70, 85], color: 'rgba(245, 158, 11, 0.2)' },
          { range: [85, 100], color: 'rgba(34, 197, 94, 0.2)' }
        ],
        threshold: { line: { color: '#EF4444', width: 5 }, thickness: 0.8, value: 90 }
      },
      title: { text: '🔄 Pipeline Health', font: { size: 16, color: '#374151', weight: 'bold' } },
      domain: { x: [0, 0.48], y: [0.6, 1] }
    },
    {
      type: 'indicator', mode: 'gauge+number+delta',
      value: performanceMetrics.dataQuality || 90,
      delta: { reference: 88, increasing: { color: '#10B981' }, decreasing: { color: '#EF4444' } },
      gauge: {
        axis: { range: [null, 100], tickwidth: 2, tickcolor: '#374151' },
        bar: { color: 'linear-gradient(90deg, #EF4444, #F59E0B, #10B981)', thickness: 0.9 },
        bgcolor: 'rgba(255,255,255,0.9)', borderwidth: 4, bordercolor: '#E5E7EB',
        steps: [
          { range: [0, 80], color: 'rgba(239, 68, 68, 0.2)' },
          { range: [80, 90], color: 'rgba(245, 158, 11, 0.2)' },
          { range: [90, 100], color: 'rgba(34, 197, 94, 0.2)' }
        ],
        threshold: { line: { color: '#EF4444', width: 5 }, thickness: 0.8, value: 92 }
      },
      title: { text: '📊 Data Quality', font: { size: 16, color: '#374151', weight: 'bold' } },
      domain: { x: [0.52, 1], y: [0.6, 1] }
    },
    {
      type: 'indicator', mode: 'number+delta',
      value: performanceMetrics.dataVelocity || 12000,
      delta: { reference: 10000, increasing: { color: '#10B981' }, decreasing: { color: '#EF4444' } },
      title: { text: '⚡ Data Velocity', font: { size: 16, color: '#374151', weight: 'bold' } },
      domain: { x: [0, 0.48], y: [0.2, 0.5] },
      number: { font: { size: 28, color: '#059669', weight: 'bold' }, valueformat: ',.0f', suffix: ' rec/s' }
    },
    {
      type: 'indicator', mode: 'number+delta',
      value: performanceMetrics.throughput || 9000,
      delta: { reference: 8000, increasing: { color: '#10B981' }, decreasing: { color: '#EF4444' } },
      title: { text: '🚀 Throughput', font: { size: 16, color: '#374151', weight: 'bold' } },
      domain: { x: [0.52, 1], y: [0.2, 0.5] },
      number: { font: { size: 28, color: '#7C3AED', weight: 'bold' }, valueformat: ',.0f', suffix: ' req/min' }
    },
    {
      type: 'indicator', mode: 'number+delta',
      value: performanceMetrics.latency || 45,
      delta: { reference: 50, increasing: { color: '#EF4444' }, decreasing: { color: '#10B981' } },
      title: { text: '⏱️ Latency', font: { size: 16, color: '#374151', weight: 'bold' } },
      domain: { x: [0, 0.48], y: [-0.2, 0.1] },
      number: { font: { size: 24, color: '#DC2626', weight: 'bold' }, valueformat: ',.0f', suffix: ' ms' }
    },
    {
      type: 'indicator', mode: 'number+delta',
      value: performanceMetrics.errorRate || 1.2,
      delta: { reference: 1.5, increasing: { color: '#EF4444' }, decreasing: { color: '#10B981' } },
      title: { text: '❌ Error Rate', font: { size: 16, color: '#374151', weight: 'bold' } },
      domain: { x: [0.52, 1], y: [-0.2, 0.1] },
      number: { font: { size: 24, color: '#EA580C', weight: 'bold' }, valueformat: '.2f', suffix: '%' }
    }
  ];

  const systemHealthLayout = {
    title: {
      text: '⚡ Enterprise System Health & Performance Monitor',
      font: { size: 20, color: '#1F2937', family: 'Inter, sans-serif', weight: 'bold' },
      x: 0.5, xanchor: 'center'
    },
    font: { size: 12, family: 'Inter, sans-serif' },
    paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 80, b: 40, l: 40, r: 40 }, height: 500, showlegend: false
  };

  const realTimeMetricsData = [
    {
      type: 'scatter', mode: 'lines+markers',
      x: Array.from({ length: 20 }, (_, i) => i),
      y: Array.from({ length: 20 }, () => Math.random() * 20 + 80),
      line: { color: 'rgba(34, 197, 94, 0.9)', width: 4, shape: 'spline' },
      marker: { size: 8, color: 'rgba(34, 197, 94, 0.9)', line: { color: '#FFFFFF', width: 2 } },
      name: 'Data Quality Score', yaxis: 'y'
    },
    {
      type: 'scatter', mode: 'lines+markers',
      x: Array.from({ length: 20 }, (_, i) => i),
      y: Array.from({ length: 20 }, () => Math.random() * 30 + 70),
      line: { color: 'rgba(59, 130, 246, 0.9)', width: 4, shape: 'spline' },
      marker: { size: 8, color: 'rgba(59, 130, 246, 0.9)', line: { color: '#FFFFFF', width: 2 } },
      name: 'Processing Efficiency', yaxis: 'y2'
    },
    {
      type: 'scatter', mode: 'lines+markers',
      x: Array.from({ length: 20 }, (_, i) => i),
      y: Array.from({ length: 20 }, () => Math.random() * 10 + 90),
      line: { color: 'rgba(168, 85, 247, 0.9)', width: 4, shape: 'spline' },
      marker: { size: 8, color: 'rgba(168, 85, 247, 0.9)', line: { color: '#FFFFFF', width: 2 } },
      name: 'System Uptime', yaxis: 'y3'
    }
  ];

  const realTimeMetricsLayout = {
    title: {
      text: '📈 Real-time Performance Metrics (Last 20 Updates)',
      font: { size: 18, color: '#1F2937', family: 'Inter, sans-serif', weight: 'bold' },
      x: 0.5, xanchor: 'center'
    },
    xaxis: {
      title: { text: 'Time Sequence', font: { size: 14, color: '#6B7280', weight: 'bold' } },
      tickfont: { size: 12, weight: 'bold' }, showgrid: true, gridcolor: 'rgba(107, 114, 128, 0.1)'
    },
    yaxis: {
      title: { text: 'Data Quality (%)', font: { size: 14, color: '#10B981', weight: 'bold' } },
      range: [75, 100], tickfont: { size: 12 }, showgrid: true, gridcolor: 'rgba(34, 197, 94, 0.1)'
    },
    yaxis2: {
      title: { text: 'Processing Efficiency (%)', font: { size: 14, color: '#3B82F6', weight: 'bold' } },
      overlaying: 'y', side: 'right', range: [65, 100], tickfont: { size: 12 }
    },
    yaxis3: {
      title: { text: 'System Uptime (%)', font: { size: 14, color: '#8B5CF6', weight: 'bold' } },
      overlaying: 'y', side: 'right', range: [85, 100], tickfont: { size: 12 }, position: 0.95
    },
    paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 80, b: 80, l: 80, r: 80 }, height: 350, showlegend: true,
    legend: { x: 0.02, y: 0.98, bgcolor: 'rgba(255,255,255,0.9)', bordercolor: 'rgba(0,0,0,0.1)', borderwidth: 1, font: { size: 12, weight: 'bold' } },
    hovermode: 'closest'
  };

  const businessImpactData = [
    {
      type: 'indicator', mode: 'gauge+number+delta',
      value: performanceMetrics.businessImpact || 85,
      delta: { reference: 80, increasing: { color: '#10B981' }, decreasing: { color: '#EF4444' } },
      gauge: {
        axis: { range: [null, 100], tickwidth: 2, tickcolor: '#374151' },
        bar: { color: 'linear-gradient(90deg, #EF4444, #F59E0B, #10B981)', thickness: 0.9 },
        bgcolor: 'rgba(255,255,255,0.9)', borderwidth: 4, bordercolor: '#E5E7EB',
        steps: [
          { range: [0, 70], color: 'rgba(239, 68, 68, 0.2)' },
          { range: [70, 85], color: 'rgba(245, 158, 11, 0.2)' },
          { range: [85, 100], color: 'rgba(34, 197, 94, 0.2)' }
        ],
        threshold: { line: { color: '#EF4444', width: 5 }, thickness: 0.8, value: 85 }
      },
      title: { text: '💼 Business Impact Score', font: { size: 16, color: '#374151', weight: 'bold' } },
      domain: { x: [0, 1], y: [0.6, 1] }
    },
    {
      type: 'indicator', mode: 'number+delta',
      value: performanceMetrics.costEfficiency || 82,
      delta: { reference: 80, increasing: { color: '#10B981' }, decreasing: { color: '#EF4444' } },
      title: { text: '💰 Cost Efficiency', font: { size: 16, color: '#374151', weight: 'bold' } },
      domain: { x: [0, 0.48], y: [0.2, 0.5] },
      number: { font: { size: 28, color: '#059669', weight: 'bold' }, valueformat: ',.0f', suffix: '%' }
    },
    {
      type: 'indicator', mode: 'number+delta',
      value: performanceMetrics.innovationScore || 78,
      delta: { reference: 75, increasing: { color: '#10B981' }, decreasing: { color: '#EF4444' } },
      title: { text: '🚀 Innovation Score', font: { size: 16, color: '#374151', weight: 'bold' } },
      domain: { x: [0.52, 1], y: [0.2, 0.5] },
      number: { font: { size: 28, color: '#7C3AED', weight: 'bold' }, valueformat: ',.0f', suffix: '%' }
    }
  ];

  const businessImpactLayout = {
    title: {
      text: '🎯 Business Value & Innovation Metrics',
      font: { size: 18, color: '#1F2937', family: 'Inter, sans-serif', weight: 'bold' },
      x: 0.5, xanchor: 'center'
    },
    font: { size: 12, family: 'Inter, sans-serif' },
    paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 80, b: 40, l: 40, r: 40 }, height: 400, showlegend: false
  };

  const categoryChartData = [
    {
      type: 'treemap',
      labels: categoryData?.map(cat => cat.Category) || ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'],
      parents: (categoryData?.map(() => '') || ['', '', '', '', '']),
      values: categoryData?.map(cat => cat.total_revenue) || [25000, 18000, 12000, 15000, 8000],
      textinfo: 'label+value+percent parent',
      textfont: { size: 16, color: '#FFFFFF', weight: 'bold' },
      textposition: 'middle center',
      marker: {
        colors: [
          'rgba(99, 102, 241, 0.95)', 'rgba(34, 197, 94, 0.95)', 'rgba(245, 158, 11, 0.95)',
          'rgba(239, 68, 68, 0.95)', 'rgba(168, 85, 247, 0.95)'
        ],
        line: { color: 'rgba(255,255,255,0.9)', width: 3 }
      },
      hovertemplate: '<b>%{label}</b><br>Revenue: $%{value:,.0f}<br>Share: %{percentParent:.1%}<extra></extra>'
    }
  ];

  const categoryLayout = {
    title: {
      text: '📊 Revenue Distribution by Category',
      font: { size: 18, color: '#1F2937', family: 'Inter, sans-serif', weight: 'bold' },
      x: 0.5, xanchor: 'center'
    },
    paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 80, b: 40, l: 40, r: 40 }, height: 350, hovermode: 'closest'
  };

  return (
    <div className="h-full">
      {/* Main Dashboard Grid - Only 2 Charts */}
      <div className="grid grid-cols-2 gap-8 h-full">
        {/* Left Chart - 3D Pipeline Performance */}
        <div className="bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 rounded-3xl p-8 border-4 border-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300 shadow-2xl backdrop-blur-xl transform hover:scale-[1.03] transition-all duration-500 relative overflow-hidden group">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-blue-400/20 to-cyan-400/20 rounded-3xl animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-2 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 animate-pulse"></div>
          
          {/* Enhanced Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            🚀 3D ANALYTICS
          </div>
          
          {/* Chart Container with Enhanced Styling */}
          <div className="h-full w-full bg-white/30 rounded-2xl p-4 backdrop-blur-sm border border-white/50">
            <Plot
              data={pipelinePerformanceData}
              layout={pipelinePerformanceLayout}
              config={{ displayModeBar: false, responsive: true }}
              style={{ width: '100%', height: '100%' }}
              useResizeHandler={true}
            />
          </div>
        </div>

        {/* Right Chart - System Health Dashboard */}
        <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 rounded-3xl p-8 border-4 border-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 shadow-2xl backdrop-blur-xl transform hover:scale-[1.03] transition-all duration-500 relative overflow-hidden group">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 rounded-3xl animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-2 h-full bg-gradient-to-b from-cyan-500 via-teal-500 to-emerald-500 animate-pulse"></div>
          
          {/* Enhanced Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            ⚡ HEALTH MONITOR
          </div>
          
          {/* Chart Container with Enhanced Styling */}
          <div className="h-full w-full bg-white/30 rounded-2xl p-4 backdrop-blur-sm border border-white/50">
            <Plot
              data={systemHealthData}
              layout={systemHealthLayout}
              config={{ displayModeBar: false, responsive: true }}
              style={{ width: '100%', height: '100%' }}
              useResizeHandler={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedDataEngineeringDashboard;
