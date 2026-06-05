import{test,expect} from '../fixtures/testFixtures';
import users from '../test-data/users.json';

test('Add products to cart and verify the count', async({loginPage,inventoryPage})=>{

   await loginPage.goto();
   await loginPage.login(users.validUser.username, users.validUser.password);

   await inventoryPage.addItem("sauce-labs-bolt-t-shirt");
   await expect(inventoryPage.shoppingcartbadge).toHaveText('1');

   await inventoryPage.addItem("sauce-labs-bike-light");
   await expect(inventoryPage.shoppingcartbadge).toHaveText('2');
   
   await inventoryPage.goToCart();

   await expect(inventoryPage.cartitems).toHaveCount(2);
  
});


