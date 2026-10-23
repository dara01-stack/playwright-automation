# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Authentication.spec.js >> logout
- Location: tests\Authentication.spec.js:13:5

# Error details

```
TypeError: _login_page.LogoutPage is not a constructor
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { LoginPage, LogoutPage } from '../pages/login_page.js';
  3  | 
  4  | test('logintest', async ({page}) => {
  5  |     const loginpage1= new LoginPage(page)
  6  |     await loginpage1.goto()
  7  |     await loginpage1.Login("Admin","admin123");
  8  |     await loginpage1.page
  9  | 
  10 | }
  11 | );
  12 | 
  13 | test('logout', async({page})=>{
> 14 |     const logout1=new LogoutPage(page)
     |                   ^ TypeError: _login_page.LogoutPage is not a constructor
  15 |     await logout1.Logout();
  16 | await page.waitForTimeout(10000)
  17 | });
  18 | 
  19 | 
  20 | // test.skip('Authen', async ({ page }) => {
  21 | //     const user = "admin";
  22 | //     const password = "admin";
  23 | //     const encroptstring = Buffer.from(`${user}:${password}`).toString('base64');
  24 | //     await page.route('**/*',(route)=>{
  25 | //     const headers ={
  26 | //         'Authorization': `Basic ${encroptstring}`,
  27 | //         };
  28 | //         route.continue({headers});
  29 | // });
  30 | //     await page.goto('https://the-internet.herokuapp.com/basic_auth');
  31 | //     const textvalue = await page.locator('//div[@class="example"]//h3').textContent();
  32 | //     expect(textvalue).toContain('Basic Auth');
  33 | //     await page.waitForTimeout(10000);
  34 | //     //await expect(page.locator('//div[@class="example"]//h3')).toHaveText('Basic Auth');
  35 | 
  36 | // });
  37 | 
  38 | // test('BaseAuthen', async ({ page }) => {
  39 | 
  40 | //     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  41 | //     await page.locator('input[placeholder="Username"]').fill('admin');
  42 | //     await page.locator('input[placeholder="Password"]').fill('admin123');
  43 | //     await page.locator('button[type="submit"]').click();
  44 |     
  45 | // });
```