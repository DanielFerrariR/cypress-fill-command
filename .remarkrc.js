module.exports = {
  plugins: [
    'preset-lint-consistent',
    'preset-lint-markdown-style-guide',
    'preset-lint-recommended',
    'preset-prettier',
    ['lint-no-duplicate-headings', false],
    ['lint-no-shortcut-reference-link', false],
    ['lint-no-file-name-irregular-characters', false]
  ]
}
