import {Page} from '@playwright/test';

export class CartPage{
    checkoutBtn;

constructor(private page : Page)
{
  this.checkoutBtn=page.locator('[data-test="checkout"]');
}

async checkout()
{
    await this.checkoutBtn.click();
    
}

}
