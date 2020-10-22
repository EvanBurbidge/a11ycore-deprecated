'use strict';
const fs = require('fs');
const merge = require('lodash.merge');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');


module.exports = {
    runA11yLighthouse,
};

const lighthouseOptions = {
    extends: 'lighthouse:default',
    logLevel: 'info',
    output: 'json',
    disableDeviceEmulation: true,
    onlyCategories: ['accessibility'],
    settings: {
      onlyCategories: ['accessibility'],
      output: ['json'],
    },
  }

function runA11yLighthouse(url = 'https://www.thewebuiguy.com/', chromeFlags = ['--headless'], options = {}) {
    return new Promise((resolve, reject) => {
        chromeLauncher.launch({
            chromeFlags,
        })
        .then(chrome => {
            const opts = merge({}, options, lighthouseOptions, {port: chrome.port});
            lighthouse(url, opts)
                .then(results => {
                    resolve(results);
                    chrome.kill();
                })
                .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
}

runA11yLighthouse()
    .then(results => {
        try {
            const report = JSON.parse(results.report);
            console.log(report.audits);
        } catch (e) {
            console.log(e);
        }
    })