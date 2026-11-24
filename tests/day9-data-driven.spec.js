const { test, expect } = require('@playwright/test');

// This is our data not test ! ---
// if add 100 users to add and test was same
const users = [
    { firstName: 'Tushar', lastName: 'Divate', zip: '411001', product: 'sauce-labs-backpack' },
    { firstName: 'John', lastName: 'Doe', zip: '40001', product: 'sauce-labs-bike-light' },
    { firstName: 'Jane', lastName: 'Smith', zip: '411045', product: 'sauce-labs-bolt-t-shirt' },
];

// one test 3 times run ---
 for (const user of users) {
    test(`Day 9 - checkout for ${user.firstName} ${user.lastName}`, async ({ page }) => {
        console.log(`Testing for: ${user.firstName} - Product: ${user.product}`);

        // 1. Login
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        // 2. Add product to cart
        await page.click(`[data-test="add-to-cart-${user.product}"]`);
        await page.click('.shopping_cart_link');
        await page.click('[data-test="checkout"]');

        // 3. Fill checkout information
        await page.fill('[data-test="firstName"]', user.firstName);
        await page.fill('[data-test="lastName"]', user.lastName);
        await page.fill('[data-test="postalCode"]', user.zip);
        await page.click('[data-test="continue"]');

        // 4. Finish checkout
        await page.click('[data-test="finish"]');
        await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');

        console.log(`PASSED for: ${user.firstName} - Product: ${user.product}`);
    });
}