'use strict';
const fs = require('fs');
const merge = require('lodash.merge');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');


module.exports = {
    runA11yLighthouse,
};

function runLighthouse (chrome, options) {
    
}

function runA11yLighthouse(chromeFlags = [], options = {}) {
    return new Promise((resolve, reject) => {
        chromeLauncher.launch({
            chromeFlags,
        })
        .then(chrome => {
            const opts = merge({}, options, {logLevel: 'info', output: 'json', onlyCategories: ['accesssibility'], port: chrome.port});
            lighthouse('http://www.google.com/ncr', opts)
                .then(results => {
                    resolve(results);
                    chrome.kill();
                })
                .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
}
