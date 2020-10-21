"use strict";
const axeCore = require("axe-core");
const { mount } = require("@a11ycore/core");

module.exports = {
  runA11yJest,
  configureA11yJest,
};

function runA11yJest(html = '', options = {}) {
  const [element, restore] = mount(html);
  return new Promise((resolve) => {
    axeCore.run(element, options, (err, results) => {
      restore();
      if (err) throw err;
      resolve(results);
    });
  });
}

function configureA11yJest(config = {}) {
  const { globalOptions = {}, ...runnerOptions } = config
  axeCore.configure(globalOptions);
  return function(html = '', options = {}) {
    return runA11yJest(html, Object.assign({}, options, runnerOptions));
  }
}