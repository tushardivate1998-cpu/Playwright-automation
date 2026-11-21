const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Day 4 - Login using POM', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_list')).toBeVisible();

    
});
