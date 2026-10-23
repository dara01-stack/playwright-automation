# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven.spec.js >> looptestfile problem_user
- Location: tests\datadriven.spec.js:9:9

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [active] [ref=e11]: problem_user
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | import fs from 'fs';
  3  | 
  4  | const datafilepath = 'TestData/data1.json'
  5  | 
  6  | const actualdata = JSON.parse(fs.readFileSync(datafilepath,'utf8'))
  7  | 
  8  | for (const usedata of actualdata) {
  9  |     test(`looptestfile ${usedata.username}`, async({page}) => {
  10 |     await page.goto('https://saucedemo.com')
  11 |     await page.locator('#user-name').fill(usedata.username)
> 12 |     await page.locator('#password').fill(usedata.userna)
     |                                     ^ Error: locator.fill: value: expected string, got undefined
  13 |     await page.locator('#login-button').click()
  14 |     })
  15 | 
  16 | 
  17 | }
  18 | 
```