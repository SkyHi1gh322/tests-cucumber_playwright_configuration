import {Given, When, Then, Before, After} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import {chromium} from "playwright";
import {LoginPage} from "../../../playwright/pages/LoginPage.js";

let loginPage;


let browser;
let context;
let page;

Before(async function () {
  browser = await chromium.launch({ headless: false }); // Открываем браузер
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page; // Делаем page доступным через this
});

After(async function () {
  await page.close();
  await context.close();
  await browser.close();
});

Given('the user navigates to the login page', async function () {
  loginPage = new LoginPage(this.page); // Используем Playwright для работы с браузером
  await loginPage.navigateToLogin();
});

When('the user enters valid credentials', async function () {
  await loginPage.login('testuser', 'password123'); // Введите тестовые данные
});

Then('the user should be redirected to the dashboard', async function () {
  const isVisible = await loginPage.isProtectedPageVisible();
  expect(isVisible).toBeTruthy(); // Проверяем, что дашборд отображается
});
