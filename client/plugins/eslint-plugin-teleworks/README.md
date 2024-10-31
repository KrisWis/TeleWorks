# eslint-plugin-teleworks

plugin for production project

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-teleworks`:

```sh
npm install eslint-plugin-teleworks --save-dev
```

## Usage

Add `eslint-plugin-teleworks` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["eslint-plugin-teleworks"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "eslint-plugin-teleworks/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
