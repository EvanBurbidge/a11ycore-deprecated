'use strict';

const { AxePuppeteer } = require('@axe-core/puppeteer');

module.exports = {
    runA11yPuppeteer
};

function runA11yPuppeteer(page, options = {}) {
    return new AxePuppeteer(page).configure(options).analyze(); 
}
