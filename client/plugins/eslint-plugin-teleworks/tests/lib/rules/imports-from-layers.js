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

    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\features\\Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/shared/Button.tsx'",
      errors: [],
      options: aliasOptions,
    },
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\features\\Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article'",
      errors: [],
      options: aliasOptions,
    },
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\app\\providers",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/widgets/Articl'",
      errors: [],
      options: aliasOptions,
    },
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\widgets\\pages",
      code: "import { useLocation } from 'react-router-dom'",
      errors: [],
      options: aliasOptions,
    },
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\app\\providers",
      code: "import { addCommentFormActions, addCommentFormReducer } from 'redux'",
      errors: [],
      options: aliasOptions,
    },
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\index.tsx",
      code: "import { StoreProvider } from '@/app/providers/StoreProvider';",
      errors: [],
      options: aliasOptions,
    },
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\entities\\Article.tsx",
      code: "import { StateSchema } from '@/app/providers/StoreProvider'",
      errors: [],
      options: [
        {
          alias: "@",
          ignoreImportPatterns: ["**/StoreProvider"],
        },
      ],
    },

    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\pages\\BlogCreatePage\\ui\\BlogCreatePage.tsx",
      code: "import { BlogCreatePageMain } from '@/app/layouts/BaseLayout/ui/pageWrappers/BlogCreatePageMain';",
      errors: [],
      options: [
        {
          alias: "@",
          ignoreImportPatterns: ["**/pageWrappers/**"],
        },
      ],
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
            "Слой не может совершать импорт только из вышележащего слоя (только entities может совершать импорт ещё и из своего слоя)!",
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
            "Слой не может совершать импорт только из вышележащего слоя (только entities может совершать импорт ещё и из своего слоя)!",
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
            "Слой не может совершать импорт только из вышележащего слоя (только entities может совершать импорт ещё и из своего слоя)!",
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
            "Слой не может совершать импорт только из вышележащего слоя (только entities может совершать импорт ещё и из своего слоя)!",
        },
      ],
      options: aliasOptions,
    },

    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\entities\\providers",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/features/Articl'",
      errors: [
        {
          message:
            "Слой не может совершать импорт только из вышележащего слоя (только entities может совершать импорт ещё и из своего слоя)!",
        },
      ],
      options: aliasOptions,
    },
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\features\\providers",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/widgets/Articl'",
      errors: [
        {
          message:
            "Слой не может совершать импорт только из вышележащего слоя (только entities может совершать импорт ещё и из своего слоя)!",
        },
      ],
      options: aliasOptions,
    },
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\entities\\providers",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/widgets/Articl'",
      errors: [
        {
          message:
            "Слой не может совершать импорт только из вышележащего слоя (только entities может совершать импорт ещё и из своего слоя)!",
        },
      ],
      options: aliasOptions,
    },
  ],
});
