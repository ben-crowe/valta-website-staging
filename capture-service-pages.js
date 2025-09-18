const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const pages = [
    { url: '/services/commercial', name: 'commercial' },
    { url: '/services/self-storage', name: 'self-storage' }
  ];
  
  try {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    for (const pageInfo of pages) {
      console.log(`Navigating to ${pageInfo.name} page...`);
      await page.goto(`https://valta-frontend-staging-2025.vercel.app${pageInfo.url}`, { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      
      await page.waitForTimeout(2000);
      
      console.log(`Taking screenshot of ${pageInfo.name} page...`);
      await page.screenshot({ 
        path: `${pageInfo.name}-screenshot.png`,
        fullPage: false 
      });
      
      console.log(`Screenshot saved as ${pageInfo.name}-screenshot.png`);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();