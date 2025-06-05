module.exports = {
  env: {
    browser: true, // Allows browser global variables
    es2021: true,  // Enables ES2021 syntax
    node: true,    // Allows Node.js global variables and Node.js scoping (if you have scripts)
  },
  extends: [
    'eslint:recommended',        // Uses ESLint's recommended rules (for syntax errors, unused vars, etc.)
    'plugin:prettier/recommended', // Integrates Prettier: enables eslint-plugin-prettier, sets prettier/prettier rule to "error", and extends eslint-config-prettier
  ],
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript standard
    sourceType: 'module',  // Allows for the use of imports
  },
  rules: {
    // You can add custom ESLint rules here later if needed.
    // For example, to enforce a specific quote style (though Prettier will handle most formatting):
    // 'quotes': ['error', 'single'],
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Warn on unused variables, but allow unused function arguments prefixed with _
  },
}; 