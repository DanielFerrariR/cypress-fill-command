Cypress.Commands.add(
  'fill',
  {
    prevSubject: 'element'
  },
  (subject, value) => {
    const element = subject[0]

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    )?.set

    const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      'value'
    )?.set

    if (element.tagName.toLowerCase() === 'input') {
      nativeInputValueSetter?.call(element, value)
    } else {
      nativeTextAreaValueSetter?.call(element, value)
    }

    const inputEvent = new Event('input', { bubbles: true })

    element.dispatchEvent(inputEvent)
  }
)
