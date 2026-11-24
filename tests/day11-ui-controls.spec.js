import { test, expect } from '@playwright/test';

test('Day 11 - Dropdown, Checkbox, Radio Button', async ({ page }) => {

    // 1. Dropdown - https://the-internet.herokuapp.com/dropdown
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator('#dropdown')).toHaveValue('1');
    console.log('Dropdown test passed - Option 1 selected successfully');

    // 2. Checkbox - https://the-internet.herokuapp.com/checkboxes
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const checkbox1 = page.locator('input[type="checkbox"]').first();
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    await checkbox1.uncheck();
    await expect(checkbox1).not.toBeChecked();
    console.log('Checkbox test passed - Checkbox checked and unchecked successfully');

    // 3. Radio Button - https://demoqa.com/radio-button
    await page.goto('https://demoqa.com/radio-button');
    await page.locator('label[for="yesRadio"]').click();
    await expect(page.locator('.text-success')).toHaveText('Yes');
    console.log('Radio button test passed - Yes radio button selected successfully');
});