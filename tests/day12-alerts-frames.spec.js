const { test, expect } = require('@playwright/test');

test('Day 12 - Alerts,Popups,Frames', async ({ page }) => {


    // 1. Js Alerst - ok press
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', async dialog => {
        console.log('Alert Text: ' + dialog.message());
        await dialog.accept();
    });
    await page.getByRole('button' , { name: 'Click for JS Alert' }).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    console.log('Js Alert test passed - Ok button pressed successfully');

    // 2. JS Confirm - cancel press
     page.once('dialog', async dialog => {
        await dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    console.log('JS Confirm PASS - Cancel Clicked');

    // 3. JS PROMPT - Text takne
    page.once('dialog', async dialog => {
        await dialog.accept('Tushar Dada');

    });
    await page.getByRole('button', { name: 'Click for JS Prompt'}).click();
    await expect(page.locator('#result')).toHaveText('You entered: Tushar Dada');
    console.log('JS Prompt PASS');

    // 4. FRAME / IFRAME
    await page.goto('https://demoqa.com/frames');
    const frame = page.frameLocator('#frame1');
    await expect(frame.locator('h1')).toHaveText('This is a sample page');
    console.log('Frame PASS');
});
