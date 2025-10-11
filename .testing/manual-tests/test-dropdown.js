const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Navigate to the main site
    console.log('Navigating to main staging site...');
    await page.goto('https://valta-frontend-staging-2025.vercel.app', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    await page.waitForTimeout(2000);
    
    // Take initial screenshot
    console.log('Taking initial screenshot...');
    await page.screenshot({ 
      path: 'initial-state.png',
      fullPage: false 
    });
    
    // Click on the Services dropdown
    console.log('Clicking on Services dropdown...');
    await page.click('text=Services');
    await page.waitForTimeout(1000);
    
    // Take screenshot with dropdown open
    console.log('Taking screenshot with Services dropdown open...');
    await page.screenshot({ 
      path: 'services-dropdown-open.png',
      fullPage: false 
    });
    
    // Click on Multifamily Appraisals
    console.log('Clicking on Multifamily Appraisals...');
    await page.click('text=Multifamily Appraisals');
    await page.waitForTimeout(3000);
    
    // Take screenshot of multifamily page
    console.log('Taking screenshot of Multifamily page...');
    await page.screenshot({ 
      path: 'multifamily-page-after-click.png',
      fullPage: false 
    });
    
    // Go back and test another dropdown item
    console.log('Going back to test Commercial Property...');
    await page.goto('https://valta-frontend-staging-2025.vercel.app', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    await page.waitForTimeout(2000);
    
    // Click on Services dropdown again
    console.log('Clicking on Services dropdown again...');
    await page.click('text=Services');
    await page.waitForTimeout(1000);
    
    // Click on Commercial Property
    console.log('Clicking on Commercial Property...');
    await page.click('text=Commercial Property');
    await page.waitForTimeout(3000);
    
    // Take screenshot of commercial page
    console.log('Taking screenshot of Commercial page...');
    await page.screenshot({ 
      path: 'commercial-page-after-click.png',
      fullPage: false 
    });
    
    console.log('All screenshots captured successfully');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();