# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven.spec.js >> testdrive problem_user
- Location: tests\datadriven.spec.js:8:9

# Error details

```
Error: Unknown type: problem
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, empty" [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox "Sort products" [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e20]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - button "View details for Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=e27]
          - generic [ref=e28]:
            - generic [ref=e29]:
              - button "View details for Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
                - generic [ref=e31]: Sauce Labs Backpack
              - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e33]:
              - generic [ref=e34]: $29.99
              - button "Add to cart" [ref=e35] [cursor=pointer]
        - generic [ref=e36]:
          - button "View details for Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]:
              - button "View details for Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
                - generic [ref=e43]: Sauce Labs Bike Light
              - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e45]:
              - generic [ref=e46]: $9.99
              - button "Add to cart" [ref=e47] [cursor=pointer]
        - generic [ref=e48]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Sauce Labs Bolt T-Shirt
              - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e57]:
              - generic [ref=e58]: $15.99
              - button "Add to cart" [ref=e59] [cursor=pointer]
        - generic [ref=e60]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
                - generic [ref=e67]: Sauce Labs Fleece Jacket
              - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e69]:
              - generic [ref=e70]: $49.99
              - button "Add to cart" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - button "View details for Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
            - img "Sauce Labs Onesie" [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e77]:
              - button "View details for Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: Sauce Labs Onesie
              - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e81]:
              - generic [ref=e82]: $7.99
              - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
          - generic [ref=e88]:
            - generic [ref=e89]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
                - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e93]:
              - generic [ref=e94]: $15.99
              - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "X" [ref=e99] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  13 |     // if (testuser.type=== 'success'){
  14 |     //     await expect.soft(page.locator('.app_logo')).toContainText(testuser.excpectedresult)
  15 |     //     } 
  16 |     // else 
  17 |     //     {
  18 |     //     await expect.soft(page.locator('[data-test="error"]')).toContainText(testuser.excpectedresult)
  19 |     // }
  20 | 
  21 |     switch('testuser.type'){
  22 |         case 'success' :
  23 |           await expect(page.locator('.app_logo')).toContainText(testuser.excpectedresult)  
  24 |           break;
  25 |         case 'error' :
  26 |           await expect(page.locator('[data-test="error"]')).toContainText(testuser.excpectedresult)  
  27 |           break;  
  28 |         case 'problem' :
  29 |           await expect(page.locator('.inventory_item_desc')).toContainText(testuser.excpectedresult)  
  30 |           break;   
  31 |         default:
> 32 |             throw new Error(
     |                   ^ Error: Unknown type: problem
  33 |                     `Unknown type: ${testuser.type}`
  34 |                 );
  35 |     }
  36 | })
  37 | }
  38 | 
  39 | // import {test , expect} from '@playwright/test'
  40 | // import fs from 'fs'
  41 | // import { parse } from 'csv-parse/sync'
  42 | 
  43 | // const tespath= 'TestData/data1.csv'
  44 | // const testcsvfile= fs.readFileSync(tespath)
  45 | // const records = parse(testcsvfile, {
  46 | //   columns: true,
  47 | //   skip_empty_lines: true
  48 | // });
  49 | 
```