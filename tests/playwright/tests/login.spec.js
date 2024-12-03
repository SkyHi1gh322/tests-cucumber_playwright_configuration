import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('#login', 'testuser@hlag.com');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    await page.waitForSelector('#dashboard', { state: 'visible' }); // Ждём, пока элемент станет видимым
    expect(await page.isVisible('#dashboard')).toBeTruthy();
});
