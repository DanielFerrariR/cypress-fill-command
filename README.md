# cypress-fill-command

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/danielferrarir/cypress-fill-command/blob/master/LICENSE) [![Travis Status](https://api.travis-ci.com/DanielFerrariR/cypress-fill-command.svg?branch=master)](https://travis-ci.com/github/DanielFerrariR/cypress-fill-command) [![npm version](https://img.shields.io/npm/v/cypress-fill-command.svg?style=flat&color=important)](https://www.npmjs.com/package/cypress-fill-command) [![All Contributors](https://img.shields.io/badge/all_contributors-0-yellow.svg)](#contributors)

A fill command that fills inputs faster than the cypress native type command.

This package adds a custom [Cypress][cypress] command that fills inputs and textareas. The type command from cypress has 10ms delay, so it slows the tests a bit. This command doesn't have any delay at all.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [It isn't working](#it-isnt-working)
- [Contributors](#contributors)
- [License](#license)

## Installation

The package is distributed via [npm][npm] and should be installed as one of your project's `devDependencies`:

```bash
npm install --save-dev cypress-fill-command
```

## Usage

`cypress-fill-command` extends Cypress' `cy` command.
Add this line to your project's `cypress/support/commands.js`:

```javascript
import 'cypress-fill-command'
```

Now you are ready to use the command. Here is a basic example:

```javascript
cy.get('#the-element-id').fill(/Button Name/)
```

## API

Exposed command in a nutshell:

```javascript
cySubject.fill(text)
```

- {String} `text` – The text to be filled into an input

## It isn't working!

It has been used on a React project with inputs controlled by React state.

I cannot guarantee it will work in any custom input, but we can try to improve it, just open an issue or a PR.

## Contributors

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT][mit]

[cypress]: https://cypress.io
[mit]: https://opensource.org/licenses/MIT
[npm]: https://www.npmjs.com/
