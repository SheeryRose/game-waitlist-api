module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly'
      }
    },
    rules: {
  'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  'no-undef': 'error',
  'no-console': 'off',
  semi: ['error', 'always'],
  quotes: ['error', 'single', { avoidEscape: true }]
},
    
    ignores: ['node_modules/**']
  }
];