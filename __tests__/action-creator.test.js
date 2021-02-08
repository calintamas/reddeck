/* eslint-env jest */
const { actionCreator, asyncActionCreator } = require('../src');

describe('test actionCreator', () => {
  it('Creates a simple action creator', () => {
    const type = 'SET_NAME';
    const payload = {
      foo: 'bar'
    };
    const setName = actionCreator(type);
    expect(setName).toBeInstanceOf(Function);

    const action = setName(payload);
    expect(action.type).toBe(type);
    expect(action.payload).toEqual(payload);
  });

  it('Creates a simple action creator, undefined type and payload', () => {
    const type = undefined;
    const payload = undefined;
    const foo = actionCreator(type);
    expect(foo).toBeInstanceOf(Function);

    const action = foo(payload);
    expect(action.type).toBe('');
    expect(action.payload).toEqual({});
  });
});

describe('test asyncActionCreator', () => {
  it('Creates async action creator', () => {
    const get = asyncActionCreator('GET_PENDING', 'GET_SUCCESS', 'GET_ERROR');
    expect(get.pending().type).toBe('GET_PENDING');
    expect(get.success().type).toBe('GET_SUCCESS');
    expect(get.error().type).toBe('GET_ERROR');
  });

  it('Creates async action creator, undefined values', () => {
    const get = asyncActionCreator();
    expect(get.pending().type).toBe('');
    expect(get.success().type).toBe('');
    expect(get.error().type).toBe('');
  });
});
