import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('#login', 'testuser@hlag.com');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    await page.waitForSelector('#protected', { state: 'visible' }); // wait until selector is visible
    expect(await page.isVisible('#protected')).toBeTruthy();
});
