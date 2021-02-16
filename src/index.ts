Cypress.Commands.add(
  'fill',
  {
    prevSubject: 'element'
  },
  (subject, value, options = { overwrite: false }) => {
    const element = subject[0]

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    )?.set

    const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      'value'
    )?.set

    const inputEvent = new Event('input', { bubbles: true })

    if (element.tagName.toLowerCase() === 'input') {
      nativeInputValueSetter?.call(element, value)
      element.dispatchEvent(inputEvent)
    } else if (element.tagName.toLowerCase() === 'textarea') {
      nativeTextAreaValueSetter?.call(element, value)
      element.dispatchEvent(inputEvent)
    } else if (element.isContentEditable) {
      element.focus()
      cy.document().then((doc) => {
        const selection = doc.getSelection()
        selection?.removeAllRanges()

        const range = doc.createRange()
        range.selectNodeContents(element)

        selection?.addRange(range)
        if (options.overwrite === true) {
          range.deleteContents()
        } else {
          selection?.collapseToEnd()
        }

        doc.execCommand(
          'insertText',
          false,
          `${options.overwrite !== true ? ' ' : ''}${value}`
        )
        element.dispatchEvent(inputEvent)
      })
    }

    Cypress.log({
      name: 'fill',
      message: value,
      $el: subject,
      consoleProps: () => {
        return {
          value,
          options
        }
      }
    })
  }
)
