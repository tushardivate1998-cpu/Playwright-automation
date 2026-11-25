const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Day 16 - POM Login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/.*inventory.*/);
  console.log('DAY 16 POM PASS');
}); 