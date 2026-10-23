# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SampleScript.spec.js >> testviacodegen1
- Location: tests\SampleScript.spec.js:3:1

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('testviacodegen1', async ({ page }) => {
  4  | 
  5  |   await page.goto('https://playwright.dev/');
  6  |   await page.getByRole('button', { name: 'Search (Control+k)' }).click();
  7  |   await page.getByRole('searchbox', { name: 'Search' }).click();
  8  |   await page.getByRole('searchbox', { name: 'Search' }).fill('testrun');
  9  |   await page.getByRole('link', { name: 'TestRun', exact: true }).click();
  10 |   await page.getByRole('link', { name: 'fail', exact: true }).click();
  11 |   await page.getByRole('link', { name: 'TestCase' }).nth(1).click();
> 12 |   await page.waitForTimeout(10000);
     |              ^ Error: page.waitForTimeout: Test ended.
  13 | });
```