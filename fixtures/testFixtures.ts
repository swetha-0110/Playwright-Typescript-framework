import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/Loginpage';
import {ProductsPage} from '../pages/Productspage';
import {CartPage} from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {CheckoutOverviewPage} from '../pages/CheckoutOverviewPage';
import {CheckoutCompletePage} from '../pages/CheckoutCompletePage';

type Fixtures={
    loginPage:LoginPage,
    productsPage:ProductsPage,
    cartPage:CartPage,
    checkoutPage:CheckoutPage,
    overviewPage:CheckoutOverviewPage,
    completePage:CheckoutCompletePage

};

export const test= base.extend<Fixtures>({
    loginPage:async({page},use)=>{
       await use(new LoginPage(page));
    },  
    productsPage:async({page},use)=>{
        await use(new ProductsPage(page));
    },
    cartPage:async({page},use)=>{
        await use(new CartPage(page));
    },
    checkoutPage:async({page},use)=>{
         await use(new CheckoutPage(page));
    },
    overviewPage:async({page},use)=>{
        await use(new CheckoutOverviewPage(page));
    },
    completePage:async({page},use)=>{
        await use(new CheckoutCompletePage(page));
    }
});

export const expect=base.expect; 