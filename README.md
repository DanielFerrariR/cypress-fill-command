# cypress-fill-command

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/danielferrarir/cypress-fill-command/blob/master/LICENSE) [![Travis Status](https://api.travis-ci.com/DanielFerrariR/cypress-fill-command.svg?branch=master)](https://travis-ci.com/github/DanielFerrariR/cypress-fill-command) [![npm version](https://img.shields.io/npm/v/cypress-fill-command.svg?style=flat&color=important)](https://www.npmjs.com/package/cypress-fill-command)

A fill command that fills inputs faster than the cypress native type command.

This package adds a custom [Cypress][cypress] command that fills inputs, textareas and content editable elements. The type command from cypress has 10ms delay, so it slows the tests a bit. This command doesn't have any delay at all.

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

or

```bash
yarn add cypress-fill-command --dev
```

## Usage

`cypress-fill-command` extends Cypress' `cy` command.
Add this line to your project's `cypress/support/commands.js`:

```javascript
import 'cypress-fill-command'
```

Now you are ready to use the command. Here is a basic example:

```javascript
cy.get('#the-element-id').fill('Some text')
```

## API

Exposed command in a nutshell:

```javascript
cySubject.fill(text, options)
```

- {String} `text` – The text to be filled into an input

Options contains following properties:

- {boolean} `overwrite` - To overwrite the input value. Defaults to `true`
- {boolean} `prepend` - To insert before (`true`) or after (`false`) the current input value when `overwrite` is `false`. Defaults to `false`

## It isn't working!

It has been used on a React project with inputs controlled by React state.

I cannot guarantee it will work in any custom input, but we can try to improve it, just open an issue or a PR.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/stevedorries"><img src="https://avatars.githubusercontent.com/u/3475101?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steven Dorries</b></sub></a><br /><a href="#ideas-stevedorries" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/DanielFerrariR/cypress-fill-command/commits?author=stevedorries" title="Tests">⚠️</a> <a href="https://github.com/DanielFerrariR/cypress-fill-command/commits?author=stevedorries" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ncjones"><img src="https://avatars.githubusercontent.com/u/1155592?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nathan Jones</b></sub></a><br /><a href="https://github.com/DanielFerrariR/cypress-fill-command/commits?author=ncjones" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/amuta"><img src="https://avatars.githubusercontent.com/u/7306481?v=4?s=100" width="100px;" alt=""/><br /><sub><b>André Muta</b></sub></a><br /><a href="#ideas-amuta" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/danielferrarirey/"><img src="https://avatars.githubusercontent.com/u/18249831?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Ferrari</b></sub></a><br /><a href="#infra-DanielFerrariR" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/DanielFerrariR/cypress-fill-command/commits?author=DanielFerrariR" title="Documentation">📖</a> <a href="https://github.com/DanielFerrariR/cypress-fill-command/commits?author=DanielFerrariR" title="Tests">⚠️</a> <a href="https://github.com/DanielFerrariR/cypress-fill-command/commits?author=DanielFerrariR" title="Code">💻</a> <a href="https://github.com/DanielFerrariR/cypress-fill-command/pulls?q=is%3Apr+reviewed-by%3ADanielFerrariR" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Fishbowler"><img src="https://avatars.githubusercontent.com/u/2117083?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dan Caseley</b></sub></a><br /><a href="#ideas-Fishbowler" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/DanielFerrariR/cypress-fill-command/commits?author=Fishbowler" title="Tests">⚠️</a> <a href="https://github.com/DanielFerrariR/cypress-fill-command/commits?author=Fishbowler" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT][mit]

[cypress]: https://cypress.io
[mit]: https://opensource.org/licenses/MIT
[npm]: https://www.npmjs.com/
