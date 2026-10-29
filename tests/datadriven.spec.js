import {test, expect } from '@playwright/test'
import fs from 'fs'

const datapath= 'TestData/data1.json';

const userdata = JSON.parse(fs.readFileSync(datapath,'utf8'))
for(const testuser of userdata){
    test(`testdrive ${testuser.username}`, async({page})=> {
    let startTime;
    
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill(testuser.username)
    await page.locator('#password').fill(testuser.password)
    if (testuser.type === 'slow') {
        startTime = Date.now();
    }
    await page.locator('#login-button').click()
    // if (testuser.type=== 'success'){
    //     await expect.soft(page.locator('.app_logo')).toContainText(testuser.excpectedresult)
    //     } 
    // else 
    //     {
    //     await expect.soft(page.locator('[data-test="error"]')).toContainText(testuser.excpectedresult)
    // }

    switch(testuser.type){
        case 'success' :
            await expect(page.locator('.app_logo')).toContainText(testuser.excpectedresult)  
            break;
        case 'error' :
            console.log (await page.locator('[data-test="error"]').textContent())  
            await expect(page.locator('[data-test="error"]')).toContainText(testuser.excpectedresult)  
            break;  
        case 'problem' :
            console.log (await page.locator('.inventory_item_desc').filter({hasText: 'carry.allTheThings()'}).textContent())  
            await expect(page.locator('.inventory_item_desc').filter({hasText: 'carry.allTheThings()'})).toContainText(testuser.excpectedresult)  
            break;  
        case 'slow' :
            // const starttime =Date.now()
            console.log("Inside slow case");
            await page.waitForURL('**/inventory.html');
            const endtime=Date.now()
            const elapsedDuration = endtime - startTime
            console.log(elapsedDuration)
            await expect(page.locator('.app_logo')).toContainText(testuser.excpectedresult) 
            expect(elapsedDuration).toBeGreaterThan(2000) 

            break;
        default:
            throw new Error(`Unknown type: ${testuser.type}`);
    }
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
