# @jlozovei/format-money
The coolest money formatting helper for JavaScript! :money_with_wings:

[![codecov](https://codecov.io/gh/jlozovei/format-money/branch/master/graph/badge.svg)](https://codecov.io/gh/jlozovei/format-money)
![Release](https://github.com/jlozovei/format-money/workflows/Release/badge.svg?branch=master)


## :scroll: About
> Have you ever needed to format money using JavaScript?  
Have you ever thought about how do to it without any lib?  
Do you know you can do it with plain JS?

If you already asked one of those questions above, you've find what you're looking for!

`@jlozovei/format-money` is a cool helper, made with plain JS (no deps!) to give you formatted currency/money strings, with any kind of currency available in the world!

No dependencies, no framework - just plain JS!


## :closed_book: How to use
First things first - install the package using `npm` or `yarn`:

```bash
# using npm
npm i @jlozovei/format-money

# using yarn
yarn add @jlozovei/format-money
```

After that, import the helper wherever you want to use it:

```js
// es-modules
import formatMoney from '@jlozovei/format-money';

// commonjs
const formatMoney = require('@jlozovei/format-money');
```

Then, you'll be able to use it:

```js
const localized = formatMoney('123456789'); // "$123,456,789.00"

// or

const localized = formatMoney({
  value: '123456789',
  currencyCode: 'EUR',
  locale: 'DE'
}); // "123.456.789,00 €"
```

### Avaliable Options
| Name           | Type           | Description         | Example |
| -------------- | -------------- | ------------------- | ------- |
| `value`        | string, number | The output language | `123`   |
| `locale`       | string         | The output language | `pt-BR` |
| `currencyCode` | string         | The currency code   | `USD`   |


## :computer: Developing
First, fork the project. After it, install the dependencies (preferably using [npm](https://www.npmjs.com/) - since the project is using it) and do the work.

Also, take a look at the [contributing guide](https://github.com/jlozovei/format-money/blob/master/.github/CONTRIBUTING.md)!


## :thinking: I want to use it, but I don't want to install it
Cool! So, the magic under the hood is basically using the [`number.toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) method, passing some cool parameters to create the formatted currency string:

```js
const number = 123456.789;

number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }); // "123.456,79 €"
number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }); // "￥123,457"
```

- The 1st parameter is the **locale**: the output language for your formatting (`en-US`, `pt-BR`, `es-MX`...);
- The 2nd is an **options** object: here you can tell the _style_ of the formatting and the _currency code_ type you want;
  - _style_: `currency`, `decimal` or `percent` (for this case we want to use `currency`);
  - _currency code_: any currency code available, like `BRL`, `EUR`, `USD`;

#### Please note that the _locale_, or the output language will be how the string is written, and the _currency code_ will be how the number is written under that code.

Take the following code:
```js
const number = 123456.789;

number.toLocaleString('en-US', { style: 'currency', currency: 'BRL' }); // "R$123.456,79"
number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // "R$ 123.456,79"
```

- The first `toLocaleString` is displaying how the number will be formatted under the `BRL` currency code (Brazilian Real), using the `en-US` locale (english from United States);
- The second `toLocaleString` is displaying how the number will be formatted under the `BRL` currency code (Brazilian Real), using the `pt-BR` locale (portuguese from Brazil);


## :closed_lock_with_key: License
Licensed under the [MIT](https://github.com/jlozovei/format-money/blob/master/LICENSE).
