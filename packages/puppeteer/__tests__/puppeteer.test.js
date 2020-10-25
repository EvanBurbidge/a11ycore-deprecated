const puppeteer = require("puppeteer");
const { runA11yPuppeteer } = require("..");

describe('puppeteer', () => {
  it('should run puppeteer', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setBypassCSP(true);

    await page.goto("https://thewebuiguy.com");

    await runA11yPuppeteer(page);

    await page.close();
    await browser.close();
  })
});
