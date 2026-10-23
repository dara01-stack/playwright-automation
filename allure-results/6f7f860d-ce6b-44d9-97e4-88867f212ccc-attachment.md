# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Authentication.spec.js >> logintest and logout
- Location: tests\Authentication.spec.js:4:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { LoginPage } from '../pages/login_page.js';
  3  | import { LogoutPage } from '../pages/logout_page.js';
  4  | test('logintest and logout', async ({page}) => {
  5  |     const loginpage1= new LoginPage(page)
  6  |     const logout1 =new LogoutPage(page)
  7  |     await loginpage1.goto()
  8  |     await loginpage1.Login("Admin","admin123");
  9  |     //await loginpage1.page
  10 |     await logout1.Logout();
> 11 |     page.waitForTimeout(10000)
     |          ^ Error: page.waitForTimeout: Test ended.
  12 | }
  13 | );
  14 | 
  15 | 
  16 | 
  17 | // test.skip('Authen', async ({ page }) => {
  18 | //     const user = "admin";
  19 | //     const password = "admin";
  20 | //     const encroptstring = Buffer.from(`${user}:${password}`).toString('base64');
  21 | //     await page.route('**/*',(route)=>{
  22 | //     const headers ={
  23 | //         'Authorization': `Basic ${encroptstring}`,
  24 | //         };
  25 | //         route.continue({headers});
  26 | // });
  27 | //     await page.goto('https://the-internet.herokuapp.com/basic_auth');
  28 | //     const textvalue = await page.locator('//div[@class="example"]//h3').textContent();
  29 | //     expect(textvalue).toContain('Basic Auth');
  30 | //     await page.waitForTimeout(10000);
  31 | //     //await expect(page.locator('//div[@class="example"]//h3')).toHaveText('Basic Auth');
  32 | 
  33 | // });
  34 | 
  35 | // test('BaseAuthen', async ({ page }) => {
  36 | 
  37 | //     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  38 | //     await page.locator('input[placeholder="Username"]').fill('admin');
  39 | //     await page.locator('input[placeholder="Password"]').fill('admin123');
  40 | //     await page.locator('button[type="submit"]').click();
  41 |     
  42 | // });
```