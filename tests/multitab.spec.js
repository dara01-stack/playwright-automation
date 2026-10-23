import { test } from '@playwright/test';

test('multitab', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://freelance-learn-automation.vercel.app/login');
 const[newpage] = await Promise.all ([
    context.waitForEvent('page'),
    page.locator("(//a[contains(@href,'facebook')])[1]").click()
    
 ])
 //await newpage.locator("(//input[@name='email'])[2]").fill('test@gmail.com')
 await newpage.waitForTimeout(10000)
newpage.close()


}

)