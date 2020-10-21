'use strict';
const WebdriverJS = require('axe-webdriverjs');

module.exports = {
    selenium,
};

function selenium(driver, options) {
    return new WebdriverJS(driver).configure(options).run();
}
