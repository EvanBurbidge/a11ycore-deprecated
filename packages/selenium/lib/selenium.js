'use strict';
const { WebdriverJS } = require('@axe-core/webdriverjs');

module.exports = {
    runA11ySelenium,
};

function runA11ySelenium(driver, options) {
    return new WebdriverJS(driver).configure(options).analyze();
}
