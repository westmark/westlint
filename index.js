module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        parser: 'babylon',
        bracketSpacing: true,
        printWidth: 100,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],
    // React
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,

    'import/prefer-default-export': 0,

    // Jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  settings: {},
  parser: 'babel-eslint',
  env: {
    'jest/globals': true,
  },
};
