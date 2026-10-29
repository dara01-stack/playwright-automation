# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testviacodegen2.spec.js >> test
- Location: tests\testviacodegen2.spec.js:3:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'Payroll Administrator' })

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "Recruitment" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: manda user
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - listitem [ref=f2e132] [cursor=pointer]:
            - link "Candidates" [ref=f2e133]:
              - /url: "#"
          - listitem [ref=f2e134] [cursor=pointer]:
            - link "Vacancies" [ref=f2e135]:
              - /url: "#"
          - button "" [ref=f2e137] [cursor=pointer]
  - generic [ref=f2e139]:
    - generic [ref=f2e141]:
      - generic [ref=f2e142]:
        - generic [ref=f2e143]:
          - heading "Candidates" [level=5] [ref=f2e145]
          - button "" [ref=f2e148] [cursor=pointer]
        - separator [ref=f2e150]
        - generic [ref=f2e152]:
          - generic [ref=f2e154]:
            - generic [ref=f2e156]:
              - generic [ref=f2e157]: Job Title
              - generic [ref=f2e161] [cursor=pointer]:
                - generic [ref=f2e162]: "-- Select --"
                - generic [ref=f2e163]: 
            - generic [ref=f2e166]:
              - generic [ref=f2e167]: Vacancy
              - generic [ref=f2e170]:
                - generic [ref=f2e171] [cursor=pointer]:
                  - generic [active] [ref=f2e172]: "-- Select --"
                  - generic [ref=f2e173]: 
                - listbox [ref=f2e175]:
                  - option "No Records Found" [ref=f2e176] [cursor=pointer]
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: Hiring Manager
              - generic [ref=f2e183] [cursor=pointer]:
                - generic [ref=f2e184]: "-- Select --"
                - generic [ref=f2e185]: 
            - generic [ref=f2e188]:
              - generic [ref=f2e189]: Status
              - generic [ref=f2e193] [cursor=pointer]:
                - generic [ref=f2e194]: "-- Select --"
                - generic [ref=f2e195]: 
          - generic [ref=f2e198]:
            - generic [ref=f2e200]:
              - generic [ref=f2e201]: Candidate Name
              - textbox "Type for hints..." [ref=f2e206]
            - generic [ref=f2e208]:
              - generic [ref=f2e209]: Keywords
              - textbox "Enter comma seperated words..." [ref=f2e212]
            - generic [ref=f2e214]:
              - generic [ref=f2e215]: Date of Application
              - generic [ref=f2e219]:
                - textbox "From" [ref=f2e220]
                - generic [ref=f2e221] [cursor=pointer]: 
            - generic [ref=f2e228]:
              - textbox "To" [ref=f2e229]
              - generic [ref=f2e230] [cursor=pointer]: 
          - generic [ref=f2e234]:
            - generic [ref=f2e235]: Method of Application
            - generic [ref=f2e239] [cursor=pointer]:
              - generic [ref=f2e240]: "-- Select --"
              - generic [ref=f2e241]: 
          - separator [ref=f2e243]
          - generic [ref=f2e244]:
            - button "Reset" [ref=f2e245] [cursor=pointer]
            - button "Search" [ref=f2e246] [cursor=pointer]
      - generic [ref=f2e247]:
        - button " Add" [ref=f2e249] [cursor=pointer]:
          - generic [ref=f2e250]: 
          - text: Add
        - generic [ref=f2e251]:
          - separator [ref=f2e252]
          - generic [ref=f2e253]: (11) Records Found
        - table [ref=f2e256]:
          - rowgroup [ref=f2e257]:
            - row [ref=f2e258]:
              - columnheader "" [ref=f2e259]:
                - generic [ref=f2e261] [cursor=pointer]:
                  - checkbox "" [ref=f2e262]
                  - generic [ref=f2e263]: 
              - columnheader "Vacancy " [ref=f2e265]:
                - text: Vacancy
                - generic [ref=f2e266]:
                  - generic [ref=f2e267] [cursor=pointer]: 
                  - text:  
              - columnheader "Candidate " [ref=f2e268]:
                - text: Candidate
                - generic [ref=f2e269]:
                  - generic [ref=f2e270] [cursor=pointer]: 
                  - text:  
              - columnheader "Hiring Manager " [ref=f2e271]:
                - text: Hiring Manager
                - generic [ref=f2e272]:
                  - generic [ref=f2e273] [cursor=pointer]: 
                  - text:  
              - columnheader "Date of Application " [ref=f2e274]:
                - text: Date of Application
                - generic [ref=f2e275]:
                  - generic [ref=f2e276] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f2e277]:
                - text: Status
                - generic [ref=f2e278]:
                  - generic [ref=f2e279] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f2e280]
          - rowgroup [ref=f2e281]:
            - row [ref=f2e283]:
              - cell "" [ref=f2e284]:
                - generic [ref=f2e287] [cursor=pointer]:
                  - checkbox "" [ref=f2e288]
                  - generic [ref=f2e289]: 
              - cell [ref=f2e291]
              - cell "Manoj Regmi" [ref=f2e292]
              - cell "(Deleted)" [ref=f2e294]
              - cell "2024-05-02" [ref=f2e296]
              - cell [ref=f2e298]
              - cell [ref=f2e299]:
                - generic [ref=f2e300]:
                  - button "" [ref=f2e301] [cursor=pointer]
                  - button "" [ref=f2e303] [cursor=pointer]
                  - button "" [ref=f2e305] [cursor=pointer]
            - row [ref=f2e308]:
              - cell "" [ref=f2e309]:
                - generic [ref=f2e312] [cursor=pointer]:
                  - checkbox "" [ref=f2e313]
                  - generic [ref=f2e314]: 
              - cell [ref=f2e316]
              - cell "Manoj Regmi" [ref=f2e317]
              - cell "(Deleted)" [ref=f2e319]
              - cell "2024-05-02" [ref=f2e321]
              - cell [ref=f2e323]
              - cell [ref=f2e324]:
                - generic [ref=f2e325]:
                  - button "" [ref=f2e326] [cursor=pointer]
                  - button "" [ref=f2e328] [cursor=pointer]
                  - button "" [ref=f2e330] [cursor=pointer]
            - row [ref=f2e333]:
              - cell "" [ref=f2e334]:
                - generic [ref=f2e337] [cursor=pointer]:
                  - checkbox "" [ref=f2e338]
                  - generic [ref=f2e339]: 
              - cell [ref=f2e341]
              - cell "Charles Haywire" [ref=f2e342]
              - cell "(Deleted)" [ref=f2e344]
              - cell "2022-15-07" [ref=f2e346]
              - cell [ref=f2e348]
              - cell [ref=f2e349]:
                - generic [ref=f2e350]:
                  - button "" [ref=f2e351] [cursor=pointer]
                  - button "" [ref=f2e353] [cursor=pointer]
                  - button "" [ref=f2e355] [cursor=pointer]
            - row [ref=f2e358]:
              - cell "" [ref=f2e359]:
                - generic [ref=f2e362] [cursor=pointer]:
                  - checkbox "" [ref=f2e363]
                  - generic [ref=f2e364]: 
              - cell [ref=f2e366]
              - cell "Jennifer Clinton" [ref=f2e367]
              - cell "(Deleted)" [ref=f2e369]
              - cell "2022-12-07" [ref=f2e371]
              - cell [ref=f2e373]
              - cell [ref=f2e374]:
                - generic [ref=f2e375]:
                  - button "" [ref=f2e376] [cursor=pointer]
                  - button "" [ref=f2e378] [cursor=pointer]
                  - button "" [ref=f2e380] [cursor=pointer]
            - row [ref=f2e383]:
              - cell "" [ref=f2e384]:
                - generic [ref=f2e387] [cursor=pointer]:
                  - checkbox "" [ref=f2e388]
                  - generic [ref=f2e389]: 
              - cell [ref=f2e391]
              - cell "Chris Harris" [ref=f2e392]
              - cell "(Deleted)" [ref=f2e394]
              - cell "2022-11-07" [ref=f2e396]
              - cell [ref=f2e398]
              - cell [ref=f2e399]:
                - generic [ref=f2e400]:
                  - button "" [ref=f2e401] [cursor=pointer]
                  - button "" [ref=f2e403] [cursor=pointer]
                  - button "" [ref=f2e405] [cursor=pointer]
            - row [ref=f2e408]:
              - cell "" [ref=f2e409]:
                - generic [ref=f2e412] [cursor=pointer]:
                  - checkbox "" [ref=f2e413]
                  - generic [ref=f2e414]: 
              - cell [ref=f2e416]
              - cell "Peter Smith" [ref=f2e417]
              - cell "(Deleted)" [ref=f2e419]
              - cell "2022-11-07" [ref=f2e421]
              - cell [ref=f2e423]
              - cell [ref=f2e424]:
                - generic [ref=f2e425]:
                  - button "" [ref=f2e426] [cursor=pointer]
                  - button "" [ref=f2e428] [cursor=pointer]
                  - button "" [ref=f2e430] [cursor=pointer]
            - row [ref=f2e433]:
              - cell "" [ref=f2e434]:
                - generic [ref=f2e437] [cursor=pointer]:
                  - checkbox "" [ref=f2e438]
                  - generic [ref=f2e439]: 
              - cell [ref=f2e441]
              - cell "Jo Denton" [ref=f2e442]
              - cell "(Deleted)" [ref=f2e444]
              - cell "2022-08-07" [ref=f2e446]
              - cell [ref=f2e448]
              - cell [ref=f2e449]:
                - generic [ref=f2e450]:
                  - button "" [ref=f2e451] [cursor=pointer]
                  - button "" [ref=f2e453] [cursor=pointer]
                  - button "" [ref=f2e455] [cursor=pointer]
            - row [ref=f2e458]:
              - cell "" [ref=f2e459]:
                - generic [ref=f2e462] [cursor=pointer]:
                  - checkbox "" [ref=f2e463]
                  - generic [ref=f2e464]: 
              - cell [ref=f2e466]
              - cell "Joe Root" [ref=f2e467]
              - cell "(Deleted)" [ref=f2e469]
              - cell "2022-05-07" [ref=f2e471]
              - cell [ref=f2e473]
              - cell [ref=f2e474]:
                - generic [ref=f2e475]:
                  - button "" [ref=f2e476] [cursor=pointer]
                  - button "" [ref=f2e478] [cursor=pointer]
                  - button "" [ref=f2e480] [cursor=pointer]
            - row [ref=f2e483]:
              - cell "" [ref=f2e484]:
                - generic [ref=f2e487] [cursor=pointer]:
                  - checkbox "" [ref=f2e488]
                  - generic [ref=f2e489]: 
              - cell [ref=f2e491]
              - cell "Martine Tennat" [ref=f2e492]
              - cell "(Deleted)" [ref=f2e494]
              - cell "2022-20-06" [ref=f2e496]
              - cell [ref=f2e498]
              - cell [ref=f2e499]:
                - generic [ref=f2e500]:
                  - button "" [ref=f2e501] [cursor=pointer]
                  - button "" [ref=f2e503] [cursor=pointer]
                  - button "" [ref=f2e505] [cursor=pointer]
            - row [ref=f2e508]:
              - cell "" [ref=f2e509]:
                - generic [ref=f2e512] [cursor=pointer]:
                  - checkbox "" [ref=f2e513]
                  - generic [ref=f2e514]: 
              - cell [ref=f2e516]
              - cell "Phil Hughes" [ref=f2e517]
              - cell "(Deleted)" [ref=f2e519]
              - cell "2022-08-06" [ref=f2e521]
              - cell [ref=f2e523]
              - cell [ref=f2e524]:
                - generic [ref=f2e525]:
                  - button "" [ref=f2e526] [cursor=pointer]
                  - button "" [ref=f2e528] [cursor=pointer]
                  - button "" [ref=f2e530] [cursor=pointer]
            - row [ref=f2e533]:
              - cell "" [ref=f2e534]:
                - generic [ref=f2e537] [cursor=pointer]:
                  - checkbox "" [ref=f2e538]
                  - generic [ref=f2e539]: 
              - cell [ref=f2e541]
              - cell "Joshua Malfoy" [ref=f2e542]
              - cell "(Deleted)" [ref=f2e544]
              - cell "2022-10-05" [ref=f2e546]
              - cell [ref=f2e548]
              - cell [ref=f2e549]:
                - generic [ref=f2e550]:
                  - button "" [ref=f2e551] [cursor=pointer]
                  - button "" [ref=f2e553] [cursor=pointer]
                  - button "" [ref=f2e555] [cursor=pointer]
    - generic [ref=f2e558]:
      - paragraph [ref=f2e559]: OrangeHRM OS 5.9
      - paragraph [ref=f2e560]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e561] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  | await page.goto('https://opensource-demo.orangehrmlive.com/');
  5  | const usernameInput = page.getByRole('textbox', { name: 'Username' });
  6  | await usernameInput.fill('Admin');
  7  | const passwordInput = page.getByRole('textbox', { name: 'Password' });
  8  | await passwordInput.fill('admin123');
  9  | await page.getByRole('button', { name: 'Login' }).click();
  10 | 
  11 | expect(page.url()).toContain('web/index.php/dashboard/index');
  12 | await page.getByRole('link', { name: 'Recruitment' }).click();
  13 | 
  14 | // await page.locator('label:has-text("Vacancy")')
  15 | //   .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
  16 | //   .locator('.oxd-select-text')
  17 | //   .click();
  18 | const testsearch = "Can"
  19 | const testMatch ="Candidate Auto Test179391"
  20 | await page.locator('.oxd-input-group').filter({ hasText: 'Vacancy' }).locator('.oxd-select-text').click();
  21 | //await page.locator('.oxd-select-text-input').filter({ hasText: 'Payroll Administrator' }).click();
  22 | //console.log(await page.locator('.oxd-select-option').allTextContents());
  23 | //await page.locator('.oxd-select-text').filter({ hasText: 'Payroll Administrator' }).click();
  24 | //await page.getByText('Payroll Administrator',{ exact: true }).click();
> 25 | await page.getByRole('option', { name: 'Payroll Administrator' }).click();
     |                                                                   ^ Error: locator.click: Test timeout of 60000ms exceeded.
  26 | await page.locator('input[placeholder="Type for hints..."]').fill(testsearch);  
  27 | //await page.locator('.oxd-autocomplete-option').first().waitFor();
  28 | await page.waitForTimeout(10000);
  29 | console.log(await page.locator('.oxd-autocomplete-option').allTextContents());
  30 | const Textvalues = page.locator('.oxd-autocomplete-option');
  31 | console.log(Textvalues);
  32 | const valueCount = await Textvalues.count();
  33 | console.log(valueCount);
  34 | for (let i = 0; i < valueCount; i++) {
  35 |     const textValue = await Textvalues.nth(i).textContent();
  36 |     console.log(`Option ${i}: "${textValue}"`);
  37 |     if (textValue?.trim()===testMatch) {
  38 |         await Textvalues.nth(i).click();
  39 |         break;
  40 | }}
  41 | //await page.keyboard.press('ArrowDown');
  42 | //await page.keyboard.press('Enter');
  43 | 
  44 | //await page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text').click();
  45 | // const count = await page.getByText('Payroll Administrator', { exact: true }).count();
  46 | 
  47 | // //console.log(count);
  48 | // await page.getByRole('option', { name: 'Payroll Administrator' }).click();
  49 | 
  50 | await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).click();
  51 | await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).fill('test, test2');
  52 | await page.getByRole('button', { name: 'Search' }).click();
  53 | // await page.locator('.oxd-table-body').waitFor();
  54 | // const noRecords = page.getByText('No Records Found');
  55 | 
  56 | // if (await noRecords.isVisible()) {
  57 | //   console.log('No records returned');
  58 | // }
  59 | //await page.pause();
  60 | 
  61 | //await page.getByPlaceholder ('label:has-text("No Records Found")').isVisible();
  62 | //console.log(await page.getByText('No Records Found').count());
  63 | //const noRecords = await page.getByText('No Records Found').isVisible();
  64 | //const noRecords = await page.locator 
  65 | //getByText('No Records Found')
  66 | //const noRecordsLocator = page.locator('div').filter({ hasText: 'No Records Found' });
  67 | ////console.log(await noRecordsLocator.count());
  68 | //await page.waitForTimeout(10000);
  69 | //console.log(page.locator('div').filter({ hasText: 'No Records Found' })).isVisible();
  70 | //const noRecords = await page.locator('span').filter({ hasText: 'No Records Found' }).isVisible();
  71 | //const noRecords = page.getByText('No Records Found').waitFor({ state: 'visible' });
  72 | 
  73 | // await noRecords.waitFor({state: 'visible'});
  74 | 
  75 | //console.log(noRecords);
  76 | 
  77 | // await page.locator('xpath=//input[@placeholder="Type for hints..."]').fill('test2');
  78 | 
  79 | //await page.pause();
  80 | 
  81 | //const test = await expect(page.locator('div[class="orangehrm-horizontal-padding orangehrm-vertical-padding"] span[class="oxd-text oxd-text--span"]')).toHaveText('No Records Found');
  82 | //console.log(test);
  83 | //await expect(page.getByText('No Records Found')).toBeVisible();
  84 | await page.waitForTimeout(10000);
  85 | 
  86 | console.log(await page.getByText('No Records Found').isVisible());
  87 | 
  88 | // const noRecords1 = await page.locator('div').filter({ hasText: /^No Records Found$/ }).isVisible();
  89 | 
  90 | // console.log(noRecords1);
  91 | //await page.locator("xpath=(//div[@class='oxd-select-text-input'])[2]").isVisible();
  92 | //page.waitForTimeout(10000);
  93 | 
  94 | 
  95 | });
```