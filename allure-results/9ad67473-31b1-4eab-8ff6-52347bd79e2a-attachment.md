# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authen.spec.js >> authenencripttest
- Location: tests\authen.spec.js:9:5

# Error details

```
ReferenceError: encoded64 is not defined
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
> 13 | await page.setExtraHTTPHeaders({    Authorization: `Basic ${encoded64}`  });
     |                                                             ^ ReferenceError: encoded64 is not defined
  14 | await page.goto(`https://the-internet.herokuapp.com/basic_auth`);
  15 | await page.getByText('Basic Auth').isVisible();
  16 | 
  17 | })
```