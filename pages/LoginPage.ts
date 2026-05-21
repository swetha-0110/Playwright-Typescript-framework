
import { Page } from '@playwright/test';
export class LoginPage{
    username;
    password;
    loginbutton;
    errorMsg;

    constructor(private page:Page){

    this.username= page.locator('#user-name');
    this.password=page.locator('#password');
    this.loginbutton=page.locator('#login-button');
    this.errorMsg=page.locator('[data-test="error"]');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user:string, pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginbutton.click();


    }
    
    

}

