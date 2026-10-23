# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authten.spec.js >> netlogin
- Location: tests\authten.spec.js:6:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'fill')
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | exports.Logintest =
  2  | class Logintest {
  3  |     constructor (page){
  4  |         this.page=page
  5  |         this.page.Loguser= page.locator('input[placeholder="Username"]')
  6  |         this.Logpws= page.locator('input[placeholder="Password"]')
  7  |         this.btn= page.locator('button[type="submit"]')
  8  |     }
  9  |     async goto(){
  10 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  11 |     }
  12 |     async login(usr,pwd)
  13 |     {
> 14 |         await this.Loguser.fill(usr)
     |                            ^ TypeError: Cannot read properties of undefined (reading 'fill')
  15 |         await this.Logpws.fill(pwd)
  16 |         await this.btn.click()
  17 | 
  18 |     }
  19 | }
  20 | 
```