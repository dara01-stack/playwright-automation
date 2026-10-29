# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven.spec.js >> testdrive locked_out_user
- Location: tests\datadriven.spec.js:8:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.app_logo')
Expected substring: "Epic sadface: Sorry, this user has been locked out."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toContainText" locator('.app_logo') with timeout 5000ms
  - waiting for locator('.app_logo')

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": locked_out_user
    - textbox "Password": secret_sauce
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Sorry, this user has been locked out."
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
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
> 13 |     await expect.soft(page.locator('.app_logo')).toContainText(testuser.excpectedresult)
     |                                                  ^ Error: expect(locator).toContainText(expected) failed
  14 | })
  15 | }
  16 | 
  17 | // import {test , expect} from '@playwright/test'
  18 | // import fs from 'fs'
  19 | // import { parse } from 'csv-parse/sync'
  20 | 
  21 | // const tespath= 'TestData/data1.csv'
  22 | // const testcsvfile= fs.readFileSync(tespath)
  23 | // const records = parse(testcsvfile, {
  24 | //   columns: true,
  25 | //   skip_empty_lines: true
  26 | // });
  27 | 
```