const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    // Set viewport to ensure we capture the full header
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Navigate to the staging site
    console.log('Navigating to staging site...');
    await page.goto('https://valta-frontend-staging-2025.vercel.app', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Wait a bit more to ensure everything is loaded
    await page.waitForTimeout(2000);
    
    // Take full page screenshot
    console.log('Taking full page screenshot...');
    await page.screenshot({ 
      path: 'valta-staging-screenshot.png', 
      fullPage: true 
    });
    
    console.log('Screenshot saved as valta-staging-screenshot.png');
    
  } catch (error) {
    console.error('Error capturing screenshot:', error);
  } finally {
    await browser.close();
  }
})();