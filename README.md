# react-shields-badge

[![Travis](https://travis-ci.org/skycloud1030/react-shields-badge.svg?branch=master)](https://travis-ci.org/skycloud1030/react-shields-badge)
[![Coverage Status](https://coveralls.io/repos/github/skycloud1030/react-shields-badge/badge.svg?branch=master)](https://coveralls.io/github/skycloud1030/react-shields-badge?branch=master)
[![Version](https://img.shields.io/npm/v/react-shields-badge.svg)](https://www.npmjs.com/package/react-shields-badge)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Donloads](https://img.shields.io/npm/dm/react-shields-badge.svg)](https://www.npmjs.com/package/react-shields-badge)

### Install

```sh
npm i react-shields-badge --save
yarn add react-shields-badge --save
```

### Getting Started

```js
import Badge from "react-shields-badge";
import "react-shields-badge/dist/react-shields-badge.css";
```

### Demo

- [preview](https://skycloud1030.github.io/react-shields-badge/example/)
- [code](https://github.com/skycloud1030/react-shields-badge/blob/gh-pages/src/index.js)

### Properties

| Props           | Type  | Description                       | Default                                                |
| :-------------- | :---- | :-------------------------------- | :----------------------------------------------------- |
| data            | array | Data record array to be displayed | -                                                      |
| color           | array | Color of the badge                | ![#fff](https://placehold.it/15/fff/000000?text=+)#fff |
| backgroundColor | array | backgroundColor of the badge      | [Color Map](#color-map)                                |


### Color Map

| name        | color                                                           |
| :---------- | :-------------------------------------------------------------- |
| black       | ![#5b5b5b](https://placehold.it/15/5b5b5b/000000?text=+)#5b5b5b |
| blue        | ![#0f80c0](https://placehold.it/15/0f80c0/000000?text=+)#0f80c0 |
| brightgreen | ![#4cc61f](https://placehold.it/15/4cc61f/000000?text=+)#4cc61f |
| red         | ![#d7624b](https://placehold.it/15/d7624b/000000?text=+)#d7624b |
| orange      | ![#f27e3f](https://placehold.it/15/f27e3f/000000?text=+)#f27e3f |
| green       | ![#96c40f](https://placehold.it/15/96c40f/000000?text=+)#96c40f |
| yellowgreen | ![#a1a328](https://placehold.it/15/a1a328/000000?text=+)#a1a328 |
| yellow      | ![#d6ae22](https://placehold.it/15/d6ae22/000000?text=+)#d6ae22 |
| lightgrey   | ![#9e9e9e](https://placehold.it/15/9e9e9e/000000?text=+)#9e9e9e |
