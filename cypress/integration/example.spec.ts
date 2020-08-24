describe('testing example page', () => {
  it('should fill the input', () => {
    cy.visit('/')

    cy.get('#test-input').fill('Some text')

    cy.get('#test-input').should('have.value', 'Some text')
  })
})
