const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const pagesToCheck = [
    { url: '/services/multifamily', name: 'multifamily' },
    { url: '/services/commercial', name: 'commercial' },
    { url: '/services/self-storage', name: 'self-storage' },
    { url: '/request-appraisal/intake', name: 'intake' }
  ];
  
  try {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    for (const pageInfo of pagesToCheck) {
      console.log(`\nChecking ${pageInfo.name} page...`);
      
      // Navigate directly to the page
      await page.goto(`https://valta-frontend-staging-2025.vercel.app${pageInfo.url}`, { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      
      await page.waitForTimeout(2000);
      
      // Take screenshot
      console.log(`Taking screenshot of ${pageInfo.name} page...`);
      await page.screenshot({ 
        path: `${pageInfo.name}-no-breadcrumb.png`,
        fullPage: false 
      });
      
      // Check if any breadcrumb elements exist
      const breadcrumbExists = await page.locator('text=Home').first().isVisible().catch(() => false);
      const breadcrumbNav = await page.locator('nav[aria-label="breadcrumb"]').isVisible().catch(() => false);
      const breadcrumbList = await page.locator('.breadcrumb').isVisible().catch(() => false);
      
      if (breadcrumbExists || breadcrumbNav || breadcrumbList) {
        console.log(`⚠️ WARNING: Possible breadcrumb elements found on ${pageInfo.name} page!`);
      } else {
        console.log(`✅ No breadcrumb elements found on ${pageInfo.name} page`);
      }
    }
    
    console.log('\nAll pages checked successfully');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();