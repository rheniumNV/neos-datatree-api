module.exports = {
  env: {
    browser: false,
    commonjs: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  globals: {
    process: true,
    __dirname: true,
    Promise: true,
    console: true,
  },
  rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
