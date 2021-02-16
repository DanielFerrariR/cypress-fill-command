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

  it('should append to content editable div by default', () => {
    cy.get('#content-editable-div-append').fill('Some text')

    cy.get('#content-editable-div-append').should('contain.text', 'Some text')
  })

  it('should overwrite a content editable div', () => {
    cy.get('#content-editable-div-overwrite').fill('Some other text', {
      overwrite: true
    })

    cy.get('#content-editable-div-overwrite').should(
      'contain.text',
      'Some other text'
    )
  })
})
