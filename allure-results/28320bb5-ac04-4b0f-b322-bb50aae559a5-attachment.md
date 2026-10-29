# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven.spec.js >> testdrive problem_user
- Location: tests\datadriven.spec.js:8:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.app_logo')
Expected substring: "carry.allTheThings()"
Received string:    "Swag Labs"
Timeout: 5000ms

Call log:
  - Expect "soft toContainText" locator('.app_logo') with timeout 5000ms
  - waiting for locator('.app_logo')
    13 × locator resolved to <div class="app_logo">Swag Labs</div>
       - unexpected value "Swag Labs"

```

```yaml
- text: Swag Labs
```

# Test source

```ts
  1  | import {test, expect } from '@playwright/test'
  2  | import fs from 'fs'
  3  | 
  4  | const datapath= 'TestData/data1.json';
  5  | 
  6  | const userdata = JSON.parse(fs.readFileSync(datapath,'utf8'))
  7  | for(const testuser of userdata){
  8  |     test(`testdrive ${testuser.username}`, async({page})=> {
  9  |     await page.goto('https://www.saucedemo.com/')
  10 |     await page.locator('#user-name').fill(testuser.username)
  11 |     await page.locator('#password').fill(testuser.password)
  12 |     await page.locator('#login-button').click()
  13 |     if (testuser.type=== 'success'){
> 14 |         await expect.soft(page.locator('.app_logo')).toContainText(testuser.excpectedresult)
     |                                                      ^ Error: expect(locator).toContainText(expected) failed
  15 |         } 
  16 |     else 
  17 |         {
  18 |         await expect.soft(page.locator('data-test="error"')).toContainText(testuser.excpectedresult)
  19 |     }
  20 | })
  21 | }
  22 | 
  23 | // import {test , expect} from '@playwright/test'
  24 | // import fs from 'fs'
  25 | // import { parse } from 'csv-parse/sync'
  26 | 
  27 | // const tespath= 'TestData/data1.csv'
  28 | // const testcsvfile= fs.readFileSync(tespath)
  29 | // const records = parse(testcsvfile, {
  30 | //   columns: true,
  31 | //   skip_empty_lines: true
  32 | // });
  33 | 
```