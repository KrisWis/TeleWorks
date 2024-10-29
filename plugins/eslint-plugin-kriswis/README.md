# eslint-plugin-kriswis

plugin for production project

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-kriswis`:

```sh
npm install eslint-plugin-kriswis --save-dev
```

## Usage

Add `eslint-plugin-kriswis` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["eslint-plugin-kriswis"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "eslint-plugin-kriswis/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
