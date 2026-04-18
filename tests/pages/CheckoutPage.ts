import { Page, Locator,expect } from "@playwright/test";

export class CheckoutPage{

    page:Page;
    selectCountry: Locator;
    agreeBtn:Locator;
    proceedBtn:Locator;
    successMsg:Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.selectCountry=page.getByRole('combobox');
        this.agreeBtn=page.locator(".chkAgree");
        this.proceedBtn=page.getByRole('button', { name: /Proceed/i });
        this.successMsg=page.locator(".wrapperTwo");

    }

    async selectCountryFromDropdown(country:string)
    {
        await this.selectCountry.selectOption(country);
        await expect(this.selectCountry).toHaveValue(country);
    }
    async termsNCondition()
    {
        await this.agreeBtn.click();
    }

    async proceedToOrder()
    {
        await this.proceedBtn.click();
    }

    async verifyOrderSuccess() 
    {
    await expect(this.successMsg).toContainText("Thank you");
    }
}