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
  plugins: ["react-refresh", "react-hooks", "kriswis"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react-hooks/rules-of-hooks": "error",
    "kriswis/path-checker": ["error", { alias: "@" }],
    "kriswis/public-api-imports": [
      "error",
      {
        alias: "@",
        testFilesPatterns: ["**/*.test.*", "**/*.stories.*"],
      },
    ],
  },
};
