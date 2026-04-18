import {test , expect} from '@playwright/test';
import { POmanager } from '../../pages/POManager.js'
import testData from '../../utils/testData.json' with { type: 'json' };

test.describe.configure({mode:'parallel'})//parallel
testData.forEach(data => 
{
test.beforeEach(async ({ page }) => {
  const poManager = new POmanager(page);
  const homepage = poManager.getHomepage();
  await homepage.goTo();
});

test.only(`GreenKart POM for ${data.productName}`, async({page})=>{
    
    const poManager= new POmanager(page);

    const homepage=poManager.getHomepage();

    await homepage.addProductToCart(data.productName, 3);
    await homepage.cartbuttonClick();
    await homepage.placeOrder();

    const cartpage=poManager.getCartpage();
    await cartpage.applyPromoCode(data.code);
    await cartpage.placeOrder();

    const checkoutpage=poManager.getCheckoutPage();
    await checkoutpage.selectCountryFromDropdown(data.country);
    await checkoutpage.termsNCondition();
    await checkoutpage.proceedToOrder();
    await checkoutpage.verifyOrderSuccess();
    
});


});

