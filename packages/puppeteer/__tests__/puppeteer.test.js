const puppeteer = require('puppeteer');
const { runA11yPuppeteer } = require('..');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setBypassCSP(true);

  await page.goto('https://thewebuiguy.com');

  const results = await runA11yPuppeteer(page);
  console.log(results);

  await page.close();
  await browser.close();
})();