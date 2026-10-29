exports.Logintest =
class Logintest {
    constructor (page){
        this.page=page
        this.Loguser= page.locator('input[placeholder="Username"]')
        this.Logpws= page.locator('input[placeholder="Password"]')
        this.btn= page.locator('button[type="submit"]')
    }
    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    async login(usr,pwd)
    {
        await this.Loguser.fill(usr)
        await this.Logpws.fill(pwd)
        await this.btn.click()

    }
}
