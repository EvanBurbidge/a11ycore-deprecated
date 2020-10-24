'use strict';
const { isEmptyObjectorNull } = require('@a11ycore/utils');
// const fs = require('fs');

module.exports = {
    injectA11yCypress,
    configureA11yCypress,
    runA11yCypress,
};

function injectA11yCypress() {
    console.log('injecting cypress');
    const axe = cy.readFile('node_modules/axe-core/axe.min.js', 'utf8')
    cy.window({ log: false })
        .then((win) => {
            win.eval(axe);
        })
};

function configureA11yCypress(options = {}) {
    cy.window({ log: false })
        .then(win => win.axe.configure(options));
}

function runA11yCypress(context, options) {
    cy.window({ log: false })
    .then(win => {
      if (isEmptyObjectorNull(context)) context = undefined
      if (isEmptyObjectorNull(options)) options = undefined
      win.eval(axe);
      return win.axe
        .configure(options)
        .analyse(context || win.document)
        .then((results) => {
          return results;
        })
    })
}