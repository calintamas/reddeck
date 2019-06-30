# reddeck

These are a couple of `redux` utils that I wrote to make my life easier and reduce boilerplate.

Etymology: redux + deck

## Install
```
yarn add reddeck
```

## Usage
### actionCreator
The `actionCreator` function returns an `action` object with `type` and `payload`.
```js
import { actionCreator } from 'reddeck'

const setName = actionCreator('SET_NAME');
```

Then, I can use the action creator to `dispatch` and `action`.
```js
dispatch(setName('Serena'));
```

### asyncActionCreator
Similar to the `actionCreator` function, but instead of returning a simple `action`, it returns an object with 3 keys: `pending`, `success` and `error`.
Every key has a simple `action` as associated value.
```js
import { asyncActionCreator } from 'reddeck'

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
  } catch(err) {
    dispatch(getData.error(err)); // { type: 'GET_DATA_ERROR', payload: data }
  }
}
```

### typeCreator
First parameter is a string containing all the types. Spaces are ignored.
The second parameter specifies the options and it's optional.
```js
import { typeCreator } from 'reddeck'

const options = {
  prefix: 'app/'
};

const types = typeCreator(`
  SET_NAME

  GET_DATA_PENDING
  GET_DATA_SUCCESS
  GET_DATA_ERROR
`, options)

console.log(types)
/*
  {
    SET_NAME: 'app/SET_NAME',
    GET_DATA_PENDING: 'app/GET_DATA_PENDING',
    GET_DATA_SUCCESS: 'app/GET_DATA_SUCCESS',
    GET_DATA_ERROR: 'app/GET_DATA_ERROR'
  }
*/
```

### apiStateCreator
```js
import { apiStateCreator } from 'reddeck'

const api = apiStateCreator();
console.log(api)
/*
  {
    pending: false,
    success: false,
    error: false
  }
*/

const apiPending = apiStateCreator({ pending: true })
console.log(apiPending)
/*
  {
    pending: true,
    success: false,
    error: false
  }
*/
```
