# reddeck

[![npm version](https://img.shields.io/npm/v/reddeck)](https://www.npmjs.com/package/reddeck)
[![npm downloads](https://img.shields.io/npm/dw/reddeck)](https://www.npmjs.com/package/reddeck)
[![Build](https://github.com/calintamas/reddeck/workflows/tests/badge.svg)](https://github.com/calintamas/reddeck/actions)
[![Coverage Status](https://coveralls.io/repos/github/calintamas/reddeck/badge.svg?branch=master)](https://coveralls.io/github/calintamas/reddeck?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A couple of `redux` utils I wrote to make my life easier and reduce boilerplate.

## Install

```
yarn add reddeck
```

## API

### actionCreator(type)

Takes a `string` as parameter, returns an "action creator". An action creator is a function that returns a `{ type, payload }` object when called.

```js
import { actionCreator } from 'reddeck';

const setName = actionCreator('SET_NAME');
console.log(setName('Foo')); // { type: 'SET_NAME', payload: 'Foo' }
```

### asyncActionCreator(pendingType, successType, errorType)

Similar to the `actionCreator()` function, but instead of returning an action creator, it returns an object with 3 action creators: `pending()`, `success()` and `error()`.

```js
import { asyncActionCreator } from 'reddeck';

const getData = asyncActionCreator(
  'GET_DATA_PENDING',
  'GET_DATA_SUCCESS',
  'GET_DATA_ERROR'
);
```

It's useful when you want to handle an asynchronous control flow

```js
const get = async () => {
  try {
    dispatch(getData.pending()); // { type: 'GET_DATA_PENDING', payload: {} }
    const data = await getDataFromAPI();
    dispatch(getData.success(data)); // { type: 'GET_DATA_SUCCESS', payload: data }
  } catch (err) {
    dispatch(getData.error(err)); // { type: 'GET_DATA_ERROR', payload: err }
  }
};
```

### typeCreator(types, options)

First param is a `string` containing all the types. Spaces are ignored.
The second parameter specifies the options and it's optional.

```js
import { typeCreator } from 'reddeck';

const options = {
  prefix: 'app/'
};

const types = typeCreator(
  `
  SET_NAME

  GET_DATA_PENDING
  GET_DATA_SUCCESS
  GET_DATA_ERROR
`,
  options
);

console.log(types);
/*
  {
    SET_NAME: 'app/SET_NAME',
    GET_DATA_PENDING: 'app/GET_DATA_PENDING',
    GET_DATA_SUCCESS: 'app/GET_DATA_SUCCESS',
    GET_DATA_ERROR: 'app/GET_DATA_ERROR'
  }
*/
```

### apiStateCreator(newState)

```js
import { apiStateCreator } from 'reddeck';

const api = apiStateCreator();
console.log(api);
/*
  {
    pending: false,
    success: false,
    error: false
  }
*/

const apiPending = apiStateCreator({ pending: true });
console.log(apiPending);
/*
  {
    pending: true,
    success: false,
    error: false
  }
*/
```
