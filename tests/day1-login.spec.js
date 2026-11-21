const { test, expect } = require('@playwright/test');

test('Day 1 - Login Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
    console.log('Test Pass - Login Successful');
});