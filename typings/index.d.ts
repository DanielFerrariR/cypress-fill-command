declare namespace Cypress {
  interface Chainable {
    /**
     * Fills an input, textarea, or contenteditable element.
     * @param value - Text to be filled
     * @param options
     * @example
     *    cy.get('#the-element-id').fill('Some text')
     */
    fill(value: string, options: { overwrite?: boolean }): Chainable<void>
  }
}
