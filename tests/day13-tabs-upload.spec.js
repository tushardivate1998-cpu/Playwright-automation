const { test, expect } = require('@playwright/test');

test('Day 13 - Tabs and Upload - simple', async ({ page, context }) => {

  // 1. NAVIN TAB
  await page.goto('https://demoqa.com/browser-windows');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('#tabButton').click()
  ]);
  await expect(newPage.locator('#sampleHeading')).toHaveText('This is a sample page');
  console.log('New Tab PASS');
  await newPage.close();

  // 2. FILE UPLOAD
  await page.goto('https://demoqa.com/upload-download');
  await page.locator('#uploadFile').setInputFiles({
    name: 'test.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('Hi Dada, Day 13 Done!')
  });
  await expect(page.locator('#uploadedFilePath')).toContainText('test.txt');
  console.log('File Upload PASS');
});
