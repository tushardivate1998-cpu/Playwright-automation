const { test, expect } = require('@playwright/test');

test('Day 2 - Add to Cart and Logout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');


    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('#login-button');
    
    // Add Backpack to cart

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Add Bike Light also
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    // Go to Cart and Check
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(/cart/);

    // Logout
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page.locator('#login-button')).toBeVisible();

    console.log('Test Pass - Day 2 Successfully Completed');
});