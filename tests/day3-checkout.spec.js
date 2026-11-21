const { test, expect } = require('@playwright/test');

test('Day 3 - Complete Checkout Flow', async ({ page }) => {
  // 1. Login
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/);

  // 2. Add to Cart
  await page.click('#add-to-cart-sauce-labs-backpack');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // 3. Go to Cart
  await page.click('.shopping_cart_link');
  await expect(page.locator('.cart_item')).toHaveCount(1);

  // 4. Checkout
  await page.click('#checkout');
  await page.fill('#first-name', 'Tushar');
  await page.fill('#last-name', 'Divate');
  await page.fill('#postal-code', '411001');
  await page.click('#continue');

  // 5. Finish
  await page.click('#finish');

  // 6. Verify Order Success
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});