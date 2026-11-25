const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const users = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' },
  { username: 'performance_glitch_user', password: 'secret_sauce' },
];

for (const user of users) {
  test(`Day 17 - Login with ${user.username}`, async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(user.username, user.password);
    await expect(page).toHaveURL(/.*inventory.*/);
    console.log(`PASS - ${user.username}`);
  });
}