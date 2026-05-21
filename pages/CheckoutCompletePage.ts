import{Page} from'@playwright/test';

export class CheckoutCompletePage{
    successMsg;
 
 constructor(private page:Page){
    this.successMsg=page.locator('.complete-header');
 }   
}