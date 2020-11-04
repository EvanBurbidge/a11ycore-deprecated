# @a11ycore/selenium
![npm](https://img.shields.io/npm/dt/@a11ycore/selenium)
![version](https://img.shields.io/npm/v/@a11ycore/selenium)
![NPM](https://img.shields.io/npm/l/@a11ycore/selenium)

<!-- [![npm version](https://img.shields.io/npm/v/jest-axe.svg)](http://npm.im/jest-axe)
![node](https://img.shields.io/node/v/jest-axe)
[![Build Status](https://travis-ci.org/nickcolley/jest-axe.svg?branch=main)](https://travis-ci.org/nickcolley/jest-axe)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

Custom [Selenium] runner matcher for [aXe](https://github.com/dequelabs/axe-core) for testing accessibility

## ⚠️✋ This project does not guarantee what you build is accessible.
The GDS Accessibility team found that only [~30% of issues are found by automated testing](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage).

## Installation:
```bash
npm install --save-dev @a11ycore/selenium
```

## Usage:

```javascript
const { Builder } = require('selenium-webdriver');
const { runA11ySelenium } = require('@a11ycore/selenium');

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
```

Refer to [Developing Axe-core Rules](https://github.com/dequelabs/axe-core/blob/master/doc/rule-development.md) for instructions on how to develop custom rules and checks.

## Thanks
- [aXe](https://www.deque.com/axe/) for the wonderful axe-core that makes it so easy to do this.
- Government Digital Service for making coding in the open the default.
  - GOV.UK Publishing Frontend team who published the [basis of the aXe reporter](https://github.com/alphagov/govuk_publishing_components/blob/581c22c9d35d85d5d985571d007f6397a4399f4c/spec/javascripts/govuk_publishing_components/AccessibilityTestSpec.js)