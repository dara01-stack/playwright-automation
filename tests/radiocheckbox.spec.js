import { test, expect } from '@playwright/test';

test('testRadioCheckBox', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Sports' }).check();
  await page.getByRole('checkbox', { name: 'Sports' }).uncheck();
  await page.getByRole('checkbox', { name: 'Reading' }).check();
  await page.getByRole('checkbox', { name: 'Reading' }).uncheck();
  await page.locator('div').filter({ hasText: /^Submit$/ }).first().click();
  await page.getByRole('checkbox', { name: 'Music' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('7324566498');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('dasd');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('asdas');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('cell', { name: 'Student Name' }).click();
  await page.getByRole('cell', { name: '7324566498' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Close' }).dblclick();
  await page.getByRole('dialog', { name: 'Thanks for submitting the form' }).click();
});