import {Page} from '@playwright/test';

export class CheckoutOverviewPage{
    finishBtn;

constructor(private page:Page){
    this.finishBtn=page.locator('[data-test="finish"]');
}  

async finishorder()
{
    await this.finishBtn.click();
}
}