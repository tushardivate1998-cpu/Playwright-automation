const { test, expect } = require('@playwright/test');

test('Day 8 - Hybrid - API + UI E2E Test', async ({ request, page }) => {

    // 1. API - Get user details
    console.log('Step 1 - API - Get user details');
    const apiResponse = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: {
            name: 'Tushar Divate',
            username: 'tushar',
            email: 'tushar@test.com'
        }
    });

    expect(apiResponse.status()).toBe(201);
    const apiUser = await apiResponse.json();
    console.log('API Userr created with ID:', apiUser.id);
    console.log('API Userr created with Name:', apiUser.name);


    // 2. UI - login to the application
    console.log('Step 2 - UI - Login to the application');
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // 3. UI - Add product to cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');

    // 4. API Data UI transfer
    console.log('Step 3: API Data UI transfer...');
    // API get use name - that is hybrid
    await page.fill('[data-test="firstName"]', apiUser.name.split(' ')[0]);// Tushar
    await page.fill('[data-test="lastName"]',apiUser.name.split(' ')[1]);// Divate
    await page.fill('[data-test="postalCode"]', '411001');
    await page.click('[data-test="continue"]');

    await page.click('[data-test="finish"]');
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');

    console.log('Day 8 Hybrid Test PASSED!');
});
