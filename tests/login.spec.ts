import {test,expect} from '../fixtures/testFixtures';
import users from '../test-data/users.json';

test('Valid login', async({loginPage, productsPage})=>{
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(productsPage.title).toHaveText('Products');
});

test('invalid login', async({loginPage})=>{
    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    await expect(loginPage.errorMsg).toBeVisible();

});

