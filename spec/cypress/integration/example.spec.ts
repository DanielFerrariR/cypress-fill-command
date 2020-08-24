describe('testing example page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should fill a simple input', () => {
    cy.get('#simple-input').fill('Some text')

    cy.get('#simple-input').should('have.value', 'Some text')
  })

  it('should fill a simple text area', () => {
    cy.get('#simple-text-area').fill('Some text')

    cy.get('#simple-text-area').should('have.value', 'Some text')
  })
})
