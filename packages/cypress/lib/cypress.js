'use strict';
const { isEmptyObjectorNull } = require('@a11ycore/utils');
const fs = require('fs');
const axe = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf-8');
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

function runA11yCypress(context, options) {
    cy.window({ log: false })
    .then(win => {
      if (isEmptyObjectorNull(context)) context = undefined
      if (isEmptyObjectorNull(options)) options = undefined
      return win.axe
        .configure(options)
        .analyse(context || win.document)
        .then((results) => results)
        .catch(err => err); 
    })
}

Cypress.Commands.add('injectAxe', injectAxe)

Cypress.Commands.add('configureAxe', configureAxe)

Cypress.Commands.add('checkA11y', checkA11y)