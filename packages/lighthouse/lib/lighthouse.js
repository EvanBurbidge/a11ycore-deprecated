'use strict';
const fs = require('fs');
const merge = require('lodash.merge');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');


module.exports = {
    runA11yLighthouse,
};

function runA11yLighthouse(url = 'https://www.a11ycore.com', chromeFlags = [], options = {}) {
    return new Promise((resolve, reject) => {
        chromeLauncher.launch({
            chromeFlags,
        })
        .then(chrome => {
            const opts = merge({}, options, {logLevel: 'info', output: 'json', onlyCategories: ['accesssibility'], port: chrome.port});
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
            console.log(report);
        } catch (e) {
            console.log(e);
        }
    })