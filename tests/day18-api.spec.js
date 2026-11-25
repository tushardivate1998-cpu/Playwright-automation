const { test, expect } = require('@playwright/test');

test('Day 18 - GET API - Users List', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  
  console.log('Status: ' + response.status());
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log('Name: ' + body.name);
  expect(body.id).toBe(1);
  expect(body.name).toBe('Leanne Graham');
});

test('Day 18 - POST API - Create User', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    data: {
      name: 'Tushar Divate',
      username: 'tusharrr_01',
      email: 'tushar@test.com'
    }
  });

  console.log('POST Status: ' + response.status());
  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log('Created ID: ' + body.id);
  expect(body.name).toBe('Tushar Divate');
});