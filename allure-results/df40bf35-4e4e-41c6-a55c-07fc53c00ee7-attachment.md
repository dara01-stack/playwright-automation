# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authten.spec.js >> testinglogin via class
- Location: tests\authten.spec.js:4:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'locator')
```

# Test source

```ts
  1  | exports.Testlogin=
  2  | class LoginTest{
  3  |     constructor(page)
  4  |     {
  5  |         this.page= page
> 6  |         this.loginuser = this.page.locator('input[placeholder="Username"]')
     |                                    ^ TypeError: Cannot read properties of undefined (reading 'locator')
  7  |         this.loginpwd  = this.page.locator('input[placeholder="Password"]')
  8  |         this.loginbtn  = this.page.locator('button[type="submit"]')
  9  | 
  10 |     }
  11 |  async goto(){
  12 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')  
  13 |  }
  14 |  async LoginPage(usrname,paswrd){
  15 |         await this.loginuser.fill(usrname)
  16 |         await this.loginpwd.fill(paswrd)
  17 |         await this.loginbtn.click()
  18 |  }
  19 |  
  20 | }
  21 | 
  22 | 
  23 | exports.LoginPage=
  24 | //export class LoginPage {
  25 | class LoginPage{
  26 |     constructor(page){
  27 |         this.page=page
  28 |         this.usernameInput=page.locator('input[placeholder="Username"]')
  29 |         this.passwordInput=page.locator('input[placeholder="Password"]')
  30 |         this.buttonInput=page.locator('button[type="submit"]')
  31 |     }
  32 |     async goto(){
  33 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  34 |     }
  35 |     async Login(username, password){
  36 |      await this.usernameInput.fill(username)
  37 |      await this.passwordInput.fill(password)
  38 |      await this.buttonInput.click();
  39 |     
  40 |     }
  41 | }
  42 | 
```