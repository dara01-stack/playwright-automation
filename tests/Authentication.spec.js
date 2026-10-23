import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login_page.js';
import { LogoutPage } from '../pages/logout_page.js';
test('logintest and logout', async ({page}) => {
    const loginpage1= new LoginPage(page)
    const logout1 =new LogoutPage(page)
    await loginpage1.goto()
    await loginpage1.Login("Admin","admin123");
    //await loginpage1.page
    await logout1.Logout();
    await page.waitForTimeout(10000)
}
);



// test.skip('Authen', async ({ page }) => {
//     const user = "admin";
//     const password = "admin";
//     const encroptstring = Buffer.from(`${user}:${password}`).toString('base64');
//     await page.route('**/*',(route)=>{
//     const headers ={
//         'Authorization': `Basic ${encroptstring}`,
//         };
//         route.continue({headers});
// });
//     await page.goto('https://the-internet.herokuapp.com/basic_auth');
//     const textvalue = await page.locator('//div[@class="example"]//h3').textContent();
//     expect(textvalue).toContain('Basic Auth');
//     await page.waitForTimeout(10000);
//     //await expect(page.locator('//div[@class="example"]//h3')).toHaveText('Basic Auth');

// });

// test('BaseAuthen', async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.locator('input[placeholder="Username"]').fill('admin');
//     await page.locator('input[placeholder="Password"]').fill('admin123');
//     await page.locator('button[type="submit"]').click();
    
// });