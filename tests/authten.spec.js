

import{test, expect} from '@playwright/test';
import{Logintest} from '../pages/test_page.js'

test ('netlogin', async({page}) =>{
    const testlog = new Logintest(page)
    await testlog.goto()
    await testlog.login('Admin','admin123')
await page.waitForTimeout(10000)
})