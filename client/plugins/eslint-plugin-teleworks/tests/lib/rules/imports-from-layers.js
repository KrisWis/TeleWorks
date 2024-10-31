/**
 * @fileoverview descr
 * @author timur
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/imports-from-layers"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, sourceType: "module" },
});

const aliasOptions = [
  {
    alias: "@",
  },
];

ruleTester.run("imports-from-layers", rule, {
  valid: [
    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\widgets\\CatalogCartPage_widgets\\CartRecommendedChannels\\ui\\CartRecommendedChannels.tsx",
      code: "import { CatalogItem } from '@/entities/CatalogPage_entities/CatalogItem';",
      errors: [],
      options: aliasOptions,
    },

    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\features\\CatalogCartPage_widgets\\CartRecommendedChannels\\ui\\CartRecommendedChannels.tsx",
      code: "import { CatalogItem } from '@/entities/CatalogPage_entities/CatalogItem';",
      errors: [],
      options: aliasOptions,
    },

    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\app\\CatalogCartPage_widgets\\CartRecommendedChannels\\ui\\CartRecommendedChannels.tsx",
      code: "import { CatalogItem } from '@/shared/CatalogPage_entities/CatalogItem';",
      errors: [],
      options: aliasOptions,
    },
  ],

  invalid: [
    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\entities\\CatalogCartPage_widgets\\CartRecommendedChannels\\ui\\CartRecommendedChannels.tsx",
      code: "import { CatalogItem } from '@/widgets/CatalogPage_entities/CatalogItem';",
      errors: [
        {
          message:
            "Нижележащий слой не может содержать импорт из вышележащего!",
        },
      ],
      options: aliasOptions,
    },

    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\entities\\CatalogCartPage_widgets\\CartRecommendedChannels\\ui\\CartRecommendedChannels.tsx",
      code: "import { CatalogItem } from '@/features/CatalogPage_entities/CatalogItem';",
      errors: [
        {
          message:
            "Нижележащий слой не может содержать импорт из вышележащего!",
        },
      ],
      options: aliasOptions,
    },

    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\shared\\CatalogCartPage_widgets\\CartRecommendedChannels\\ui\\CartRecommendedChannels.tsx",
      code: "import { CatalogItem } from '@/widgets/const/CatalogPage_entities/CatalogItem';",
      errors: [
        {
          message:
            "Нижележащий слой не может содержать импорт из вышележащего!",
        },
      ],
      options: aliasOptions,
    },

    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\shared\\CatalogCartPage_widgets\\CartRecommendedChannels\\ui\\CartRecommendedChannels.tsx",
      code: "import { store } from '@/app/const';",
      errors: [
        {
          message:
            "Нижележащий слой не может содержать импорт из вышележащего!",
        },
      ],
      options: aliasOptions,
    },
  ],
});
