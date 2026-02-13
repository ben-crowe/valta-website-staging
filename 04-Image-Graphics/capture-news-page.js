const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    console.log('Navigating to News/Blog page...');
    await page.goto('https://valta-frontend-staging-2025.vercel.app/news', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    await page.waitForTimeout(3000);
    
    console.log('Taking screenshot of News page with images...');
    await page.screenshot({ 
      path: 'news-page-with-images.png',
      fullPage: true 
    });
    
    console.log('Screenshot saved as news-page-with-images.png');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();