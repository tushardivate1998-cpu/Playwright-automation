const { test, expect } = require('@playwright/test');

test('Day 19 - Hybrid - API + UI', async ({ page, request }) => {
  // STEP 1: API ne User banav
  const apiResponse = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'Tushar Divate',
      username: 'tusharrr_01',
      email: 'tushar@test.com'
    }
  });
  expect(apiResponse.status()).toBe(201);
  const user = await apiResponse.json();
  console.log('API ne User banavla - ID: ' + user.id + ' Name: ' + user.name);

  // STEP 2: UI var jaun verify kar
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/.*inventory.*/);
  console.log('UI ne Login PASS - Hybrid PASS');
});