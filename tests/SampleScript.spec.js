const { test, expect } = require('@playwright/test');

test('testviacodegen1', async ({ page }) => {

  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Search (Control+k)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('testrun');
  await page.getByRole('link', { name: 'TestRun', exact: true }).click();
  await page.getByRole('link', { name: 'fail', exact: true }).click();
  await page.getByRole('link', { name: 'TestCase' }).nth(1).click();
  //await page.getByText()
  await page.waitForTimeout(10000);
});