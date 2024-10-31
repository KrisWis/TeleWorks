/**
 * @fileoverview descr
 * @author timur
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/exports-always-relative"),
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

ruleTester.run("exports-always-relative", rule, {
  valid: [
    {
      code: "export * from './ui/UserEditTabs';",
      errors: [],
      options: aliasOptions,
    },

    {
      code: "export { turnkeyWebsitesPageFAQ_items } from './model/TurnkeyWebsitesPageFAQ_data';",
      errors: [],
      options: aliasOptions,
    },

    {
      code: "import { ReviewsProps } from './model/Reviews_types';",
      errors: [],
      options: aliasOptions,
    },

    {
      code: "export const App = () => {}",
      errors: [],
      options: aliasOptions,
    },
  ],

  invalid: [
    {
      code: "export * from '@/widgets/UserEditPage_widgets/UserEditTabs/index';",
      errors: [
        {
          message: "Экспорт файла не может быть абсолютным!",
        },
      ],
      options: aliasOptions,
    },

    {
      code: "export { CatalogItem } from '@/features/CatalogPage_entities/CatalogItem';",
      errors: [
        {
          message: "Экспорт файла не может быть абсолютным!",
        },
      ],
      options: aliasOptions,
    },

    {
      code: "export { CatalogItem } from '@/shared/const/CatalogPage_entities/CatalogItem';",
      errors: [
        {
          message: "Экспорт файла не может быть абсолютным!",
        },
      ],
      options: aliasOptions,
    },

    {
      code: "export { store } from '@/shared/const';",
      errors: [
        {
          message: "Экспорт файла не может быть абсолютным!",
        },
      ],
      options: aliasOptions,
    },
  ],
});
