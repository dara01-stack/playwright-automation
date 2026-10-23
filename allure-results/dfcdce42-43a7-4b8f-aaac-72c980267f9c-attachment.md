# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: requestrestapi.spec.js >> requestaplitest1
- Location: tests\requestrestapi.spec.js:10:5

# Error details

```
ReferenceError: putResponse is not defined
```

# Test source

```ts
  1  | import {test, expect, request} from '@playwright/test'
  2  | 
  3  | test.skip('requestaplitest', async({request})=>{
  4  | const test = await request.get('https://jsonplaceholder.typicode.com/posts')
  5  | //console.log(await test.json())
  6  | console.log((await test.json())[0].body)
  7  | 
  8  | })
  9  | 
  10 | test('requestaplitest1', async({request})=>{
  11 | const test1 = await request.put('https://jsonplaceholder.typicode.com/users/1', {
  12 |       data: {
  13 |         name: 'Updated User'
  14 |       }
  15 |     })
> 16 | console.log(await putResponse.json());
     |                   ^ ReferenceError: putResponse is not defined
  17 | 
  18 | const test = await request.get('https://jsonplaceholder.typicode.com/users/1')
  19 | console.log(await test.json())
  20 | //console.log((await test.json())[0].body)
  21 | 
  22 | })
```