import {test, expect} from '@playwright/test';
import fs from 'fs';
import { TIMEOUT } from 'node:dns';
import { buffer } from 'node:stream/consumers';

test.skip('alertsdialogcheck', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    await expect(page.getByText('Click Button to see alert')).toBeVisible();
    await page.on("dialog", async(a)  => {
       console.log(await a.message()); 
       a.accept();
    });
    //await page.locator('//button[@id="alertButton"]').click();
await page.waitForTimeout(10000);

});

test.skip('ConfirmAlert', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    await expect(page.getByText('On button click, confirm box will appear')).toBeVisible();
    await page.on("dialog", async(b)  => {
       
       console.log(await b.message()); 
       //b.accept();
       b.dismiss();
    });
    await page.locator('//button[@id="confirmButton"]').click();
    console.log(await expect(page.getByText('You selected Cancel')).toBeVisible());
    //await page.getByRole('button', { name: 'Click me' }).click();
await page.waitForTimeout(10000);

});

test.skip('WaitforAlert', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    await expect(page.getByText('On button click, confirm box will appear')).toBeVisible();
    page.on("dialog", async(c)  => {
       
       console.log(c.message()); 
       await c.accept();
       //c.dismiss();
    });
    await page.locator('//button[@id="timerAlertButton"]').click();
   // console.log(await expect(page.getByText('You selected Cancel')).toBeVisible());
    //await page.getByRole('button', { name: 'Click me' }).click();
await page.waitForTimeout(10000);

});


test.skip('Alerttextbox', async ({ page }) => {
    const valueentered = "new client";
    await page.goto('https://demoqa.com/alerts');
    await expect(page.getByText('On button click, confirm box will appear')).toBeVisible();
    page.on("dialog", async(d)  => {
       
       //console.log(d.message()); 
       await d.accept(valueentered);
       //c.dismiss();
    });
    await page.locator('//button[@id="promtButton"]').click();
    console.log(await expect(page.locator('#promptResult')).toContainText(valueentered));
    //const test =await page.locator('#promptResult').toContain(valueentered);
    //console.log(expect(test).toContain(valueentered));
//    console.log(test);
   //sconsole.log(expect(page.locator('#promptResult"]').toContain(valueentered)));
    //await page.getByRole('button', { name: 'Click me' }).click();
//await page.waitForTimeout(10000);

});

test.skip ('Authen', async ({ page }) => {
    const user = "admin";
    const password = "admin";
    const encroptstring = Buffer.from(`${user}:${password}`).toString('base64');
    await page.route('**/*',(route)=>{
    const headers ={
        'Authorization': `Basic ${encroptstring}`,
        };
        route.continue({headers});
});
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    const textvalue = await page.locator('//div[@class="example"]//h3').textContent();
    expect(textvalue).toContain('Basic Auth');
    await page.waitForTimeout(10000);
    //await expect(page.locator('//div[@class="example"]//h3')).toHaveText('Basic Auth');

});
test.skip ('drag drop', async ({ page }) => {
   //test.skip();
    await page.goto('https://drag-and-drop-tricks.webflow.io/');
   // const dragfrom = page.locator('.draggable.correct.ui-draggable.ui-draggable-handle');
   // const dragtoloc = page.locator('.quiz-option.is-drop');
   await page.locator('.draggable.correct.ui-draggable.ui-draggable-handle').hover();
   await page.mouse.down();
   await page.locator('.quiz-option.is-drop').hover();
   await page.mouse.up();
   // await dragfrom.dragTo(dragtoloc);
   // await dragfrom.dragTo(dragtoloc);
    await page.waitForTimeout(10000);
});

test.skip ('AutoAssert', async ({ page }) => {
   await page.goto('https://seleniumbase.io/demo_page');
   const checkbox1 = await page.locator('#checkBox2')
   await checkbox1.check();
   await expect(checkbox1).toBeChecked();
  const testlink = await page.locator('#myLink1');
  await expect(testlink).toHaveAttribute('href','https://seleniumbase.com');
});

test.skip ('SoftAssert', async ({ page }) => {
   await page.goto('https://seleniumbase.io/demo_page');
   const checkbox1 = await page.locator('#checkBox2')
   await checkbox1.check();
   await expect.soft(checkbox1).not.toBeChecked();
  const testlink = await page.locator('#myLink1');
  await expect(testlink).toHaveAttribute('href','https://seleniumbase.com');
});

test.skip ('restGet', async ({ request }) => {
  const pageurl = 'https://jsonplaceholder.typicode.com/posts/1'
  const responsetext = await request.get(pageurl);
  expect.soft(responsetext.status()).toBe(200)
  const requestjson = await responsetext.json();
  expect(requestjson.title).toContain('facere');


});

test.skip ('ComplexrestGet', async ({ page }) => {
  const pageurl = "https://jsonplaceholder.typicode.com/posts";
  const responsetext = await page.request.get(pageurl);
  await expect(responsetext).toBeOK();

  //expect.soft(responsetext.status()).toBe(200)
  const requestjson = await responsetext.json();
  await expect(requestjson.length).toBeGreaterThan(1);
  await expect(requestjson[1].userId).toBe(1);
  //expect(requestjson.title).toContain('facere');


});

test.skip ('PostApi', async ({ page }) => {
  const postpageurl = await page.request.post('https://jsonplaceholder.typicode.com/posts', {
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    data: {
    title: 'footest',
    body: 'bar',
    userId: 1,
  },

  });

  await expect(postpageurl).toBeOK();
  const sentjson= await postpageurl.json();
  const getjsonheaders = postpageurl.headers();
  expect(getjsonheaders['Content-type']).toContain('application/json')
  //expect(sentjson.title).toBe('footest');
//   const responsetext = await page.request.get(pageurl);
//   await expect(responsetext).toBeOK();

//   //expect.soft(responsetext.status()).toBe(200)
//   const requestjson = await responsetext.json();
//   await expect(requestjson.length).toBeGreaterThan(1);
//   await expect(requestjson[1].userId).toBe(1);
//   //expect(requestjson.title).toContain('facere');


});


test.skip ('putApi', async ({ request }) => {
  const putpageurl = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    data: {
    title: 'footestput',
    body: 'bar',
    userId: 1,
  }
  })
    await expect(putpageurl).toBeOK();
    const getageurl = await putpageurl.json();
    const getheader = putpageurl.headers();
    expect(getageurl.title).toContain('footestput');
    expect(getheader['content-type']).toContain('application/json');
  })

  test.skip ('patchApi', async ({ request }) => {
  const putpageurl = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    data: {
    title: 'footestpatch',
 }
  })
    await expect(putpageurl).toBeOK();
    const getageurl = await putpageurl.json();
    const getheader = putpageurl.headers();
    expect(getageurl.id).toBe(1);
    expect(getheader['content-type']).toContain('application/json');
  })

test.skip ('deleteApi', async ({ request }) => {
  const putpageurl = await request.delete('https://jsonplaceholder.typicode.com/posts/1')
    await expect(putpageurl).toBeOK();
    const getageurl = await putpageurl.json();
    console.log("test" , getageurl);
    const getheader = putpageurl.headers();
    //expect(getageurl.id).toBe(1);
    expect(getheader['content-type']).toContain('application/json');
  })

  test.skip ('commentsChainApi', async ({ request }) => {
  const putpageurl = await request.get('https://jsonplaceholder.typicode.com/comments')
    expect(putpageurl.status()).toBe(200);
    const getageurl = await putpageurl.json();
    const getbodyvalue = getageurl[0];
    //console.log(getbodyvalue.id);
    //const url = `https://jsonplaceholder.typicode.com/comments?postId=${getbodyvalue.id}`;
    const getcomment1 = await request.get(`https://jsonplaceholder.typicode.com/comments?postId=${getbodyvalue.id}`)
    const getnewcomment = await getcomment1.json();
    console.log(getnewcomment.length);
    console.log(getnewcomment[1]);
    console.log("test" , getnewcomment[1].postId);
    //const getheader = putpageurl.headers();
    //expect(getageurl.id).toBe(1);
   // expect(getheader['content-type']).toContain('application/json');
  })

    test.skip ('MockApi', async ({ page }) => {
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [{name : 'Testing', id:30}]
        await route.fulfill({json})
    })
await page.goto('http://demo.playwright.dev/api-mocking/')

  })

// test.use({
//     viewport:{width: 1600, height: 1200},
// });

test.describe.skip('groutest', () =>
    { 
        test("MockApi1", async ({page}) => {
        await page.route('*/**/api/v1/fruits', async route => {
            const fakejson = [{name: 'newtest',id: 1}]
            await route.fulfill({json:fakejson});
             })
        await page.goto('http://demo.playwright.dev/api-mocking/') ;
        await expect(page.getByText('newtest')).toBeVisible();
         })
        
        test("MockApi2", async ({page}) => {
        await page.goto('http://demo.playwright.dev/api-mocking/') ;
        await expect(page.getByText('Banana')).toBeVisible();
        })
    })

    // const testdatafile = 'TestData/data1.json'
    // const testdata = JSON.parse(fs.readFileSync(testdatafile,'utf8'));
    // for(const user of testdata)  {
    //     test(`datadriventest1 ${user.username}`, async ({page}) => {
    //             await page.goto("https://www.saucedemo.com/");
    //             await page.locator('#user-name').fill(user.username)
    //              await page.locator('#password').fill(user.password)
    //              await page.locator('#login-button').click();
    //         })
    // }
    

test ('iframetest', async({page})=> {
    await page.goto('https://the-internet.herokuapp.com/nested_frames')
    const testiframe1 = page.frameLocator('//frame[@name="frame-top"]')
    const testsubfram = testiframe1.frameLocator('frame[name="frame-middle"]')
    console.log(await testsubfram.locator('#content').innerText())
    expect(testsubfram.locator('#content')).toHaveText('MIDDLE')
    await page.waitForTimeout(10000)
})


