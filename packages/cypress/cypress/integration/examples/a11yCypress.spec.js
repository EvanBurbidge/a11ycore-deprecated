/// <reference types="cypress" />
import {runA11yCypress} from '../../../lib/cypress';


// Cypress.Commands.add('injectA11yCypress', injectA11yCypress);
// Cypress.Commands.add('configureA11yCypress', configureA11yCypress);
Cypress.Commands.add('runA11yCypress', runA11yCypress);

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  // https://on.cypress.io/interacting-with-elements

  it('runs the a11y check', () => {
    cy.runA11yCypress();
  });
});
