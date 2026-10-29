import { test, expect } from '@playwright/test';

test.skip('authentest',async({page, context}) => {
await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
await page.getByText('Basic Auth').isVisible();

})

test('authenencripttest',async({page, context}) => {
const user  = 'admin'
const password  = 'admin'
const encript64 = Buffer.from(`${user}:${password}`).toString('base64')
await page.setExtraHTTPHeaders({Authorization: `Basic ${encript64}`});
await page.goto(`https://the-internet.herokuapp.com/basic_auth`);
await page.getByText('Basic Auth').isVisible();

})