import { Page, Locator ,expect } from "@playwright/test";

export class CartPage{

    page:Page;
    promoCode:Locator;
    applyBtn:Locator;
    placeOrderBtn:Locator;
    promoSuccess:Locator;
    constructor(page:Page)
    {
       this.page=page; 
       this.promoCode=page.locator(".promoCode");
       this.applyBtn=page.locator(".promoBtn");
       this.placeOrderBtn=page.getByText("Place Order");
       this.promoSuccess=page.locator(".promoInfo");

    }

    async applyPromoCode(code:string)
    {
        await this.promoCode.fill(code)
        await this.applyBtn.click();
        await this.promoSuccess.waitFor();
        await expect(this.promoSuccess).toContainText("Code applied");
        
    }

    async placeOrder()
    {
        await this.placeOrderBtn.click();
    }
}