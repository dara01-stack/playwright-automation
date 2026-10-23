const { test, expect } = require('@playwright/test');

test('playwright docs search', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/\/docs\/intro/);

  await page.getByRole('button', { name: 'Search (Control+k)' }).click();

  const search = page.getByRole('searchbox', { name: 'Search' });
  await expect(search).toBeVisible();
  await search.fill('locator');
  await search.press('Enter');

  await expect(page.locator('.DocSearch-Hits')).toBeVisible({ timeout: 20000 });
  await page.locator('.DocSearch-Hits a').first().click();
  await page.waitForTimeout(10000);
});