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

  it('should respect overwrite options for a simple input', () => {
    cy.get('#simple-input').fill('Some text', { overwrite: false })

    cy.get('#simple-input').should('have.value', 'Default TextSome text')
  })

  it('should respect overwrite options for a simple text area', () => {
    cy.get('#simple-text-area').fill('Some text', { overwrite: false })

    cy.get('#simple-text-area').should('have.value', 'Default TextSome text')
  })
  it('should respect overwrite and prepend options for a simple input', () => {
    cy.get('#simple-input').fill('Some text', {
      overwrite: false,
      prepend: true
    })

    cy.get('#simple-input').should('have.value', 'Some textDefault Text')
  })

  it('should respect overwrite and prepend options for a simple text area', () => {
    cy.get('#simple-text-area').fill('Some text', {
      overwrite: false,
      prepend: true
    })

    cy.get('#simple-text-area').should('have.value', 'Some textDefault Text')
  })

  it('should overwrite content editable elements by default', () => {
    cy.get('#content-editable-div-append').fill('Some text')

    cy.get('#content-editable-div-append').should('contain.text', 'Some text')
    cy.get('#content-editable-div-append').should(
      'not.contain.text',
      'Content Editable'
    )
  })

  it('should respect overwrite options for a content editable element', () => {
    cy.get('#content-editable-div-overwrite').fill('Some other text', {
      overwrite: false
    })

    cy.get('#content-editable-div-overwrite').should(
      'contain.text',
      'Content EditableSome other text'
    )
  })

  it('should respect overwrite and prepend options for a content editable element', () => {
    cy.get('#content-editable-div-overwrite').fill('Some other text', {
      overwrite: false,
      prepend: true
    })

    cy.get('#content-editable-div-overwrite').should(
      'contain.text',
      'Some other textContent Editable'
    )
  })
})
