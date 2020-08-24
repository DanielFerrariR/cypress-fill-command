declare namespace Cypress {
  interface Chainable {
    /**
     * Fills an input or textarea element.
     * @param value - Text to be filled
     * @example
     *    cy.get('#the-element-id').fill('Some text')
     */
    fill(value: string): Chainable<void>
  }
}
