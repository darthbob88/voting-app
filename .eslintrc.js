"use strict";

const namingConventionsRules = [
    {
        'selector': 'variable',
        'format': [ 'camelCase', 'UPPER_CASE' ]
    },
    {
        'selector': 'parameter',
        'format': [ 'camelCase' ],
        'leadingUnderscore': 'allow'
    },
    {
        'selector': 'typeLike',
        'format': [ 'PascalCase' ]
    },
    {
        'selector': 'interface',
        'prefix': [ 'I' ],
        'format': [ 'PascalCase' ]
    }
];

const restrictedImportPatterns = [ '@spectre-*/*/*', 'libs/*', 'apps/spectre-app/*', 'office-ui-fabric-react' ];

module.exports = {
  'env': {
    browser: true,
    es2022: true,
  },
  'extends': [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      jsx: true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': [ 'tsconfig.json' ],
  },
  ignorePatterns: [ '.eslintrc.js' ],
  'plugins': [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'sonarjs',
    'unicorn',
    'github'
  ],
  'rules': {
    'space-infix-ops': 'warn',
    'max-len': 'off',
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'no-undef': 'off',
    'require-jsdoc': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': ['warn', { 'before': true, 'after': true }],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'warn', 'always' ],
    'comma-dangle': [ 'error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    } ],
    'no-unused-vars': 'off',
    'eqeqeq': [ 'error', 'always' ],
    'react/display-name': 'off',
    'no-invalid-this': 'off',
    'valid-jsdoc': 'off',
    'new-cap': 'warn',
    'react/no-unescaped-entities': 'warn',
    'camelcase': 'warn',
    'indent': [ 'warn', 2, {
      "SwitchCase": 1,
      "ignoredNodes": ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
    } ],
    'eol-last': 'off',
    'no-multiple-empty-lines': [ 'error', {
        'max': 1,
        'maxEOF': 0,
        'maxBOF': 0
    } ],
    'jsx-quotes': 'warn',
    'dot-notation': 'warn',
    'no-useless-computed-key': 'warn',
    'no-lonely-if': 'warn',
    'no-param-reassign': 'error',
    'no-await-in-loop': 'error',
    'no-unneeded-ternary': 'error',
    'array-element-newline': [ 'error',
      {
        'ArrayExpression': { 'multiline': true, 'minItems': 1 },
        'ArrayPattern': { 'multiline': true, 'minItems': 5 }
      }
    ],
    'array-bracket-newline': [ 'error', { 'multiline': true } ],
    'react/jsx-key': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-first-prop-new-line': 'warn',
    'react/jsx-indent': ['warn', 2],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-wrap-multilines': ['warn', {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    'react/self-closing-comp': [ 'error' ],
    'react/jsx-fragments': [ 'error', 'syntax' ],
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-max-props-per-line': [ 'error', { "maximum": { "single": 2, "multi": 1 } } ],
    'react/jsx-indent-props': [ 'error', 2 ],
    "no-restricted-imports": [ 'error', { "patterns": restrictedImportPatterns } ],
    'react-hooks/exhaustive-deps': 'warn',
    'no-duplicate-imports': 'warn',
    'prefer-arrow-callback': 'warn',
    'no-console': 'warn',
    'space-in-parens': [ 'warn', 'never' ],
    'padding-line-between-statements': [ 'error',
        { 'blankLine': 'always', 'prev': [ 'multiline-const', 'multiline-expression', 'block', 'block-like' ], 'next': '*' },
        { 'blankLine': 'always', 'prev': '*', 'next': [ 'multiline-const', 'multiline-expression', 'block', 'block-like' ] },
        { 'blankLine': 'always', 'prev': 'import', 'next': [ 'const', 'let', 'function', 'export', 'block', 'block-like' ] },
        { 'blankLine': 'any', 'prev': [ 'singleline-const', 'singleline-let' ], 'next': 'if' }
    ],
    'import/order': 'error',
    'import/no-named-as-default': 'off',
    'import/no-useless-path-segments': 'error',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-unused-vars': [ 
        'error', 
        { 
            "args": "all", 
            "argsIgnorePattern": "^_",
            "ignoreRestSiblings": true,
            "caughtErrors": "all"
        } 
    ],
    '@typescript-eslint/array-type': [ 'warn', { 'default': 'array' } ],
    '@typescript-eslint/consistent-indexed-object-style': [ 'warn', 'record' ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/member-delimiter-style': [ 'error' , {
        "singleline": {
            "delimiter": "comma",
            "requireLast": false
          },
    }],
    '@typescript-eslint/naming-convention': [ 'error' , ...namingConventionsRules ],
    '@typescript-eslint/promise-function-async': 'error',
    'sonarjs/no-inverted-boolean-check': 'error',
    'sonarjs/no-identical-conditions': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-ignored-return': 'error',
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/prefer-single-boolean-return': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/no-negated-condition': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'github/no-then': 'error'
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'overrides': [
    {
        'files': [
            "*.test.*", 
            'src/__tests__/**/*.*',
        ],
        'env': {
            'jest/globals': true,
        },
        'plugins': [
            'jest',
            'testing-library'
        ],
        'extends': [
            'plugin:jest/recommended',
            'plugin:jest/style',
            'plugin:testing-library/react'
        ],
        'rules': {
            'jest/no-mocks-import': 'off',
            'jest/expect-expect': 'off',
            'jest/valid-title': 'off',
            'jest/no-conditional-expect': 'off',
            'jest/no-disabled-tests': 'error',
            'jest/no-commented-out-tests': 'error',
            'jest/no-export': 'error',
            'jest/prefer-equality-matcher': 'warn',
            'jest/prefer-expect-resolves': 'warn',
            'jest/prefer-to-contain': 'warn',
            'jest/prefer-to-have-length': 'warn',
            'jest/valid-expect': 'error',
            'jest/valid-expect-in-promise': 'error',
            'no-await-in-loop': 'off',
            'testing-library/no-node-access': 'off',
            'testing-library/render-result-naming-convention': 'off',
        },
    },
    {
        'files': [ "*.test.*" ],
        'rules': {
          'no-restricted-imports': [ 'error', { 'patterns': [ ...restrictedImportPatterns, '__utils__/' ] } ]
        }
    },
    {
      'files': [ 'src/__tests__/**/*.*', ],
      'rules': {
        'jest/no-standalone-expect': 'off',
      }
    },
    {
        'files': [ '*.tsx*' ],
        'rules': {
            '@typescript-eslint/naming-convention': [ 'error' , 
                ...(namingConventionsRules.map(convention => convention.selector === 'variable' ? 
                {...convention, format: [ ...convention.format, 'PascalCase' ]} :
                convention))
            ]
        }
    }
  ]
};
