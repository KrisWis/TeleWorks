/**
 * @fileoverview feature sliced relative path checker
 * @author timur
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/path-checker"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, sourceType: "module" },
});
ruleTester.run("path-checker", rule, {
  valid: [
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\entities\\Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'",
      errors: [],
      options: [
        {
          alias: "@",
        },
      ],
    },

    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\widgets\\MainPage_widgets\\Platform_Privileges\\ui\\Platform_Privileges.tsx",
      code: 'import { Platrform_Privileges__itemProps } from "./Platform_Privileges__item/model/Platform_Privileges__item__types";',
      errors: [],
      options: [
        {
          alias: "@",
        },
      ],
    },
  ],

  invalid: [
    {
      filename:
        "C:\\Users\\tim\\Desktop\\javascript\\production_project\\src\\entities\\Article__entities\\Article",
      code: "import { addCommentFormActions, addCommentFormReducer } from '@/entities/Article__entities/Article/model/slices/addCommentFormSlice'",
      errors: [
        {
          message: "В рамках одного слайса все пути должны быть относительными",
        },
      ],
      options: [
        {
          alias: "@",
        },
      ],
    },

    {
      filename:
        "D:\\FrontEnd\\Sites\\TeleWorks\\client\\src\\widgets\\MainPage_widgets\\Platform_Privileges\\ui\\Platform_Privileges.tsx",
      code: 'import { Platrform_Privileges__itemProps } from "@/widgets/MainPage_widgets/Platform_Privileges/ui/Platform_Privileges__item/model/Platform_Privileges__item__types"',
      errors: [
        {
          message: "В рамках одного слайса все пути должны быть относительными",
        },
      ],
      options: [
        {
          alias: "@",
        },
      ],
    },
  ],
});
