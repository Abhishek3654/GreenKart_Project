import { Locator , Page } from "@playwright/test";

export class HomePage{

    page: Page;
    productCards :Locator;
    cartButton:Locator;
    checkoutBtn:Locator;
    constructor(page:Page)
    {
        this.page= page; 
        this.productCards = this.page.locator('.product');
        this.cartButton=page.locator(".cart-icon img");
        this.checkoutBtn=page.getByRole("button", { name: /PROCEED TO CHECKOUT/i });
    }

    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
    }

    async addProductToCart(productName:string, quantity:number)
    {
     const product=this.productCards.filter({hasText:productName});
     //increase quantity
     for(let i=1; i<quantity; i++)
     {
        await product.locator("a.increment").click();
     }
     await product.getByRole('button', { name: /ADD TO CART/i }).click();
    }

    async cartbuttonClick()
    {
        await this.cartButton.click();
    }

    async placeOrder()
    {
        await this.checkoutBtn.click();
    }


}
