const { test, expect } = require('@playwright/test');

test('Day 15 - Keyboard RightClick Screenshot', async ({ page }) => {

  // 1. KEYBOARD - Type + Enter + Select All
  await page.goto('https://demoqa.com/text-box');
  await page.locator('#userName').click();
  await page.keyboard.type('Tushar Divate');
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.keyboard.type('Dada Pass Zala');
  await expect(page.locator('#userName')).toHaveValue('Dada Pass Zala');
  console.log('Keyboard PASS');

  // 2. RIGHT CLICK
  await page.goto('https://demoqa.com/buttons');
  await page.locator('#rightClickBtn').click({ button: 'right' });
  await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');
  console.log('Right Click PASS');

  // 3. SCREENSHOT
  await page.screenshot({ path: 'day15-screenshot.png' });
  console.log('Screenshot PASS - File banli');
});