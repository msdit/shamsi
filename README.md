# Shamsi

A Jalali to Gregorian converter with no dependency!

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![NPM version](https://img.shields.io/npm/v/shamsi.svg?style=flat)](https://npmjs.org/package/shamsi)
[![Package Quality](https://npm.packagequality.com/shield/shamsi.svg)](https://packagequality.com/#?package=shamsi)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e7b808bc8c424d35afd33717776f1ad8)](https://www.codacy.com/gh/msdit/shamsi/dashboard?utm_source=github.com&utm_medium=referral&utm_content=msdit/shamsi&utm_campaign=Badge_Grade)

## How to

- [Install](#install)
- Use Shamsi in:
  - [Node.js](#using-in-nodejs)
  - [React](#react)
  - [Es5](#es5)
  - [Jquery](#jquery)

This plugin convert jalali to gregorian and gregorian to jalali in the most simple way

Convert gregorian to jalali

```js
shamsi.gregorianToJalali(1989, 1, 24); //[1367, 11, 4]
```

Convert jalali to gregorian

```js
shamsi.jalaliToGregorian(1367, 11, 4); //[1989, 1, 24]
```

## Install

Install via **npm**

```shell
npm install shamsi -S
```

Install via **yarn**

```shell
yarn add shamsi
```

## Using in Node.js

Install it via npm or yarn then use it as the following code

```js
var shamsi = require("jalali-moment");
shamsi.gregorianToJalali(1989, 1, 24);
```

## Using in browser

#### ES5

get library using bower, npm, cdn, or cloning the repository

```HTML
<script src="https://unpkg.com/shamsi"></script>

<script>
  shamsi.gregorianToJalali(1989, 1, 24);
</script>
```

#### React

```js
import * as shamsi from 'shamsi';
...
render() {
  return (<p>{shamsi.gregorianToJalali(1989, 1, 24).join('/')}</p>);
}

```

#### Jquery

get library using bower, npm, cdn, or cloning the repository

```HTML
<script src="https://unpkg.com/shamsi"></script>

<script>
  $("#date").text(shamsi.gregorianToJalali(1989, 1, 24).join('/'));
</script>
```
