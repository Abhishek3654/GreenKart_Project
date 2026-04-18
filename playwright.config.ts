import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  //reporter:'html',

   // 🔥 runs tests in parallel
  fullyParallel:true,

  //retry 1 times when test fail at first
  retries:1,
   reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    headless: false, // open browser UI
    //baseURL:"https://rahulshettyacademy.com/seleniumPractise/#/"
    trace:'on'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
     
    },
  ],
});
