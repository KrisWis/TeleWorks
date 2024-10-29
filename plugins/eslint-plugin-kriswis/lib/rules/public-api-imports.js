const { isPathRelative } = require("../helpers");
const micromatch = require("micromatch");
const path = require("path");

module.exports = {
  meta: {
    type: "layout", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "descr",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [
      {
        type: "object",
        properties: {
          alias: {
            type: "string",
          },
          testFilesPatterns: {
            type: "array",
          },
        },
      },
    ],
  },

  create(context) {
    const { alias = "", testFilesPatterns = [] } = context.options[0] || {};

    const checkingLayers = {
      entities: "entities",
      features: "features",
      pages: "pages",
      widgets: "widgets",
    };

    return {
      ImportDeclaration(node) {
        const value = node.source.value;
        const importTo = alias ? value.replace(`${alias}/`, "") : value;

        if (isPathRelative(importTo)) {
          return;
        }

        // [entities, article, model, types]
        const segments = importTo.split("/");
        const layer = segments[0];

        if (!checkingLayers[layer]) {
          return;
        }

        const isImportNotFromPublicApi = segments.length > 3;
        // [entities, article, testing]
        const isTestingPublicApi =
          segments[3] === "testing" && segments.length < 5;

        if (isImportNotFromPublicApi && !isTestingPublicApi) {
          context.report({
            node: node,
            message:
              "Абсолютный импорт разрешен только из Public API (index.ts)",
          });
        }

        if (isTestingPublicApi) {
          const currentFilePath = context.getFilename();
          const normalizedPath = path.toNamespacedPath(currentFilePath);

          const isCurrentFileTesting = testFilesPatterns.some((pattern) =>
            micromatch.isMatch(normalizedPath, pattern)
          );

          if (!isCurrentFileTesting) {
            context.report({
              node: node,
              message:
                "Тестовые данные необходимо импортировать из publicApi/testing.ts",
            });
          }
        }
      },
    };
  },
};
