# stylelint-config

Set of Stylelint [shareable config](https://stylelint.io/user-guide/configuration/).

[![Travis](https://img.shields.io/travis/vanduynslagerp/stylelint-config.svg)](https://travis-ci.org/vanduynslagerp/stylelint-config)
[![Code Climate](https://img.shields.io/codeclimate/github/vanduynslagerp/stylelint-config.svg)](https://codeclimate.com/github/vanduynslagerp/stylelint-config)
[![Code Climate](https://img.shields.io/codeclimate/issues/github/vanduynslagerp/stylelint-config.svg)](https://codeclimate.com/github/vanduynslagerp/stylelint-config/issues)
[![Codecov](https://img.shields.io/codecov/c/github/vanduynslagerp/stylelint-config.svg)](https://codecov.io/gh/vanduynslagerp/stylelint-config)

[![npm](https://img.shields.io/npm/v/@metahub/stylelint-config.svg)](https://www.npmjs.com/package/@metahub/stylelint-config)
[![npm](https://img.shields.io/npm/dt/@metahub/stylelint-config.svg)](https://www.npmjs.com/package/@metahub/stylelint-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/vanduynslagerp/stylelint-config.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/vanduynslagerp/stylelint-config.svg)](https://github.com/vanduynslagerp/stylelint-config/blob/master/LICENSE)

## Installation

```
$ npm install --save-dev stylelint @metahub/stylelint-config
```

## Usage

Once the `@metahub/stylelint-config` package is installed, you can use it by specifying the different configs in the [`extends`](https://stylelint.io/user-guide/configuration/#extends) section of your [Stylelint configuration](https://stylelint.io/user-guide/configuration).

```js
{
  'extends': ['@metahub/stylelint-config/scss-config', '@metahub/stylelint-config/order-config'],
  'rules': {
    // Additional, per-project rules...
  }
}
```

## Config files

|Name|Description|Extends|
|:---|:-----|:----------|
|`@metahub`|Base/generic configuration||
|`@metahub/eslint-config/scss-config`|Rules specific to [Scss files](http://sass-lang.com/)|`@metahub`|
|`@metahub/eslint-config/order-config`|Rules to order properties|`@metahub`|
