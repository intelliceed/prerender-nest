module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'nestjs'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nestjs/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-mixed-operators": ["error", { "groups": [["&&", "||"]] }],
    "import/order": [
      "error",
      {
        "pathGroups": [
          {
            "pattern": "~constants/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "~specifications/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "~exceptions/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "~pipes/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "~modules/**/*.module",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "~modules/**/*.controller",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "~modules/**/*.service",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "~modules/**/*.model",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "~modules/**",
            "group": "parent",
            "position": "before"
          },
          {
            "pattern": "~dto/**",
            "group": "parent",
            "position": "before"
          },
        ],
        "groups": [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object"
        ],
        "newlines-between": "always",
        "alphabetize": { "order": "ignore", "caseInsensitive": true }
      }
    ],
    "quotes": ["error", "single"],
    "curly": ["warn", "all"],
    "object-curly-spacing": ["warn", "always"],
    "max-len": ["error", {
      "code": 120,
      "comments": 150,
      "tabWidth": 4,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignorePattern": "import",
      "ignoreTemplateLiterals": true,
      "ignoreTrailingComments": true
    }],
  },
};
