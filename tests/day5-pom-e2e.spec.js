const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Day 5 - POM E2E Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 1. Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // 2. Add to Cart
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    // 3. Checkout
    await checkoutPage.checkout('Tushar', 'Divate', '411001');

    // 4. Verify
    await expect(checkoutPage.thankYouMsg).toHaveText('Thank you for your order!');
});
    