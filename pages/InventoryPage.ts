import {Page} from '@playwright/test';

export class InventoryPage
{
    shoppingcartbadge;
    shoppingcartlink;
    cartitems;

constructor(private page:Page) {

  this.shoppingcartbadge= page.locator('[data-test="shopping-cart-badge"]');
  this.shoppingcartlink=page.locator('[data-test="shopping-cart-link"]'); 
  this.cartitems=page.locator('[data-test="inventory-item"]');
}
  
 addToCart(item:string)
 {
    return this.page.locator(`[data-test="add-to-cart-${item}"]`);
 }

 async addItem(item:string){
    await this.addToCart(item).click();
 }

 async goToCart(){
    await this.shoppingcartlink.click();
 }

}