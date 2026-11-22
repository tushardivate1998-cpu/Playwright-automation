const { test, expect } = require('@playwright/test');

const products = [
    { name: 'Backpack', btn: 'add-to-cart-sauce-labs-backpack' },
    { name: 'Bike Light', btn: 'add-to-cart-sauce-labs-bike-light' },
    { name: 'Bolt T-Shirt',btn: 'add-to-cart-sauce-labs-bolt-t-shirt' },
];

for (const product of products) {
    test('Day 6 - ' + product.name, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        await page.locator('[data-test="' + product.btn + '"]').click();

        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

    });
    }

