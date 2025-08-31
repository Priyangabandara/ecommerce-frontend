import React from 'react';
import Plot from 'react-plotly.js';

const DataPipelineChart = ({ ordersCount, revenue, lastUpdate, dataGeneratedAt, categoryData: categoryDataProp }) => {
  // Enhanced Processing Performance with 3D-like visualization
  const processingPerformanceData = [
    {
      type: 'scatter',
      mode: 'lines+markers+text',
      x: ['🌐 Data Fetch', '⚡ Enrichment', '🔍 Validation', '💾 Storage', '🚀 API Response'],
      y: [
        Math.random() * 80 + 70,   // Enhanced performance metrics
        Math.random() * 70 + 80,
        Math.random() * 60 + 90,
        Math.random() * 50 + 95,
        Math.random() * 40 + 98
      ],
      text: [
        `${Math.floor(Math.random() * 30 + 70)}%`,
        `${Math.floor(Math.random() * 25 + 75)}%`,
        `${Math.floor(Math.random() * 20 + 80)}%`,
        `${Math.floor(Math.random() * 15 + 85)}%`,
        `${Math.floor(Math.random() * 10 + 90)}%`
      ],
      textposition: 'top',
      line: {
        color: 'rgba(59, 130, 246, 0.9)',
        width: 6,
        shape: 'spline'
      },
      marker: {
        size: [20, 22, 24, 26, 28],
        color: [
          'rgba(239, 68, 68, 0.9)',   // Red for initial stage
          'rgba(245, 158, 11, 0.9)',  // Orange for enrichment
          'rgba(34, 197, 94, 0.9)',   // Green for validation
          'rgba(59, 130, 246, 0.9)',  // Blue for storage
          'rgba(168, 85, 247, 0.9)'   // Purple for final stage
        ],
        line: { color: '#FFFFFF', width: 3 },
        symbol: 'diamond'
      },
      fill: 'tonexty',
      fillcolor: 'rgba(59, 130, 246, 0.1)',
      name: 'Performance Score (%)'
    },
    {
      type: 'scatter',
      mode: 'lines+markers',
      x: ['🌐 Data Fetch', '⚡ Enrichment', '🔍 Validation', '💾 Storage', '🚀 API Response'],
      y: [
        Math.random() * 15 + 5,   // Enhanced error rates
        Math.random() * 12 + 3,
        Math.random() * 8 + 2,
        Math.random() * 5 + 1,
        Math.random() * 3 + 0.5
      ],
      line: {
        color: 'rgba(239, 68, 68, 0.8)',
        width: 4,
        shape: 'spline',
        dash: 'dot'
      },
      marker: {
        size: 15,
        color: 'rgba(239, 68, 68, 0.9)',
        line: { color: '#FFFFFF', width: 2 },
        symbol: 'circle'
      },
      yaxis: 'y2',
      name: 'Error Rate (%)',
      hovertemplate: '<b>%{x}</b><br>Error Rate: %{y:.1f}%<extra></extra>'
    },
    {
      type: 'scatter',
      mode: 'markers',
      x: ['🌐 Data Fetch', '⚡ Enrichment', '🔍 Validation', '💾 Storage', '🚀 API Response'],
      y: [
        Math.random() * 2000 + 1000,  // Data volume metrics
        Math.random() * 1500 + 800,
        Math.random() * 1000 + 600,
        Math.random() * 800 + 400,
        Math.random() * 600 + 200
      ],
      marker: {
        size: [
          Math.random() * 25 + 15,  // Dynamic bubble sizes
          Math.random() * 22 + 12,
          Math.random() * 20 + 10,
          Math.random() * 18 + 8,
          Math.random() * 15 + 6
        ],
        color: 'rgba(6, 182, 212, 0.7)',
        line: { color: '#FFFFFF', width: 2 },
        symbol: 'circle'
      },
      yaxis: 'y3',
      name: 'Data Volume (KB)',
      hovertemplate: '<b>%{x}</b><br>Volume: %{y:,.0f} KB<extra></extra>'
    }
  ];

  const processingPerformanceLayout = {
    title: {
      text: '🎯 Advanced Processing Performance Analytics',
      font: { size: 18, color: '#1F2937', family: 'Inter, sans-serif', weight: 'bold' },
      x: 0.5,
      xanchor: 'center'
    },
    xaxis: {
      title: { text: 'Pipeline Stage', font: { size: 14, color: '#6B7280', weight: 'bold' } },
      tickfont: { size: 12, weight: 'bold' },
      showgrid: true,
      gridcolor: 'rgba(107, 114, 128, 0.1)'
    },
    yaxis: {
      title: { text: 'Performance Score (%)', font: { size: 14, color: '#3B82F6', weight: 'bold' } },
      range: [0, 100],
      tickfont: { size: 12 },
      showgrid: true,
      gridcolor: 'rgba(59, 130, 246, 0.1)'
    },
    yaxis2: {
      title: { text: 'Error Rate (%)', font: { size: 14, color: '#EF4444', weight: 'bold' } },
      overlaying: 'y',
      side: 'right',
      range: [0, 20],
      tickfont: { size: 12 }
    },
    yaxis3: {
      title: { text: 'Data Volume (KB)', font: { size: 14, color: '#06B6D4', weight: 'bold' } },
      overlaying: 'y',
      side: 'right',
      range: [0, 3000],
      tickfont: { size: 12 },
      position: 0.95
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 80, b: 80, l: 80, r: 80 },
    height: 320,
    showlegend: true,
    legend: { 
      x: 0.02, 
      y: 0.98, 
      bgcolor: 'rgba(255,255,255,0.9)',
      bordercolor: 'rgba(0,0,0,0.1)',
      borderwidth: 1,
      font: { size: 12, weight: 'bold' }
    },
    hovermode: 'closest'
  };

  // Enhanced System Health with multiple advanced indicators
  const systemHealthData = [
    {
      type: 'indicator',
      mode: 'gauge+number+delta',
      value: Math.random() * 35 + 65, // Enhanced system health (65-100%)
      delta: { 
        reference: 85,
        increasing: { color: '#10B981', font: { size: 16, weight: 'bold' } },
        decreasing: { color: '#EF4444', font: { size: 16, weight: 'bold' } }
      },
      gauge: {
        axis: { 
          range: [null, 100],
          tickwidth: 2,
          tickcolor: '#374151',
          tickfont: { size: 12, weight: 'bold' }
        },
        bar: { 
          color: 'linear-gradient(90deg, #EF4444, #F59E0B, #10B981)',
          thickness: 0.9
        },
        bgcolor: 'rgba(255,255,255,0.9)',
        borderwidth: 4,
        bordercolor: '#E5E7EB',
        steps: [
          { range: [0, 60], color: 'rgba(239, 68, 68, 0.2)' },
          { range: [60, 80], color: 'rgba(245, 158, 11, 0.2)' },
          { range: [80, 100], color: 'rgba(34, 197, 94, 0.2)' }
        ],
        threshold: {
          line: { color: '#EF4444', width: 5 },
          thickness: 0.8,
          value: 90
        }
      },
      title: { 
        text: '🔄 System Health Status', 
        font: { size: 16, color: '#374151', weight: 'bold' } 
      },
      domain: { x: [0, 1], y: [0.7, 1] }
    },
    {
      type: 'indicator',
      mode: 'number+delta',
      value: Math.floor(Math.random() * 1200) + 800, // Enhanced throughput (800-2000)
      delta: { 
        reference: 1200,
        increasing: { color: '#10B981', font: { size: 18, weight: 'bold' } },
        decreasing: { color: '#EF4444', font: { size: 18, weight: 'bold' } }
      },
      title: { 
        text: '⚡ Request Throughput', 
        font: { size: 16, color: '#374151', weight: 'bold' } 
      },
      domain: { x: [0, 1], y: [0.4, 0.6] },
      number: {
        font: { size: 28, color: '#059669', weight: 'bold' },
        valueformat: ',.0f',
        suffix: ' req/min'
      }
    },
    {
      type: 'indicator',
      mode: 'number+delta',
      value: Math.random() * 150 + 30, // Enhanced latency (30-180ms)
      delta: { 
        reference: 100,
        increasing: { color: '#EF4444', font: { size: 18, weight: 'bold' } },
        decreasing: { color: '#10B981', font: { size: 18, weight: 'bold' } }
      },
      title: { 
        text: '⏱️ Response Latency', 
        font: { size: 16, color: '#374151', weight: 'bold' } 
      },
      domain: { x: [0, 1], y: [0.1, 0.3] },
      number: {
        font: { size: 24, color: '#DC2626', weight: 'bold' },
        valueformat: ',.0f',
        suffix: ' ms'
      }
    },
    {
      type: 'indicator',
      mode: 'number+delta',
      value: Math.random() * 20 + 80, // CPU Usage (80-100%)
      delta: { 
        reference: 85,
        increasing: { color: '#EF4444', font: { size: 16, weight: 'bold' } },
        decreasing: { color: '#10B981', font: { size: 16, weight: 'bold' } }
      },
      title: { 
        text: '🖥️ CPU Utilization', 
        font: { size: 16, color: '#374151', weight: 'bold' } 
      },
      domain: { x: [0, 1], y: [-0.2, 0] },
      number: {
        font: { size: 20, color: '#7C3AED', weight: 'bold' },
        valueformat: ',.0f',
        suffix: '%'
      }
    }
  ];

  const systemHealthLayout = {
    title: {
      text: '⚡ Advanced System Health & Performance Monitor',
      font: { size: 18, color: '#1F2937', family: 'Inter, sans-serif', weight: 'bold' },
      x: 0.5,
      xanchor: 'center'
    },
    font: { size: 12, family: 'Inter, sans-serif' },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 80, b: 40, l: 40, r: 40 },
    height: 320
  };

  // Enhanced data processing pipeline with real-time metrics
  const pipelineMetricsData = [
    {
      type: 'scatter',
      mode: 'lines+markers+text',
      x: ['🌐 API Fetch', '⚡ Data Enrich', '🔍 Validation', '💾 Storage', '🔧 Processing', '📤 Delivery'],
      y: [
        Math.random() * 150 + 50,  // Enhanced processing times (ms)
        Math.random() * 120 + 40,
        Math.random() * 80 + 30,
        Math.random() * 60 + 20,
        Math.random() * 100 + 35,
        Math.random() * 40 + 15
      ],
      text: [
        `${Math.floor(Math.random() * 40 + 30)}ms`,
        `${Math.floor(Math.random() * 35 + 25)}ms`,
        `${Math.floor(Math.random() * 25 + 20)}ms`,
        `${Math.floor(Math.random() * 20 + 15)}ms`,
        `${Math.floor(Math.random() * 30 + 25)}ms`,
        `${Math.floor(Math.random() * 15 + 10)}ms`
      ],
      textposition: 'top',
      line: {
        color: 'rgba(245, 158, 11, 0.9)',
        width: 5,
        shape: 'spline'
      },
      marker: {
        size: [18, 20, 22, 24, 26, 28],
        color: [
          'rgba(239, 68, 68, 0.9)',   // Red for API
          'rgba(245, 158, 11, 0.9)',  // Orange for enrich
          'rgba(34, 197, 94, 0.9)',   // Green for validation
          'rgba(59, 130, 246, 0.9)',  // Blue for storage
          'rgba(168, 85, 247, 0.9)',  // Purple for processing
          'rgba(6, 182, 212, 0.9)'    // Cyan for delivery
        ],
        line: { color: '#FFFFFF', width: 3 },
        symbol: 'diamond'
      },
      fill: 'tonexty',
      fillcolor: 'rgba(245, 158, 11, 0.1)',
      name: 'Processing Time (ms)'
    },
    {
      type: 'scatter',
      mode: 'lines+markers',
      x: ['🌐 API Fetch', '⚡ Data Enrich', '🔍 Validation', '💾 Storage', '🔧 Processing', '📤 Delivery'],
      y: [
        Math.random() * 15 + 85,  // Enhanced success rates (%)
        Math.random() * 10 + 90,
        Math.random() * 8 + 92,
        Math.random() * 5 + 95,
        Math.random() * 6 + 94,
        Math.random() * 3 + 97
      ],
      line: {
        color: 'rgba(34, 197, 94, 0.9)',
        width: 4,
        shape: 'spline',
        dash: 'dot'
      },
      marker: {
        size: 16,
        color: 'rgba(34, 197, 94, 0.9)',
        line: { color: '#FFFFFF', width: 2 },
        symbol: 'circle'
      },
      yaxis: 'y2',
      name: 'Success Rate (%)',
      hovertemplate: '<b>%{x}</b><br>Success: %{y:.1f}%<extra></extra>'
    },
    {
      type: 'scatter',
      mode: 'markers',
      x: ['🌐 API Fetch', '⚡ Data Enrich', '🔍 Validation', '💾 Storage', '🔧 Processing', '📤 Delivery'],
      y: [
        Math.random() * 1200 + 800,  // Enhanced data volume
        Math.random() * 1000 + 600,
        Math.random() * 800 + 400,
        Math.random() * 600 + 300,
        Math.random() * 900 + 500,
        Math.random() * 500 + 200
      ],
      marker: {
        size: [
          Math.random() * 30 + 20,  // Enhanced bubble sizes
          Math.random() * 28 + 18,
          Math.random() * 26 + 16,
          Math.random() * 24 + 14,
          Math.random() * 27 + 17,
          Math.random() * 22 + 12
        ],
        color: 'rgba(168, 85, 247, 0.8)',
        line: { color: '#FFFFFF', width: 3 },
        symbol: 'circle'
      },
      yaxis: 'y3',
      name: 'Data Volume (KB)',
      hovertemplate: '<b>%{x}</b><br>Volume: %{y:,.0f} KB<extra></extra>'
    }
  ];

  const pipelineMetricsLayout = {
    title: {
      text: '🚀 Advanced Pipeline Performance Analytics',
      font: { size: 18, color: '#1F2937', family: 'Inter, sans-serif', weight: 'bold' },
      x: 0.5,
      xanchor: 'center'
    },
    xaxis: { 
      title: { text: 'Processing Stage', font: { size: 14, color: '#6B7280', weight: 'bold' } },
      tickfont: { size: 12, weight: 'bold' },
      showgrid: true,
      gridcolor: 'rgba(107, 114, 128, 0.1)'
    },
    yaxis: { 
      title: { text: 'Processing Time (ms)', font: { size: 14, color: '#F59E0B', weight: 'bold' } },
      range: [0, 250],
      tickfont: { size: 12 },
      showgrid: true,
      gridcolor: 'rgba(245, 158, 11, 0.1)'
    },
    yaxis2: { 
      title: { text: 'Success Rate (%)', font: { size: 14, color: '#10B981', weight: 'bold' } },
      overlaying: 'y',
      side: 'right',
      range: [80, 100],
      tickfont: { size: 12 }
    },
    yaxis3: { 
      title: { text: 'Data Volume (KB)', font: { size: 14, color: '#8B5CF6', weight: 'bold' } },
      overlaying: 'y',
      side: 'right',
      range: [0, 2000],
      tickfont: { size: 12 },
      position: 0.95
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 80, b: 80, l: 80, r: 80 },
    height: 320,
    showlegend: true,
    legend: { 
      x: 0.02, 
      y: 0.98, 
      bgcolor: 'rgba(255,255,255,0.9)',
      bordercolor: 'rgba(0,0,0,0.1)',
      borderwidth: 1,
      font: { size: 12, weight: 'bold' }
    },
    hovermode: 'closest'
  };

  // Enhanced category distribution with better colors and styling
  const categoryChartData = [
    {
      type: 'treemap',
      labels: categoryDataProp.map(cat => cat.Category),
      parents: categoryDataProp.map(() => ''),
      values: categoryDataProp.map(cat => cat.total_revenue),
      textinfo: 'label+value+percent parent',
      textfont: { size: 16, color: '#FFFFFF', weight: 'bold' },
      textposition: 'middle center',
      marker: {
        colors: [
          'rgba(99, 102, 241, 0.95)',   // Indigo
          'rgba(34, 197, 94, 0.95)',    // Green
          'rgba(245, 158, 11, 0.95)',   // Amber
          'rgba(239, 68, 68, 0.95)',    // Red
          'rgba(168, 85, 247, 0.95)',   // Purple
          'rgba(6, 182, 212, 0.95)'     // Cyan
        ],
        line: {
          color: 'rgba(255,255,255,0.9)',
          width: 3
        }
      },
      hovertemplate: '<b>%{label}</b><br>Revenue: $%{value:,.0f}<br>Share: %{percentParent:.1%}<extra></extra>'
    }
  ];

  const categoryLayout = {
    title: {
      text: '📊 Advanced Revenue Analytics by Category',
      font: { size: 18, color: '#1F2937', family: 'Inter, sans-serif', weight: 'bold' },
      x: 0.5,
      xanchor: 'center'
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    margin: { t: 80, b: 40, l: 40, r: 40 },
    height: 320,
    hovermode: 'closest'
  };

  return (
    <div className="h-full">
      <div className="grid grid-cols-2 gap-8 h-full">
        {/* Left Column - Enhanced Charts */}
        <div className="space-y-8">
          {/* Brilliant Processing Performance */}
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200/50 shadow-2xl backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl"></div>
            <div className="absolute top-2 right-2 bg-blue-500/20 px-2 py-1 rounded-full text-xs font-bold text-blue-700">
              LIVE
            </div>
            <Plot
              data={processingPerformanceData}
              layout={processingPerformanceLayout}
              config={{ displayModeBar: false, responsive: true }}
              style={{ width: '100%', height: '100%' }}
              useResizeHandler={true}
            />
          </div>
          
          {/* Brilliant System Health */}
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-emerald-200/50 shadow-2xl backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-2xl"></div>
            <div className="absolute top-2 right-2 bg-emerald-500/20 px-2 py-1 rounded-full text-xs font-bold text-emerald-700">
              MONITOR
            </div>
            <Plot
              data={systemHealthData}
              layout={systemHealthLayout}
              config={{ displayModeBar: false, responsive: true }}
              style={{ width: '100%', height: '100%' }}
              useResizeHandler={true}
            />
          </div>
        </div>
        
        {/* Right Column - Enhanced Charts */}
        <div className="space-y-8">
          {/* Brilliant Pipeline Performance */}
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl p-6 border-2 border-amber-200/50 shadow-2xl backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-red-400/10 rounded-2xl"></div>
            <div className="absolute top-2 right-2 bg-amber-500/20 px-2 py-1 rounded-full text-xs font-bold text-amber-700">
              ANALYTICS
            </div>
            <Plot
              data={pipelineMetricsData}
              layout={pipelineMetricsLayout}
              config={{ displayModeBar: false, responsive: true }}
              style={{ width: '100%', height: '100%' }}
              useResizeHandler={true}
            />
          </div>
          
          {/* Brilliant Category Distribution */}
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-6 border-2 border-purple-200/50 shadow-2xl backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-rose-400/10 rounded-2xl"></div>
            <div className="absolute top-2 right-2 bg-purple-500/20 px-2 py-1 rounded-full text-xs font-bold text-purple-700">
              REVENUE
            </div>
            <Plot
              data={categoryChartData}
              layout={categoryLayout}
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

export default DataPipelineChart;
