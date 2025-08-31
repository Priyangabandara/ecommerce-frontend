import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const SmartDashboard = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const [metrics, setMetrics] = useState({
    salesValue: '$127,450',
    orderCount: '1,847',
    avgOrderValue: '$69.12',
    healthValue: '92.9%',
    throughputValue: '13,470',
    latencyValue: '142ms',
    errorRateValue: '1.8%'
  });

  const updateChartData = (chart1, chart2) => {
    if (!chart1 || !chart2) return;

    // Update Chart 1 with new data
    const newData1 = [
      [85 + Math.random() * 10, 88 + Math.random() * 10, 92 + Math.random() * 10, 89 + Math.random() * 10, 94 + Math.random() * 10, 91 + Math.random() * 10],
      [78 + Math.random() * 10, 82 + Math.random() * 10, 85 + Math.random() * 10, 87 + Math.random() * 10, 89 + Math.random() * 10, 86 + Math.random() * 10],
      [82 + Math.random() * 10, 85 + Math.random() * 10, 88 + Math.random() * 10, 90 + Math.random() * 10, 93 + Math.random() * 10, 89 + Math.random() * 10],
      [75 + Math.random() * 10, 79 + Math.random() * 10, 83 + Math.random() * 10, 86 + Math.random() * 10, 88 + Math.random() * 10, 85 + Math.random() * 10]
    ];

    chart1.setOption({
      series: [
        { data: newData1[0] },
        { data: newData1[1] },
        { data: newData1[2] },
        { data: newData1[3] }
      ]
    });

    // Update Chart 2 with new gauge values
    const newHealth = 85 + Math.random() * 15;
    const newQuality = 80 + Math.random() * 15;

    chart2.setOption({
      series: [
        {
          data: [{
            value: newHealth,
            name: 'Pipeline Health'
          }]
        },
        {
          data: [{
            value: newQuality,
            name: 'Data Quality'
          }]
        }
      ]
    });
  };

  const updateMetrics = () => {
    const health = (85 + Math.random() * 15).toFixed(1);
    const throughput = Math.floor(8000 + Math.random() * 8000);
    const latency = Math.floor(80 + Math.random() * 200);
    const errorRate = (Math.random() * 3 + 0.5).toFixed(1);

    // Update sales KPI metrics
    const salesValue = Math.floor(100000 + Math.random() * 50000);
    const orderCount = Math.floor(1500 + Math.random() * 500);
    const avgOrderValue = (50 + Math.random() * 40).toFixed(2);

    setMetrics({
      healthValue: health + '%',
      throughputValue: throughput.toLocaleString(),
      latencyValue: latency + 'ms',
      errorRateValue: errorRate + '%',
      salesValue: '$' + salesValue.toLocaleString(),
      orderCount: orderCount.toLocaleString(),
      avgOrderValue: '$' + avgOrderValue
    });
  };

  const initCharts = () => {
    // Chart 1: Multi-Series Line Chart with Area
    const chart1 = echarts.init(chart1Ref.current);
    
    const option1 = {
      backgroundColor: 'transparent',
      title: {
        text: 'Pipeline Performance Over Time',
        textStyle: {
          color: '#2d3748',
          fontSize: 14,
          fontWeight: 'bold'
        },
        left: 'center',
        top: 5
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderColor: '#667eea',
        borderWidth: 2,
        textStyle: {
          color: '#2d3748'
        },
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#667eea'
          }
        }
      },
      legend: {
        data: ['System Uptime', 'Data Quality', 'Processing Efficiency', 'Business Impact'],
        textStyle: { 
          color: '#4a5568',
          fontSize: 10
        },
        top: 30,
        itemGap: 10
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Data Fetch', 'Enrichment', 'Validation', 'Storage', 'API Response', 'Monitoring'],
        axisLabel: {
          color: '#4a5568',
          fontSize: 10
        },
        axisLine: {
          lineStyle: {
            color: '#e2e8f0'
          }
        }
      },
      yAxis: {
        type: 'value',
        min: 70,
        max: 100,
        axisLabel: {
          color: '#4a5568',
          fontSize: 10,
          formatter: '{value}%'
        },
        axisLine: {
          lineStyle: {
            color: '#e2e8f0'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#f7fafc',
            type: 'dashed'
          }
        }
      },
      series: [
        {
          name: 'System Uptime',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#667eea'
          },
          itemStyle: {
            color: '#667eea',
            borderWidth: 2,
            borderColor: '#ffffff'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(102, 126, 234, 0.3)'
              }, {
                offset: 1, color: 'rgba(102, 126, 234, 0.05)'
              }]
            }
          },
          data: [85, 88, 92, 89, 94, 91]
        },
        {
          name: 'Data Quality',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#f56565'
          },
          itemStyle: {
            color: '#f56565',
            borderWidth: 2,
            borderColor: '#ffffff'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(245, 101, 101, 0.3)'
              }, {
                offset: 1, color: 'rgba(245, 101, 101, 0.05)'
              }]
            }
          },
          data: [78, 82, 85, 87, 89, 86]
        },
        {
          name: 'Processing Efficiency',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#48bb78'
          },
          itemStyle: {
            color: '#48bb78',
            borderWidth: 2,
            borderColor: '#ffffff'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(72, 187, 120, 0.3)'
              }, {
                offset: 1, color: 'rgba(72, 187, 120, 0.05)'
              }]
            }
          },
          data: [82, 85, 88, 90, 93, 89]
        },
        {
          name: 'Business Impact',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#ed8936'
          },
          itemStyle: {
            color: '#ed8936',
            borderWidth: 2,
            borderColor: '#ffffff'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(237, 137, 54, 0.3)'
              }, {
                offset: 1, color: 'rgba(237, 137, 54, 0.05)'
              }]
            }
          },
          data: [75, 79, 83, 86, 88, 85]
        }
      ]
    };
    
    chart1.setOption(option1);

    // Chart 2: Gauge Charts with Performance Metrics
    const chart2 = echarts.init(chart2Ref.current);
    
    const option2 = {
      backgroundColor: 'transparent',
      title: {
        text: 'System Performance Gauges',
        textStyle: {
          color: '#2d3748',
          fontSize: 14,
          fontWeight: 'bold'
        },
        left: 'center',
        top: 5
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderColor: '#48bb78',
        borderWidth: 2,
        textStyle: {
          color: '#2d3748'
        }
      },
      series: [
        {
          name: 'Pipeline Health',
          type: 'gauge',
          radius: '55%',
          center: ['25%', '50%'],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          splitNumber: 8,
          itemStyle: {
            color: '#48bb78'
          },
          progress: {
            show: true,
            roundCap: true,
            width: 15,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: '#48bb78'
                }, {
                  offset: 1, color: '#38a169'
                }]
              }
            }
          },
          pointer: {
            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81598,732.63463 2083.81598,729.018082 C2083.81598,728.932362 2083.81758,728.846523 2083.82078,728.760561 L2088.27876,617.312956 C2088.32352,616.194028 2089.24362,615.30999 2090.36389,615.30999 Z',
            length: '70%',
            width: 14,
            offsetCenter: [0, '5%']
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 15,
              color: [[1, '#e2e8f0']]
            }
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#4a5568'
            },
            length: 10,
            distanceFromCenter: 25
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#4a5568'
            },
            distanceFromCenter: 25
          },
          axisLabel: {
            distanceFromCenter: 40,
            color: '#4a5568',
            fontSize: 9
          },
          title: {
            offsetCenter: [0, '25%'],
            fontSize: 12,
            color: '#2d3748',
            fontWeight: 'bold'
          },
          detail: {
            fontSize: 20,
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: '#2d3748',
            fontWeight: 'bold'
          },
          data: [{
            value: 92.9,
            name: 'Pipeline Health'
          }]
        },
        {
          name: 'Data Quality',
          type: 'gauge',
          radius: '55%',
          center: ['75%', '50%'],
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          splitNumber: 8,
          itemStyle: {
            color: '#f56565'
          },
          progress: {
            show: true,
            roundCap: true,
            width: 15,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: '#f56565'
                }, {
                  offset: 1, color: '#e53e3e'
                }]
              }
            }
          },
          pointer: {
            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,615.30999 Z',
            length: '70%',
            width: 14,
            offsetCenter: [0, '5%']
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 15,
              color: [[1, '#e2e8f0']]
            }
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#4a5568'
            },
            length: 10,
            distanceFromCenter: 25
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#4a5568'
            },
            distanceFromCenter: 25
          },
          axisLabel: {
            distanceFromCenter: 40,
            color: '#4a5568',
            fontSize: 9
          },
          title: {
            offsetCenter: [0, '25%'],
            fontSize: 12,
            color: '#2d3748',
            fontWeight: 'bold'
          },
          detail: {
            fontSize: 20,
            offsetCenter: [0, '0%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: '#2d3748',
            fontWeight: 'bold'
          },
          data: [{
            value: 85.1,
            name: 'Data Quality'
          }]
        }
      ]
    };
    
    chart2.setOption(option2);

    // Auto-resize charts
    const handleResize = () => {
      chart1.resize();
      chart2.resize();
    };

    window.addEventListener('resize', handleResize);

    // Update data periodically
    const updateInterval = setInterval(() => {
      updateChartData(chart1, chart2);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(updateInterval);
      chart1.dispose();
      chart2.dispose();
    };
  };

  useEffect(() => {
    if (chart1Ref.current && chart2Ref.current) {
      const cleanup = initCharts();
      return cleanup;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateMetrics();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-1 sm:p-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3 sm:p-4 text-white shadow-lg">
          <h1 className="text-xl sm:text-2xl font-bold">📊 Smart Data Engineering Dashboard</h1>
        </div>

        {/* Sales KPI Metrics - Ultra Compact */}
        <div className="bg-white rounded-xl p-1 sm:p-2 mb-1 sm:mb-2 shadow-lg">
          <div className="text-xs sm:text-sm font-bold text-gray-800 mb-1">💰 Key Business Metrics</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-1 sm:p-2 text-center border border-transparent hover:border-blue-200 transition-all">
              <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0.5">
                {metrics.salesValue}
              </div>
              <div className="text-xs font-semibold text-gray-600 mb-0.5">Total Sales Value</div>
              <div className="inline-block px-1.5 py-0.5 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-200">
                ▲12.5%
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-1 sm:p-2 text-center border border-transparent hover:border-blue-200 transition-all">
              <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0.5">
                {metrics.orderCount}
              </div>
              <div className="text-xs font-semibold text-gray-600 mb-0.5">Orders Processed</div>
              <div className="inline-block px-1.5 py-0.5 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-200">
                ▲8.3%
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-1 sm:p-2 text-center border border-transparent hover:border-blue-200 transition-all sm:col-span-2 lg:col-span-1">
              <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0.5">
                {metrics.avgOrderValue}
              </div>
              <div className="text-xs font-semibold text-gray-600 mb-0.5">Average Order Value</div>
              <div className="inline-block px-1.5 py-0.5 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-200">
                ▲3.8%
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid - Priority Section with Maximum Height */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="bg-white rounded-xl p-2 sm:p-3 shadow-lg">
            <div className="text-sm sm:text-base font-bold text-gray-800 mb-2 text-center">
              🚀 Pipeline Performance Matrix
            </div>
            <div ref={chart1Ref} className="w-full h-64 sm:h-80 lg:h-96 xl:h-[26rem] rounded-lg"></div>
          </div>
          
          <div className="bg-white rounded-xl p-2 sm:p-3 shadow-lg">
            <div className="text-sm sm:text-base font-bold text-gray-800 mb-2 text-center">
              ⚡ System Health Monitor
            </div>
            <div ref={chart2Ref} className="w-full h-64 sm:h-80 lg:h-96 xl:h-[26rem] rounded-lg"></div>
          </div>
        </div>

        {/* System Metrics - Ultra Compact */}
        <div className="bg-white rounded-xl p-1 sm:p-2 shadow-lg">
          <div className="text-xs sm:text-sm font-bold text-gray-800 mb-1">📈 Real-Time System Metrics</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-1 sm:p-2 text-center border border-transparent hover:border-blue-200 transition-all">
              <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0.5">
                {metrics.healthValue}
              </div>
              <div className="text-xs font-semibold text-gray-600 mb-0.5">System Health Score</div>
              <div className="inline-block px-1.5 py-0.5 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-200">
                ▲2.9%
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-1 sm:p-2 text-center border border-transparent hover:border-blue-200 transition-all">
              <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0.5">
                {metrics.throughputValue}
              </div>
              <div className="text-xs font-semibold text-gray-600 mb-0.5">Data Velocity (rec/s)</div>
              <div className="inline-block px-1.5 py-0.5 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-200">
                ▲3.47k
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-1 sm:p-2 text-center border border-transparent hover:border-blue-200 transition-all">
              <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0.5">
                {metrics.latencyValue}
              </div>
              <div className="text-xs font-semibold text-gray-600 mb-0.5">Average Latency</div>
              <div className="inline-block px-1.5 py-0.5 bg-red-100 text-red-800 text-xs font-bold rounded-full border border-red-200">
                ▲8.2ms
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-1 sm:p-2 text-center border border-transparent hover:border-blue-200 transition-all">
              <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0.5">
                {metrics.errorRateValue}
              </div>
              <div className="text-xs font-semibold text-gray-600 mb-0.5">Error Rate</div>
              <div className="inline-block px-1.5 py-0.5 bg-green-100 text-green-800 text-xs font-bold rounded-full border border-green-200">
                ▼0.5%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartDashboard;
