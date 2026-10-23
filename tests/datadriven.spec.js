import {test, expect } from '@playwright/test'
import fs from 'fs'

const datapath= 'TestData/data1.json';

const userdata = JSON.parse(fs.readFileSync(datapath,'utf8'))
for(const testuser of userdata){
    test(`testdrive ${testuser.username}`, async({page})=> {
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill(testuser.username)
    await page.locator('#password').fill(testuser.password)
    await page.locator('#login-button').click()
    await expect.soft(page.locator('.app_logo')).toContainText(testuser.excpectedresult)
})
}

// import {test , expect} from '@playwright/test'
// import fs from 'fs'
// import { parse } from 'csv-parse/sync'

// const tespath= 'TestData/data1.csv'
// const testcsvfile= fs.readFileSync(tespath)
// const records = parse(testcsvfile, {
//   columns: true,
//   skip_empty_lines: true
// });
