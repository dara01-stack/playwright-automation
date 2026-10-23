# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: radiocheck.spec.js >> RadioCheck
- Location: tests\radiocheck.spec.js:2:5

# Error details

```
Error: tracing.start: Tracing has been already started
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('RadioCheck', async ({ page, context }) => {  
> 3  | await context.tracing.start({ screenshots: true, snapshots: true });
     |                       ^ Error: tracing.start: Tracing has been already started
  4  | await page.goto('https://demoqa.com/automation-practice-form');
  5  | //await page.getByRole('radio', { name: 'Male' }).click();
  6  | await page.getByRole('textbox',{name: 'First Name'}).fill('FirstName');
  7  | await page.getByRole('textbox',{name: 'Last Name'}).fill('LastName');
  8  | await page.locator('#userNumber').fill('1234534432');
  9  | await page.getByRole('radio', { name: 'Maled', exact: true }).check();
  10 | //await page.getByRole('textbox',{name: 'Mobile Number'}).fill('1234567890');
  11 | //await page.locator('//input[@id="gender-radio-1"]').click();
  12 | await page.getByRole('checkbox', { name: 'Sports' }).check();
  13 | 
  14 | await page.getByRole('checkbox', { name: 'Sports' }).uncheck();
  15 | 
  16 | await page.getByRole('checkbox', { name: 'Sports' }).uncheck();
  17 |    
  18 | await page.getByRole('checkbox', { name: 'Sports' }).check();
  19 | 
  20 | await page.getByRole('checkbox', { name: 'Reading' }).check();
  21 | 
  22 | await page.getByRole('checkbox', { name: 'Music' }).check();
  23 | 
  24 | await page.getByRole('checkbox', { name: 'Sports' }).check();
  25 | //page.waitForTimeout(5000);
  26 | await page.getByRole('button', { name: 'Submit' }).click();
  27 | await expect(page.getByRole('cell', { name: 'FirstName LastName' })).toBeVisible();
  28 | await expect(page.getByRole('cell', { name: 'Sports, Reading, Music' })).toBeVisible();
  29 | await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  30 | //await page.pause(); 
  31 | await page.keyboard.press('Escape');
  32 | //await page.getByRole('button', { name: 'Close' }).click();
  33 | await context.tracing.stop({ path: 'trace.zip' });
  34 | });
```