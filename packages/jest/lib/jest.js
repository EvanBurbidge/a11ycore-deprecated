"use strict";
const axeCore = require("axe-core");
const { mount } = require("@a11ycore/core");

module.exports = runA11yJest;

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
