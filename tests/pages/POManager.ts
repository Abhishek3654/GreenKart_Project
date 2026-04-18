import { type Page, type Locator } from "@playwright/test";
import{HomePage} from './Homepage.js'
import {CartPage} from './CartPage.js'
import { CheckoutPage } from "./CheckoutPage.js";

export class POmanager{

    page:Page;
    homepage:HomePage;
    cartpage:CartPage;
    checkoutpage:CheckoutPage;

    constructor(page:Page)
    {
        this.page=page;
        this.homepage=new HomePage(page);
        this.cartpage=new CartPage(page);
        this.checkoutpage=new CheckoutPage(page);
    }

    getHomepage()
    {
        return this.homepage;
    }
    getCartpage()
    {
        return this.cartpage;
    }

    getCheckoutPage()
    {
        return this.checkoutpage;
    }
}