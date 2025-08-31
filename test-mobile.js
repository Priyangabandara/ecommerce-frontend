// 📱 Mobile Responsiveness Testing Script
// Run this in browser console to test mobile features

console.log('🚀 Starting Mobile Responsiveness Tests...');

// Test 1: Check viewport meta tag
function testViewport() {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport && viewport.content.includes('width=device-width')) {
    console.log('✅ Viewport meta tag: PASSED');
    return true;
  } else {
    console.log('❌ Viewport meta tag: FAILED');
    return false;
  }
}

// Test 2: Check responsive breakpoints
function testBreakpoints() {
  const width = window.innerWidth;
  let breakpoint = '';
  
  if (width < 640) breakpoint = 'Mobile (sm)';
  else if (width < 768) breakpoint = 'Small Tablet (md)';
  else if (width < 1024) breakpoint = 'Tablet (lg)';
  else if (width < 1280) breakpoint = 'Desktop (xl)';
  else breakpoint = 'Large Desktop (2xl)';
  
  console.log(`📱 Current breakpoint: ${breakpoint} (${width}px)`);
  return breakpoint;
}

// Test 3: Check chart responsiveness
function testCharts() {
  const charts = document.querySelectorAll('[ref*="chart"]');
  if (charts.length > 0) {
    console.log(`✅ Found ${charts.length} chart containers`);
    
    // Test chart resize
    const originalWidth = charts[0].offsetWidth;
    console.log(`📊 Chart width: ${originalWidth}px`);
    
    return charts.length;
  } else {
    console.log('❌ No charts found');
    return 0;
  }
}

// Test 4: Check responsive classes
function testResponsiveClasses() {
  const elements = document.querySelectorAll('[class*="sm:"], [class*="lg:"], [class*="xl:"]');
  console.log(`🎨 Found ${elements.length} elements with responsive classes`);
  
  // Check for common responsive patterns
  const hasGrid = document.querySelector('.grid');
  const hasResponsiveText = document.querySelector('[class*="text-"]');
  const hasResponsiveSpacing = document.querySelector('[class*="p-"], [class*="m-"]');
  
  console.log(`   - Grid system: ${hasGrid ? '✅' : '❌'}`);
  console.log(`   - Responsive text: ${hasResponsiveText ? '✅' : '❌'}`);
  console.log(`   - Responsive spacing: ${hasResponsiveSpacing ? '✅' : '❌'}`);
  
  return elements.length;
}

// Test 5: Check touch friendliness
function testTouchFriendliness() {
  const buttons = document.querySelectorAll('button, .btn, [role="button"]');
  let touchFriendly = 0;
  
  buttons.forEach(btn => {
    const style = window.getComputedStyle(btn);
    const height = parseInt(style.height);
    const width = parseInt(style.width);
    
    if (height >= 44 && width >= 44) {
      touchFriendly++;
    }
  });
  
  console.log(`👆 Touch-friendly buttons: ${touchFriendly}/${buttons.length}`);
  return touchFriendly;
}

// Test 6: Performance test
function testPerformance() {
  const start = performance.now();
  
  // Simulate chart resize
  window.dispatchEvent(new Event('resize'));
  
  const end = performance.now();
  const duration = end - start;
  
  console.log(`⚡ Resize performance: ${duration.toFixed(2)}ms`);
  return duration < 100; // Should be under 100ms
}

// Test 7: Mobile-specific features
function testMobileFeatures() {
  const features = {
    'Touch scrolling': CSS.supports('-webkit-overflow-scrolling', 'touch'),
    'High DPI support': window.devicePixelRatio > 1,
    'Orientation change': 'onorientationchange' in window,
    'Touch events': 'ontouchstart' in window
  };
  
  console.log('📱 Mobile feature support:');
  Object.entries(features).forEach(([feature, supported]) => {
    console.log(`   - ${feature}: ${supported ? '✅' : '❌'}`);
  });
  
  return Object.values(features).filter(Boolean).length;
}

// Run all tests
function runAllTests() {
  console.log('\n🧪 Running Mobile Responsiveness Tests...\n');
  
  const results = {
    viewport: testViewport(),
    breakpoint: testBreakpoints(),
    charts: testCharts(),
    responsiveClasses: testResponsiveClasses(),
    touchFriendly: testTouchFriendliness(),
    performance: testPerformance(),
    mobileFeatures: testMobileFeatures()
  };
  
  console.log('\n📊 Test Results Summary:');
  console.log(`   - Viewport: ${results.viewport ? '✅' : '❌'}`);
  console.log(`   - Charts: ${results.charts > 0 ? '✅' : '❌'}`);
  console.log(`   - Responsive Classes: ${results.responsiveClasses > 0 ? '✅' : '❌'}`);
  console.log(`   - Touch Friendly: ${results.touchFriendly > 0 ? '✅' : '❌'}`);
  console.log(`   - Performance: ${results.performance ? '✅' : '❌'}`);
  console.log(`   - Mobile Features: ${results.mobileFeatures}/4`);
  
  const score = Object.values(results).filter(Boolean).length;
  console.log(`\n🎯 Overall Score: ${score}/7 (${Math.round(score/7*100)}%)`);
  
  if (score >= 6) {
    console.log('🎉 Excellent mobile responsiveness!');
  } else if (score >= 4) {
    console.log('👍 Good mobile responsiveness with room for improvement');
  } else {
    console.log('⚠️ Mobile responsiveness needs attention');
  }
  
  return results;
}

// Auto-run tests when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runAllTests);
} else {
  runAllTests();
}

// Export for manual testing
window.mobileTests = {
  runAll: runAllTests,
  testViewport,
  testBreakpoints,
  testCharts,
  testResponsiveClasses,
  testTouchFriendliness,
  testPerformance,
  testMobileFeatures
};

console.log('💡 Use window.mobileTests.runAll() to run tests again');
