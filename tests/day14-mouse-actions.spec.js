const { test, expect } = require('@playwright/test');

test('Day 14 - Mouse Actions - Soppa', async ({ page }) => {

  // 1. HOVER
  await page.goto('https://the-internet.herokuapp.com/hovers');
  await page.locator('.figure').first().hover();
  await expect(page.locator('.figcaption').first()).toContainText('name: user1');
  console.log('Hover PASS');

  // 2. DOUBLE CLICK
  await page.goto('https://demoqa.com/buttons');
  await page.locator('#doubleClickBtn').dblclick();
  await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');
  console.log('Double Click PASS');

  // 3. DRAG AND DROP - jQuery
  await page.goto('https://jqueryui.com/droppable/');
  const frame = page.frameLocator('.demo-frame');
  await frame.locator('#draggable').dragTo(frame.locator('#droppable'));
  await expect(frame.locator('#droppable')).toContainText('Dropped!');
  console.log('Drag Drop PASS');
});