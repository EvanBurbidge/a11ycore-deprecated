'use strict';
const { isEmptyObjectorNull } = require('@a11ycore/utils');
const axe = require('axe-core');

module.exports = {
    configureA11yCypress,
    runA11yCypress,
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
      return axe
        .configure(options)
        .analyse(context || win.document)
        .then((results) => {
          return results;
        })
    })
}