import{test,expect} from '../fixtures/testFixtures';
import users from '../test-data/users.json';
import checkout from '../test-data/checkout.json';

test('Complete Flow',async({
 loginPage,
 productsPage,
 cartPage,
 checkoutPage,
 overviewPage,
 completePage
})=>{
  await loginPage.goto();
  await loginPage.login(users.validUser.username, users.validUser.password );

  await productsPage.addItem("sauce-labs-onesie");
  await productsPage.goToCart();

  await cartPage.checkout();
  await checkoutPage.fillDetails(checkout.firstName, checkout.lastName, checkout.postalCode);

  await overviewPage.finishorder();
  await expect(completePage.successMsg).toHaveText('Thank you for your order!');
});