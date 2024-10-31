const { isPathRelative } = require("../helpers");
const path = require("path");
const micromatch = require("micromatch");

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
          ignoreImportPatterns: {
            type: "array",
          },
        },
      },
    ],
  },

  create(context) {
    const { alias = "", ignoreImportPatterns = [] } = context.options[0] || {};

    const layers = {
      app: 1,
      pages: 2,
      widgets: 3,
      features: 4,
      entities: 5,
      shared: 6,
    };

    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;
        const importTo = alias
          ? importPath.replace(`${alias}/`, "")
          : importPath;

        if (isPathRelative(importTo)) {
          return;
        }

        // [entities, article, model, types]
        const segments = importTo.split("/");
        const toLayer = segments[0];

        const fromFilename = context.getFilename();
        const normalizedPath = path.toNamespacedPath(fromFilename);
        const projectFrom = normalizedPath.split("src")[1];
        const fromArray = projectFrom.split("\\");
        const fromLayer = fromArray[1];

        if (!layers[toLayer] || !layers[fromLayer]) {
          return;
        }

        const isIgnored = ignoreImportPatterns.some((pattern) => {
          return micromatch.isMatch(importPath, pattern);
        });

        if (isIgnored) {
          return;
        }

        if (
          (layers[toLayer] == 5 && layers[fromLayer] == 5) ||
          (layers[toLayer] == 6 && layers[fromLayer] == 6)
        ) {
          return;
        }

        if (layers[toLayer] <= layers[fromLayer]) {
          context.report({
            node: node,
            message:
              "Слой не может совершать импорт только из вышележащего слоя (только entities может совершать импорт ещё и из своего слоя)!",
          });
        }
      },
    };
  },
};
