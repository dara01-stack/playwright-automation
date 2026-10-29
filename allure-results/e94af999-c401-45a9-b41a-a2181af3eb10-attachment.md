# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authen.spec.js >> authenencripttest
- Location: tests\authen.spec.js:9:5

# Error details

```
Error: page.goto: net::ERR_INVALID_AUTH_CREDENTIALS at https://YWRtaW46YWRtaW4%3D@the-internet.herokuapp.com/basic_auth
Call log:
  - navigating to "https://YWRtaW46YWRtaW4%3D@the-internet.herokuapp.com/basic_auth", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.skip('authentest',async({page, context}) => {
  4  | await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
  5  | await page.getByText('Basic Auth').isVisible();
  6  | 
  7  | })
  8  | 
  9  | test('authenencripttest',async({page, context}) => {
  10 | const user  = 'admin'
  11 | const password  = 'admin'
  12 | const encript64 = Buffer.from(`${user}:${password}`).toString('base64')
> 13 | await page.goto(`https://${encript64}@the-internet.herokuapp.com/basic_auth`);
     |            ^ Error: page.goto: net::ERR_INVALID_AUTH_CREDENTIALS at https://YWRtaW46YWRtaW4%3D@the-internet.herokuapp.com/basic_auth
  14 | await page.getByText('Basic Auth').isVisible();
  15 | 
  16 | })
```