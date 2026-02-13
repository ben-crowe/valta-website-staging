const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    // Set viewport to ensure we capture the full header
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Navigate to the multifamily page
    console.log('Navigating to multifamily service page...');
    await page.goto('https://valta-stage-site.vercel.app/services/multifamily', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Wait a bit more to ensure everything is loaded
    await page.waitForTimeout(2000);
    
    // Take screenshot
    console.log('Taking screenshot...');
    await page.screenshot({ 
      path: 'multifamily-screenshot.png',
      fullPage: false 
    });
    
    console.log('Screenshot saved as multifamily-screenshot.png');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();