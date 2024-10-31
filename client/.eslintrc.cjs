module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["/*", "!/src"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react-hooks", "teleworks"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react-hooks/rules-of-hooks": "error",
    "teleworks/path-checker": ["error", { alias: "@" }],
    "teleworks/public-api-imports": [
      "error",
      {
        alias: "@",
        testFilesPatterns: ["**/*.test.*", "**/*.stories.*"],
      },
    ],
    "teleworks/imports-from-layers": [
      "error",
      {
        alias: "@",
        ignoreImportPatterns: ["**/pageWrappers/**"],
      },
    ],
    "teleworks/exports-always-relative": [
      "error",
      {
        alias: "@",
      },
    ],
  },
};
