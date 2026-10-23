
exports.LogoutPage=
class LogoutPage {
    constructor(page){
        this.userdropdown=page.locator('.oxd-userdropdown-tab')
        //this.buttonlogtout=this.page.getByText('Logout')
        this.buttonlogtout=page.locator('//a[normalize-space()="Logout"]')
    }
    async Logout(){
    await this.userdropdown.click();
    await this.buttonlogtout.click();
    }
}  