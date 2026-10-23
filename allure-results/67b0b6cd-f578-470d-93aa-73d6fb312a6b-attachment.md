# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multitab.spec.js >> multitab
- Location: tests\multitab.spec.js:2:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | import {test, expect } from '@playwright/test'
  2  | test('multitab', async({browser}) => { 
  3  |  const newbrowser = browser.newContext()
  4  |  const newpage= (await newbrowser).newPage()
> 5  |  await page.goto('https://freelance-learn-automation.vercel.app/login')
     |  ^ ReferenceError: page is not defined
  6  | 
  7  |  const newpromise = await Promise.all ([
  8  |     newbrowser.waitForEvent(page),
  9  |     page.locator("(//a[contains(@href,'facebook')])[1])").click()
  10 |     
  11 |  ])
  12 |  (await newpage).locator("(//input[@name='email'])[2]").fill('test@gmail.com')
  13 | }
  14 | )
```