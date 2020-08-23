declare namespace Cypress {
  interface Chainable {
    fill(value: string): Chainable<void>
  }
}
