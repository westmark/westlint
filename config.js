const path = require( 'path' );

module.exports = function ( nodeModules ) {
  return {
    extends: 'airbnb',
    settings: {
      ecmascript: 6,
      jsx: true,
      'import/external-module-folders': nodeModules,
      'import/resolver': {
        node: {
          paths: nodeModules,
        },
      },
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        classes: true,
        modules: true,
      },
    },
    plugins: [
      'jest',
      'react',
    ],
    env: {
      browser: true,
      node: true,
    },
    rules: {
      'array-bracket-spacing': [
        2,
        'always',
      ],
      'arrow-body-style': [
        1,
      ],
      'arrow-parens': [
        2,
        'always',
      ],
      'computed-property-spacing': [
        2,
        'always',
      ],
      'no-mixed-operators': 0,
      'jsx-a11y/no-static-element-interactions': 0,

      "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "to" ]
      }],

      'import/extensions': 0,
      'import/prefer-default-export': 0,
      'import/no-unresolved': 0,
      'max-len': 0,
      'no-debugger': 1,
      'no-unused-vars': [
        1,
        {
          "vars": "all",
          "args": "none",
          "ignoreRestSiblings": true
        }
      ],
      'prefer-const': [ 2, {
          'ignoreReadBeforeAssign': true,
        },
      ],
      'space-before-blocks': [
        1,
        'always',
      ],
      'space-in-parens': [
        1,
        'always',
      ],
      'spaced-comment': [
        1,
      ],
      'template-curly-spacing': [
        1,
        'always',
      ],
      'react/jsx-curly-spacing': [
        1,
        {
          when: 'always',
          allowMultiline: true,
          attributes: true,
          children: true,
          spacing: {
            objectLiterals: 'always',
          },
        },
      ],
      'react/no-typos': 0,
      'react/no-did-mount-set-state': 0,
      'react/jsx-filename-extension': 0,
      'react/no-unused-prop-types': [ 1, { skipShapeProps: true } ],
      'react/jsx-indent': 0,
    },
  }
};
