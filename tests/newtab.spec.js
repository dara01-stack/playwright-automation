import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(3).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Log In' }).click();
  await page1.locator('div').filter({ hasText: /^Explore the things you love\.$/ }).nth(1).click();
  await page1.getByRole('textbox', { name: 'Email or mobile number' }).click();
});