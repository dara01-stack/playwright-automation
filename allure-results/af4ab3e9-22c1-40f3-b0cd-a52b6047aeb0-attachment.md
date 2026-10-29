# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: radiocheck.spec.js >> RadioCheck
- Location: tests\radiocheck.spec.js:2:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.check: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('radio', { name: 'Maled', exact: true })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]:
        - generic [ref=e25] [cursor=pointer]: Forms
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
      - generic [ref=e43]: Alerts, Frame & Windows
      - generic [ref=e55]: Widgets
      - generic [ref=e68]: Interactions
      - generic [ref=e80]: Book Store Application
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e98]: Name
          - textbox "First Name" [ref=e101]: FirstName
          - textbox "Last Name" [ref=e103]: LastName
        - generic [ref=e104]:
          - generic [ref=e105]: Email
          - textbox "name@example.com" [ref=e108]
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e122]: Mobile(10 Digits)
          - textbox "Mobile Number" [active] [ref=e125]: "1234534432"
        - generic [ref=e126]:
          - generic [ref=e127]: Date of Birth
          - textbox [ref=e132]: 26 Oct 2026
        - generic [ref=e133]:
          - generic [ref=e134]: Subjects
          - generic [ref=e137]:
            - log [ref=e139]
            - combobox [ref=e143]
        - generic [ref=e146]:
          - generic [ref=e147]: Hobbies
          - generic [ref=e149]:
            - generic [ref=e150]:
              - checkbox "Sports" [ref=e151]
              - generic [ref=e152]: Sports
            - generic [ref=e153]:
              - checkbox "Reading" [ref=e154]
              - generic [ref=e155]: Reading
            - generic [ref=e156]:
              - checkbox "Music" [ref=e157]
              - generic [ref=e158]: Music
        - generic [ref=e159]:
          - generic [ref=e160]: Picture
          - button "Choose File" [ref=e163] [cursor=pointer]
        - generic [ref=e164]:
          - generic [ref=e165]: Current Address
          - textbox "Current Address" [ref=e168]
        - generic [ref=e169]:
          - generic [ref=e170]: State and City
          - generic [ref=e173]:
            - log [ref=e175]
            - generic [ref=e177]:
              - generic [ref=e178]: Select State
              - combobox [ref=e180]
          - generic [ref=e186]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=e189] [cursor=pointer]
    - generic [ref=e195]:
      - iframe [ref=e198]:
        - generic [ref=f5e1]:
          - generic [ref=f5e2]:
            - generic:
              - generic [ref=f5e3] [cursor=pointer]
              - button [ref=f5e10] [cursor=pointer]
          - iframe [ref=f5e18]:
            - generic [ref=f12e2] [cursor=pointer]:
              - generic [ref=f12e10]:
                - generic [ref=f12e11]:
                  - generic [ref=f12e14]:
                    - generic [ref=f12e15]: SEPHORA COLLECTION
                    - generic [ref=f12e17]: "SEPHORA COLLECTION PRO Concealer Brush #71"
                  - generic [ref=f12e18]:
                    - generic [ref=f12e19]: ★
                    - generic [ref=f12e20]: ★
                    - generic [ref=f12e21]: ★
                    - generic [ref=f12e22]: ★
                    - generic [ref=f12e23]: ★
                  - generic [ref=f12e24]: $24
                - generic [ref=f12e25]:
                  - generic [ref=f12e28]:
                    - generic [ref=f12e29]: PATRICK TA
                    - generic [ref=f12e31]: PATRICK TA Mini Major Headlines Double-Take Crème & Powder Blush Duo Creme .05 OZ Powder .09 OZ/Creme 1.6 G Powder 2.6 G
                  - generic [ref=f12e32]:
                    - generic [ref=f12e33]: ★
                    - generic [ref=f12e34]: ★
                    - generic [ref=f12e35]: ★
                    - generic [ref=f12e36]: ★
                    - generic [ref=f12e37]: ☆
                  - generic [ref=f12e38]: $25
                - generic [ref=f12e39]:
                  - generic [ref=f12e42]:
                    - generic [ref=f12e43]: Saie
                    - generic [ref=f12e45]: Saie Mini Dew Blush™ Liquid Cream Blush 0.2 oz/7 mL
                  - generic [ref=f12e46]:
                    - generic [ref=f12e47]: ★
                    - generic [ref=f12e48]: ★
                    - generic [ref=f12e49]: ★
                    - generic [ref=f12e50]: ★
                    - generic [ref=f12e51]: ☆
                  - generic [ref=f12e52]: $18
                - generic [ref=f12e53]:
                  - generic [ref=f12e56]:
                    - generic [ref=f12e57]: Tower 28 Beauty
                    - generic [ref=f12e59]: Tower 28 Beauty Mini SOS Daily Hypochlorous Acid Spray for Breakouts & Redness 1 oz/ 30 mL
                  - generic [ref=f12e60]:
                    - generic [ref=f12e61]: ★
                    - generic [ref=f12e62]: ★
                    - generic [ref=f12e63]: ★
                    - generic [ref=f12e64]: ★
                    - generic [ref=f12e65]: ☆
                  - generic [ref=f12e66]: $12
                - generic [ref=f12e67]:
                  - generic [ref=f12e70]:
                    - generic [ref=f12e71]: Wonderskin
                    - generic [ref=f12e73]: Wonderskin Wonder Blading All-Day Lip Stain 0.135 oz/4 mL
                  - generic [ref=f12e74]:
                    - generic [ref=f12e75]: ★
                    - generic [ref=f12e76]: ★
                    - generic [ref=f12e77]: ★
                    - generic [ref=f12e78]: ★
                    - generic [ref=f12e79]: ☆
                  - generic [ref=f12e80]: $22
                - generic [ref=f12e81]:
                  - generic [ref=f12e84]:
                    - generic [ref=f12e85]: Rare Beauty by Selena Gomez
                    - generic [ref=f12e87]: Rare Beauty by Selena Gomez Mini Soft Pinch Liquid Blush 0.11 fl.oz /3.2 mL
                  - generic [ref=f12e88]:
                    - generic [ref=f12e89]: ★
                    - generic [ref=f12e90]: ★
                    - generic [ref=f12e91]: ★
                    - generic [ref=f12e92]: ★
                    - generic [ref=f12e93]: ☆
                  - generic [ref=f12e94]: $16
                - generic [ref=f12e95]:
                  - generic [ref=f12e98]:
                    - generic [ref=f12e99]: Charlotte Tilbury
                    - generic [ref=f12e101]: Charlotte Tilbury Mini Airbrush Flawless Hydrating & Waterproof Setting Spray 1.1 oz/ 34 ml
                  - generic [ref=f12e102]:
                    - generic [ref=f12e103]: ★
                    - generic [ref=f12e104]: ★
                    - generic [ref=f12e105]: ★
                    - generic [ref=f12e106]: ★
                    - generic [ref=f12e107]: ☆
                  - generic [ref=f12e108]: $25
                - generic [ref=f12e109]:
                  - generic [ref=f12e112]:
                    - generic [ref=f12e113]: tarte
                    - generic [ref=f12e115]: tarte Mini Shape Tape Concealer + Tubing Mascara Set
                  - generic [ref=f12e116]:
                    - generic [ref=f12e117]: ★
                    - generic [ref=f12e118]: ★
                    - generic [ref=f12e119]: ★
                    - generic [ref=f12e120]: ★
                    - generic [ref=f12e121]: ★
                  - generic [ref=f12e122]: $25
                - generic [ref=f12e123]:
                  - generic [ref=f12e126]:
                    - generic [ref=f12e127]: NARS
                    - generic [ref=f12e129]: NARS Mini Radiant Creamy Concealer with Medium Coverage 0.05 oz - mini/ 1.4 g
                  - generic [ref=f12e130]:
                    - generic [ref=f12e131]: ★
                    - generic [ref=f12e132]: ★
                    - generic [ref=f12e133]: ★
                    - generic [ref=f12e134]: ★
                    - generic [ref=f12e135]: ☆
                  - generic [ref=f12e136]: $17
                - generic [ref=f12e137]:
                  - generic [ref=f12e140]:
                    - generic [ref=f12e141]: Fenty Beauty by Rihanna
                    - generic [ref=f12e143]: Fenty Beauty by Rihanna Gloss Bomb Universal Lip Gloss Luminizer 0.3 oz/ 9 mL
                  - generic [ref=f12e144]:
                    - generic [ref=f12e145]: ★
                    - generic [ref=f12e146]: ★
                    - generic [ref=f12e147]: ★
                    - generic [ref=f12e148]: ★
                    - generic [ref=f12e149]: ★
                  - generic [ref=f12e150]: $23
              - generic: GET READY TO SAVE BIG
              - generic: BUY NOW
      - iframe [ref=e201]:
        - generic [ref=f10e1]:
          - generic [ref=f10e2]:
            - generic:
              - generic [ref=f10e3] [cursor=pointer]
              - button [ref=f10e10] [cursor=pointer]
          - iframe [ref=f10e18]:
            - generic [ref=f15e2] [cursor=pointer]:
              - generic [ref=f15e10]:
                - generic [ref=f15e11]:
                  - generic [ref=f15e14]:
                    - generic [ref=f15e15]: Laura Mercier
                    - generic [ref=f15e17]: Laura Mercier Mini Ultra-Blur Talc-Free Longwearing Translucent Loose Setting Powder 0.21 oz / 6 g
                  - generic [ref=f15e18]:
                    - generic [ref=f15e19]: ★
                    - generic [ref=f15e20]: ★
                    - generic [ref=f15e21]: ★
                    - generic [ref=f15e22]: ★
                    - generic [ref=f15e23]: ☆
                  - generic [ref=f15e24]: $26
                - generic [ref=f15e25]:
                  - generic [ref=f15e28]:
                    - generic [ref=f15e29]: NARS
                    - generic [ref=f15e31]: NARS Radiant Creamy Concealer with Hydrating Medium Coverage 0.22 oz/ 6 mL
                  - generic [ref=f15e32]:
                    - generic [ref=f15e33]: ★
                    - generic [ref=f15e34]: ★
                    - generic [ref=f15e35]: ★
                    - generic [ref=f15e36]: ★
                    - generic [ref=f15e37]: ☆
                  - generic [ref=f15e38]: $36
                - generic [ref=f15e39]:
                  - generic [ref=f15e42]:
                    - generic [ref=f15e43]: HUDA BEAUTY
                    - generic [ref=f15e45]: HUDA BEAUTY Mini Easy Bake Loose Baking & Setting Powder 0.21 oz/6 g
                  - generic [ref=f15e46]:
                    - generic [ref=f15e47]: ★
                    - generic [ref=f15e48]: ★
                    - generic [ref=f15e49]: ★
                    - generic [ref=f15e50]: ★
                    - generic [ref=f15e51]: ★
                  - generic [ref=f15e52]: $24
                - generic [ref=f15e53]:
                  - generic [ref=f15e56]:
                    - generic [ref=f15e57]: Hourglass
                    - generic [ref=f15e59]: Hourglass Veil™ Translucent Setting Powder - Talc Free Standard Size Translucent - .36 oz / 10.5 g
                  - generic [ref=f15e60]:
                    - generic [ref=f15e61]: ★
                    - generic [ref=f15e62]: ★
                    - generic [ref=f15e63]: ★
                    - generic [ref=f15e64]: ★
                    - generic [ref=f15e65]: ☆
                  - generic [ref=f15e66]: $52
                - generic [ref=f15e67]:
                  - generic [ref=f15e70]:
                    - generic [ref=f15e71]: rhode
                    - generic [ref=f15e73]: rhode Mini Barrier Restore Cream Comforting Daily Moisturizer 1oz/30ml
                  - generic [ref=f15e74]:
                    - generic [ref=f15e75]: ★
                    - generic [ref=f15e76]: ★
                    - generic [ref=f15e77]: ★
                    - generic [ref=f15e78]: ★
                    - generic [ref=f15e79]: ☆
                  - generic [ref=f15e80]: $20
                - generic [ref=f15e81]:
                  - generic [ref=f15e84]:
                    - generic [ref=f15e85]: Crown Affair
                    - generic [ref=f15e87]: Crown Affair The Mini Texturizing Air Dry Hair Mousse 2 fl oz/60 mL
                  - generic [ref=f15e88]:
                    - generic [ref=f15e89]: ★
                    - generic [ref=f15e90]: ★
                    - generic [ref=f15e91]: ★
                    - generic [ref=f15e92]: ★
                    - generic [ref=f15e93]: ★
                  - generic [ref=f15e94]: $22
                - generic [ref=f15e95]:
                  - generic [ref=f15e98]:
                    - generic [ref=f15e99]: LYS Beauty
                    - generic [ref=f15e101]: LYS Beauty No Limits Cream Bronzer and Contour Stick .25 oz / 7.1 g
                  - generic [ref=f15e102]:
                    - generic [ref=f15e103]: ★
                    - generic [ref=f15e104]: ★
                    - generic [ref=f15e105]: ★
                    - generic [ref=f15e106]: ★
                    - generic [ref=f15e107]: ☆
                  - generic [ref=f15e108]: $24
                - generic [ref=f15e109]:
                  - generic [ref=f15e112]:
                    - generic [ref=f15e113]: HUDA BEAUTY
                    - generic [ref=f15e115]: HUDA BEAUTY Lip Contour Lip Stain for 12-Hour Wear 0.03 oz/1 mL
                  - generic [ref=f15e116]:
                    - generic [ref=f15e117]: ★
                    - generic [ref=f15e118]: ★
                    - generic [ref=f15e119]: ★
                    - generic [ref=f15e120]: ★
                    - generic [ref=f15e121]: ★
                  - generic [ref=f15e122]: $25
                - generic [ref=f15e123]:
                  - generic [ref=f15e126]:
                    - generic [ref=f15e127]: Anastasia Beverly Hills
                    - generic [ref=f15e129]: Anastasia Beverly Hills Haze Mini Eyeshadow Palette
                  - generic [ref=f15e130]:
                    - generic [ref=f15e131]: ★
                    - generic [ref=f15e132]: ★
                    - generic [ref=f15e133]: ★
                    - generic [ref=f15e134]: ★
                    - generic [ref=f15e135]: ☆
                  - generic [ref=f15e136]: $32
                - generic [ref=f15e137]:
                  - generic [ref=f15e140]:
                    - generic [ref=f15e141]: COLOR WOW
                    - generic [ref=f15e143]: COLOR WOW Mini Style on Steroids Color-Safe Texture Spray 1.5 oz / 50 ml
                  - generic [ref=f15e144]:
                    - generic [ref=f15e145]: ★
                    - generic [ref=f15e146]: ★
                    - generic [ref=f15e147]: ★
                    - generic [ref=f15e148]: ★
                    - generic [ref=f15e149]: ☆
                  - generic [ref=f15e150]: $15
              - generic: GET READY TO SAVE BIG
              - generic: BUY NOW
  - contentinfo [ref=e202]:
    - generic [ref=e203]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('RadioCheck', async ({ page, context }) => {  
  3  | await context.tracing.start({ screenshots: true, snapshots: true });
  4  | await page.goto('https://demoqa.com/automation-practice-form');
  5  | //await page.getByRole('radio', { name: 'Male' }).click();
  6  | await page.getByRole('textbox',{name: 'First Name'}).fill('FirstName');
  7  | await page.getByRole('textbox',{name: 'Last Name'}).fill('LastName');
  8  | await page.locator('#userNumber').fill('1234534432');
> 9  | await page.getByRole('radio', { name: 'Maled', exact: true }).check();
     |                                                               ^ Error: locator.check: Test timeout of 60000ms exceeded.
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