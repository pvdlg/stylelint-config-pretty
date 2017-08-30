# stylelint-config-pretty

Modular Stylelint [shareable config](https://stylelint.io/user-guide/configuration/).

[![npm](https://img.shields.io/npm/v/stylelint-config-pretty.svg)](https://www.npmjs.com/package/stylelint-config-pretty)
[![npm](https://img.shields.io/npm/dt/stylelint-config-pretty.svg)](https://www.npmjs.com/package/stylelint-config-pretty)
[![Greenkeeper badge](https://badges.greenkeeper.io/vanduynslagerp/stylelint-config-pretty.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/vanduynslagerp/stylelint-config-pretty.svg)](https://github.com/vanduynslagerp/stylelint-config-pretty/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Travis](https://img.shields.io/travis/vanduynslagerp/stylelint-config-pretty.svg)](https://travis-ci.org/vanduynslagerp/stylelint-config-pretty)
[![Code Climate](https://img.shields.io/codeclimate/github/vanduynslagerp/stylelint-config-pretty.svg)](https://codeclimate.com/github/vanduynslagerp/stylelint-config-pretty)
[![Codecov](https://img.shields.io/codecov/c/github/vanduynslagerp/stylelint-config-pretty.svg)](https://codecov.io/gh/vanduynslagerp/stylelint-config-pretty)

## Installation

```
$ npm install --save-dev stylelint stylelint-config-pretty
```

## Usage

Once the `stylelint-config-pretty` package is installed, you can use it by specifying the different configs in the [`extends`](https://stylelint.io/user-guide/configuration/#extends) section of your [Stylelint configuration](https://stylelint.io/user-guide/configuration).

```js
{
  'extends': ['pretty/scss', 'pretty/order'],
  'rules': {
    // Additional, per-project rules...
  }
}
```

## Config files

| Name            | Description                                           | Extends  |
| --------------- | ----------------------------------------------------- | -------- |
| `@pretty`       | Base/generic configuration                            |          |
| `pretty/scss`   | Rules specific to [Scss files](http://sass-lang.com/) | `pretty` |
| `pretty/order`  | Rules to order properties                             | `pretty` |
