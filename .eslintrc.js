module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ["gatsby-ssr.js", "gatsby-config.js","gatsby-node.js"],
  rules: {
    // disable the rule for all files
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    "react/react-in-jsx-scope": "off", //es-next won't need react on top of that
    "@typescript-eslint/explicit-module-boundary-types": "off",
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          { char: '>', alternatives: ['&gt;'] },
          { char: '}', alternatives: ['&#125;'] }
        ]
      }
    ],
    
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      }
    }
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  }
};
