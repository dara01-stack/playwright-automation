import{test as base} from '@playwright/test'

export const  test = base.extend({loggedInPage: async({page}, use)=>{
    await page.goto('https:saucedemo.com')
    await page.locator('input[placeholder="Username"]').fill('standard_user')
    await page.locator('input[placeholder="Password"]').fill('secret_sauce')
    await page.locator('#login-button').click()
    await use(page);
}
})
module.exports = { test };