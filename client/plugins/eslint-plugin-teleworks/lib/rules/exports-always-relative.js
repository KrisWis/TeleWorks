const { isPathRelative } = require("../helpers");

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

    return {
      ExportAllDeclaration(node) {
        const value = node.source.value;
        const exportFrom = alias ? value.replace(`${alias}/`, "") : value;

        if (isPathRelative(exportFrom)) {
          return;
        }

        context.report({
          node: node,
          message: "Экспорт файла не может быть абсолютным!",
        });
      },

      ExportNamedDeclaration(node) {
        if (!node.source) return;

        const value = node.source.value;
        const exportFrom = alias ? value.replace(`${alias}/`, "") : value;

        if (isPathRelative(exportFrom)) {
          return;
        }

        context.report({
          node: node,
          message: "Экспорт файла не может быть абсолютным!",
        });
      },
    };
  },
};
