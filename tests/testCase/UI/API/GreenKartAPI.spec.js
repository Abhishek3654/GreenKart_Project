import { test , request, expect} from '@playwright/test';

test('API test', async ({ page }) => {

  const apiContext = await request.newContext();

  // 🔥 create cart via API
  const response = await apiContext.post('https://rahulshettyacademy.com/seleniumPractise/#/api/add-to-cart', {
    data: {
      product: "Cucumber",
      quantity: 2
    }
  });

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // now open UI
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  // verify cart directly
  await page.locator('.cart-icon').click();
  await page.pause();
});