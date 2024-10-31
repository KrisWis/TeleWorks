const { isPathRelative } = require("../helpers");
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
        },
      },
    ],
  },

  create(context) {
    const { alias = "" } = context.options[0] || {};

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
        const value = node.source.value;
        const importTo = alias ? value.replace(`${alias}/`, "") : value;

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

        if (layers[toLayer] < layers[fromLayer]) {
          context.report({
            node: node,
            message:
              "Нижележащий слой не может содержать импорт из вышележащего!",
          });
        }
      },
    };
  },
};
