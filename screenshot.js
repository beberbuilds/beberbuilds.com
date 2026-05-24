const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 700, deviceScaleFactor: 2 });
  const htmlPath = 'file:///' + path.resolve(__dirname, 'temp-screenshot.html').replace(/\\/g, '/');
  await page.goto(htmlPath, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.screenshot({ path: path.resolve(__dirname, 'public', 'project1.png'), type: 'png', fullPage: true });
  await browser.close();
  console.log('project1.png saved');
})();
