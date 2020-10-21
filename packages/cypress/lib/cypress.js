'use strict';
const { isEmptyObjectorNull } = require('@a11ycore/utils');
const { configure } = require('axe-core');
const axe = require('axe-core');

module.exports = {
    injectA11yCypress,
    configureA11yCypress,
    runA11yCypress,
};

function injectA11yCypress() {
    cy.window({ log: false })
        .then((win) => {
            win.eval(axe);
        })
};

function configureA11yCypress(options = {}) {
    cy.window({ log: false })
        .then(win => win.axe.configure(options));
}

function runA11yCypress(context, options, callback) {
    cy.window({ log: false })
    .then(win => {
      if (isEmptyObjectorNull(context)) context = undefined
      if (isEmptyObjectorNull(options)) options = undefined
      if (isEmptyObjectorNull(violationCallback)) violationCallback = undefined
      const { includedImpacts, ...axeOptions } = options || {}
      return win.axe
        .run(context || win.document, axeOptions)
        .then(({ violations }) => {
          return includedImpacts &&
            Array.isArray(includedImpacts) &&
            Boolean(includedImpacts.length)
            ? violations.filter(v => includedImpacts.includes(v.impact))
            : violations
        })
    })
}


Cypress.Commands.add('injectA11yCypress', injectA11yCypress);
Cypress.Commands.add('configureA11yCypress', configureA11yCypress);
Cypress.Commands.add('runA11yCypress', runA11yCypress);