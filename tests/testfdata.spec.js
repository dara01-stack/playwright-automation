import{test,expect} from '@playwright/test';
import{faker} from '@faker-js/faker';


test('createfaker', async({page})=> {
    
    const fname=faker.person.firstName();
    const lnam=faker.person.lastName();
    const email=faker.internet.email();

    console.log(`printing info, ${fname},${lnam},${email}`)

    await page.goto('https://demoqa.com/automation-practice-form')

    const usname1= page.locator('#firstName')
    await usname1.fill('test')
    const usname= await page.$('#firstName')
    await usname.fill('test')


    await page.locator('#firstName').fill(fname)
    await page.locator('#lastName').fill(lnam)
    await page.locator('#userEmail').fill(email)
    await page.waitForTimeout(10000)

})