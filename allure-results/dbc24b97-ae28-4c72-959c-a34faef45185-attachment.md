# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Authentication.spec.js >> logintest and logout
- Location: tests\Authentication.spec.js:4:5

# Error details

```
TypeError: page.getBytext is not a function
```

# Test source

```ts
  1  | 
  2  | exports.LogoutPage=
  3  | class LogoutPage {
  4  |     constructor(page){
  5  |         this.userdropdown=page.locator('.oxd-userdropdown-tab')
  6  |         //this.buttonlogtout=this.page.getByText('Logout')
> 7  |         this.buttonlogtout=page.getBytext('Logout')
     |                                 ^ TypeError: page.getBytext is not a function
  8  |     }
  9  |     async Logout(){
  10 |     await this.userdropdown.click();
  11 |     await this.buttonlogtout.click();
  12 |     }
  13 | }  
```