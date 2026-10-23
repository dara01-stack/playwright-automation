import {test, expect, request} from '@playwright/test'
let user='update name'
// test('requestaplitest', async({request})=>{
// const test = await request.get('https://jsonplaceholder.typicode.com/users/1')
// //console.log(await test.json())
// console.log((await test.json())[0].body)

// })

test.skip('requestaplitest1', async({request})=>{
const test1 = await request.put('https://jsonplaceholder.typicode.com/users/1', {
      data: {
        name: `${user}`
      }
    })
    console.log(await test1.json())
const test = await request.get('https://jsonplaceholder.typicode.com/users/1')
//console.log(await test.json())
//console.log((await test.json())[0].body)

})

test('mockinapi', async({page, request})=>{
    await page.route('**/users/1', async route => {
        await route.fulfill({
            status : 200, contextType:'application/json', 
            json: {  name: 'Testing' }
        })
       
    })
 await page.goto('about:blank');
 const responsetxt = await page.evaluate( async () =>{
    
 })
 await page.goto('https://jsonplaceholder.typicode.com/users/1')
await page.waitForTimeout(10000)
 //const test1 = await request.get('https://jsonplaceholder.typicode.com/users/1')

 

} )