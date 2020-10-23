'use strict';

const { AxePuppeteer } = require('@axe-core/puppeteer');

module.exports = {
    puppeteer
};

function puppeteer(page, options = {}) {
    return new AxePuppeteer(page).configure(options).analyze(); 
}
