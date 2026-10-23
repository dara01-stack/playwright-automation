import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');
const usernameInput = page.getByRole('textbox', { name: 'Username' });
await usernameInput.fill('Admin');
const passwordInput = page.getByRole('textbox', { name: 'Password' });
await passwordInput.fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

expect(page.url()).toContain('web/index.php/dashboard/index');
await page.getByRole('link', { name: 'Recruitment' }).click();

// await page.locator('label:has-text("Vacancy")')
//   .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
//   .locator('.oxd-select-text')
//   .click();
const testsearch = "Can"
const testMatch ="Candidate Auto Test179391"
await page.locator('.oxd-input-group').filter({ hasText: 'Vacancy' }).locator('.oxd-select-text').click();
//await page.locator('.oxd-select-text-input').filter({ hasText: 'Payroll Administrator' }).click();
//console.log(await page.locator('.oxd-select-option').allTextContents());
//await page.locator('.oxd-select-text').filter({ hasText: 'Payroll Administrator' }).click();
//await page.getByText('Payroll Administrator',{ exact: true }).click();
await page.getByRole('option', { name: 'Payroll Administrator' }).click();
await page.locator('input[placeholder="Type for hints..."]').fill(testsearch);  
//await page.locator('.oxd-autocomplete-option').first().waitFor();
await page.waitForTimeout(10000);
console.log(await page.locator('.oxd-autocomplete-option').allTextContents());
const Textvalues = page.locator('.oxd-autocomplete-option');
console.log(Textvalues);
const valueCount = await Textvalues.count();
console.log(valueCount);
for (let i = 0; i < valueCount; i++) {
    const textValue = await Textvalues.nth(i).textContent();
    console.log(`Option ${i}: "${textValue}"`);
    if (textValue?.trim()===testMatch) {
        await Textvalues.nth(i).click();
        break;
}}
//await page.keyboard.press('ArrowDown');
//await page.keyboard.press('Enter');

//await page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text').click();
// const count = await page.getByText('Payroll Administrator', { exact: true }).count();

// //console.log(count);
// await page.getByRole('option', { name: 'Payroll Administrator' }).click();

await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).click();
await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).fill('test, test2');
await page.getByRole('button', { name: 'Search' }).click();
// await page.locator('.oxd-table-body').waitFor();
// const noRecords = page.getByText('No Records Found');

// if (await noRecords.isVisible()) {
//   console.log('No records returned');
// }
//await page.pause();

//await page.getByPlaceholder ('label:has-text("No Records Found")').isVisible();
//console.log(await page.getByText('No Records Found').count());
//const noRecords = await page.getByText('No Records Found').isVisible();
//const noRecords = await page.locator 
//getByText('No Records Found')
//const noRecordsLocator = page.locator('div').filter({ hasText: 'No Records Found' });
////console.log(await noRecordsLocator.count());
//await page.waitForTimeout(10000);
//console.log(page.locator('div').filter({ hasText: 'No Records Found' })).isVisible();
//const noRecords = await page.locator('span').filter({ hasText: 'No Records Found' }).isVisible();
//const noRecords = page.getByText('No Records Found').waitFor({ state: 'visible' });

// await noRecords.waitFor({state: 'visible'});

//console.log(noRecords);

// await page.locator('xpath=//input[@placeholder="Type for hints..."]').fill('test2');

//await page.pause();

//const test = await expect(page.locator('div[class="orangehrm-horizontal-padding orangehrm-vertical-padding"] span[class="oxd-text oxd-text--span"]')).toHaveText('No Records Found');
//console.log(test);
//await expect(page.getByText('No Records Found')).toBeVisible();
await page.waitForTimeout(10000);

console.log(await page.getByText('No Records Found').isVisible());

// const noRecords1 = await page.locator('div').filter({ hasText: /^No Records Found$/ }).isVisible();

// console.log(noRecords1);
//await page.locator("xpath=(//div[@class='oxd-select-text-input'])[2]").isVisible();
//page.waitForTimeout(10000);


});