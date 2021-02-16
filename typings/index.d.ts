declare namespace Cypress {
  interface FillOptions {
    overwrite?: boolean
    prepend?: boolean
  }
  interface Chainable {
    /**
     * Fills an input, textarea, or contenteditable element.
     * @param value - Text to be filled
     * @param options
     * @example
     *    cy.get('#the-element-id').fill('Some text')
     */
    fill(value: string, options?: FillOptions): Chainable<void>
  }
}
