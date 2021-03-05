Cypress.Commands.add(
  'fill',
  {
    prevSubject: 'element'
  },
  (subject, value, options = { overwrite: true, prepend: false }) => {
    const element = subject[0]

    const isInputOrTextarea =
      element.tagName.toLowerCase() === 'input' ||
      element.tagName.toLowerCase() === 'textarea'

    const inputEvent = new Event('input', { bubbles: true })

    const { overwrite, prepend } = options
    let textValue = value

    if (isInputOrTextarea) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set

      const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        'value'
      )?.set

      if (!overwrite) {
        textValue = prepend
          ? `${value}${element.value}`
          : `${element.value}${value}`
      }
      const nativeSetter =
        element.tagName.toLowerCase() === 'input'
          ? nativeInputValueSetter
          : nativeTextAreaValueSetter
      nativeSetter?.call(element, textValue)
      element.dispatchEvent(inputEvent)
    } else if (element.isContentEditable) {
      element.focus()
      cy.document().then((doc) => {
        const selection = doc.getSelection()
        selection?.removeAllRanges()

        const range = doc.createRange()
        range.selectNodeContents(element)

        selection?.addRange(range)

        if (overwrite === true) {
          range.deleteContents()
        }

        if (prepend === true) {
          selection?.collapseToStart()
        } else {
          selection?.collapseToEnd()
        }

        doc.execCommand('insertText', false, `${value}`)
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

    cy.wrap(element)
  }
)
