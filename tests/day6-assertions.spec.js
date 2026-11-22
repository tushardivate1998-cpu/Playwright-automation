const { test, expect } = require('@playwright/test');

//

const products = [
    { name: 'Bike Light', btn: 'add-to-cart-sauce-labs-bike-light' },
    { name: 'Bike Light', btn: 'add-to-cart-sauce-labs-bike-light' },
    { name: 'Bolt T-Shirt', btn: 'add-to-cart-sauce-labs-bolt-t-shirt' },

];

for (const product of products) {
    test('Day 6 - ' + product.name, async ({ page }) => {

        // 1. Login
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        // 2. ASSERTION 1 - URL Check - inventory page
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        // 3. ASSERTION 2 - Title Check 
         await expect(page.locator('.title')).toHaveText('Products');

         // 4. Add Product to Cart
        await page.locator(`[data-test="${product.btn}"]`).click();

        // 5. ASSERTION 3 - Cart Badge Check
        await expect(page.locator('[data-test="shopping_cart_badge"]')).toHaveText('1');

        // 6. ASSERTION 4 - Remove Button Check
        await expect(page.locator(`[data-test="remove-${product.btn.replace('add-to-cart-', '')}"]`)).toBeVisible();

    });
}