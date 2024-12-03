import {Given, When, Then, Before, After} from '@cucumber/cucumber';
import {BrowserContext, expect, Page} from '@playwright/test';
import {Browser, chromium} from "playwright";
import {LoginPage} from "../../../playwright/pages/LoginPage.js";

let loginPage: LoginPage;


let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: true }); // do not show browser
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page; // get accesses to the current route
});

After(async function () {
  await page.close();
  await context.close();
  await browser.close();
});

Given('the user navigates to the login page', async function () {
  loginPage = new LoginPage(this.page); // playwright context
  await loginPage.navigateToLogin();
});

When('the user enters valid credentials', async function () {
  await loginPage.login('testuser', 'password123'); // mock data
});

Then('the user should be redirected to the protected page', async function () {
  const isVisible = await loginPage.isProtectedPageVisible();
  expect(isVisible).toBeTruthy(); // check if protected page root id is available in browser
});
