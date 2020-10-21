const {Builder} = require('selenium-webdriver');
const { runA11ySelenium } = require('../lib/selenium');

describe("test runA11ySelenium", () => {
  let driver;
  beforeAll(async() => {
    driver = await new Builder().forBrowser('chrome').build();
  });
  afterAll(() => {
    driver.quit();
  }) 
  it('should test accessibility', async () => {
    await driver.get('http://www.google.com/ncr');
    const results = await runA11ySelenium(driver, {});
    expect(typeof results).toBe('object');
    expect(Array.isArray(results.inapplicable)).toBe(true);
    expect(Array.isArray(results.violations)).toBe(true);
    expect(results.testRunner.name).toEqual('axe');
  });
});