// @ts-check
const { test, expect,chromium, Page } = require('@playwright/test');
const { exec } = require('child_process');

test('Load data from UI',async () => {
  const browser = await chromium.launch({ headless: false }); // Launch the browser
    const context = await browser.newContext({
        ignoreHTTPSErrors: true, // Ignore SSL certificate errors
    });
    let page = await context.newPage();

    exec('clickOK.au3', (error, stdout , stderr) => {
      if (error) {
          console.error(`Error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.error(`Stderr: ${stderr}`);
          return;
      }
      console.log(`Output: ${stdout}`);
  });

    // Triggering the certificate dialog manually or by using a preceding action if possible.
    await page.goto('https://server.cryptomix.com/secure/'); // Try navigating to the page

   // Wait for the page to fully load after certificate selection
   await page.waitForLoadState('load');
   console.log(await page.title());

    await browser.close(); // Close the browser
});