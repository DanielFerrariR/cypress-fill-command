# cypress-fill-command

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/danielferrarir/cypress-fill-command/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/cypress-fill-command.svg?style=flat&color=important)](https://www.npmjs.com/package/cypress-fill-command) [![All Contributors](https://img.shields.io/badge/all_contributors-0-yellow.svg)](#contributors)

A fill command that does the same as the native type command, but faster.

This package adds a custom [Cypress][cypress] command that can completely replace the native type command from cypress. The type command from cypress has 10ms delay, so it slows the tests a bit. This command doesn't have any delay at all.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributors](#contributors)
- [License](#license)

## Installation

The package is distributed via [npm][npm] and should be installed as one of your project's `devDependencies`:

```bash
npm install --save-dev cypress-fill-command
```

## Usage

`cypress-file-upload` extends Cypress' `cy` command.
Add this line to your project's `cypress/support/commands.js`:

```javascript
import 'cypress-fill-command'
```

Now you are ready to use the command. Here are some basic examples:

```javascript
cy.get('#the-element-id').fill(/Button Name/)
```

**Trying to upload a file that does not supported by Cypress by default?** Make sure you pass `encoding` property (see [API](#api)).

See more usage guidelines in [recipes](./recipes).

## API

Exposed command in a nutshell:

```javascript
cySubject.fill(text)
```

- {String} `text` – The text to be filled into an input

## Contributors

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT][mit]

[cypress]: https://cypress.io
[mit]: https://opensource.org/licenses/MIT
