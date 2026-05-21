import{Page} from'@playwright/test';

export class CheckoutPage{

    firstName;
    lastName;
    postalCode;
    continueBtn;

  constructor(private page:Page){
    this.firstName=page.locator('[data-test="firstName"]');
    this.lastName=page.locator('[data-test="lastName"]');
    this.postalCode=page.locator('[data-test="postalCode"]');
    this.continueBtn=page.locator('[data-test="continue"]');
  }  

  async fillDetails(first:string, last:string, postal:string)
  {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
    await this.continueBtn.click();

  }
}
