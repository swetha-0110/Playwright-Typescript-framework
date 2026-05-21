
import {Page} from '@playwright/test';

export class ProductsPage{
 title;
 cartIcon;

constructor(private page:Page){
this.title= page.locator('.title');
this.cartIcon=page.locator('.shopping_cart_link');
}
addToCart(item:string){
return this.page.locator(`[data-test="add-to-cart-${item}"]`);
}
 async addItem(item:string){
    await this.addToCart(item).click();
 }

 async goToCart(){
    await this.cartIcon.click();
 }

}
