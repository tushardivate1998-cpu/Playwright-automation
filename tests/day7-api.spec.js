// Day 7. - API Testing with Playwright
const { test, expect } = require('@playwright/test');

test('Day 7 - GET - API Test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    
    // 2. Check - Status 200 
    expect(response.status()).toBe(200);

    // 3. Check - Content Type
    const users = await response.json();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('name');
    console.log('first user name:', users[0].name);

});

   test('Day 7 - GET - one user API Test', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    // 2. Check - Status 200
    expect(response.status()).toBe(200);
    // 3. Check - Content Type
    const user = await response.json();
    expect(user.id).toBe(1);
    expect(user.name).toBe('Leanne Graham');

});
    
   test('Day 7 - POST - API Test', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: {
            name: 'Tushar Divate',
            username: 'tushar1998',
            email: 'tushar@test.com'
        }
    });

    // POST request should return 201 status code
    expect(response.status()).toBe(201);

    const newUser = await response.json();
    expect(newUser).toHaveProperty('id');
    expect(newUser.name).toBe('Tushar Divate');
    console.log('New user created with ID:', newUser.id);
});