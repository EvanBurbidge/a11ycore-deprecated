/// <reference types="cypress" />
import '../../../lib/cypress';


context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  // https://on.cypress.io/interacting-with-elements

  it('runs the a11y check', () => {
    cy.runA11yCypress();
  });
});
