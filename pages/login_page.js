exports.LoginPage=
//export class LoginPage {
class LoginPage{
    constructor(page){
        this.page=page
        this.usernameInput=page.locator('input[placeholder="Username"]')
        this.passwordInput=page.locator('input[placeholder="Password"]')
        this.buttonInput=page.locator('button[type="submit"]')
    }
    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    async Login(username, password){
     await this.usernameInput.fill(username)
     await this.passwordInput.fill(password)
     await this.buttonInput.click();
    
    }
}
