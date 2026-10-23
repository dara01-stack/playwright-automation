import { test, expect } from '@playwright/test';
test('RadioCheck', async ({ page, context }) => {  
await context.tracing.start({ screenshots: true, snapshots: true });
await page.goto('https://demoqa.com/automation-practice-form');
//await page.getByRole('radio', { name: 'Male' }).click();
await page.getByRole('textbox',{name: 'First Name'}).fill('FirstName');
await page.getByRole('textbox',{name: 'Last Name'}).fill('LastName');
await page.locator('#userNumber').fill('1234534432');
await page.getByRole('radio', { name: 'Maled', exact: true }).check();
//await page.getByRole('textbox',{name: 'Mobile Number'}).fill('1234567890');
//await page.locator('//input[@id="gender-radio-1"]').click();
await page.getByRole('checkbox', { name: 'Sports' }).check();

await page.getByRole('checkbox', { name: 'Sports' }).uncheck();

await page.getByRole('checkbox', { name: 'Sports' }).uncheck();
   
await page.getByRole('checkbox', { name: 'Sports' }).check();

await page.getByRole('checkbox', { name: 'Reading' }).check();

await page.getByRole('checkbox', { name: 'Music' }).check();

await page.getByRole('checkbox', { name: 'Sports' }).check();
//page.waitForTimeout(5000);
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByRole('cell', { name: 'FirstName LastName' })).toBeVisible();
await expect(page.getByRole('cell', { name: 'Sports, Reading, Music' })).toBeVisible();
await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
//await page.pause(); 
await page.keyboard.press('Escape');
//await page.getByRole('button', { name: 'Close' }).click();
await context.tracing.stop({ path: 'trace.zip' });
});