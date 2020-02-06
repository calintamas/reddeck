/* eslint-env jest */
import { actionCreator, asyncActionCreator } from '../src/index';

describe('Create action from type string', () => {
  it('Creates action creator', () => {
    expect(actionCreator('SET_NAME')('Robert Sapolsky')).toStrictEqual({
      type: 'SET_NAME',
      payload: 'Robert Sapolsky'
    });
  });

  it('Creates action creator, undefined type and payload', () => {
    expect(actionCreator(undefined)(undefined)).toStrictEqual({
      type: '',
      payload: {}
    });
  });
});

describe('Create async action creator', () => {
  it('Creates async action creator', () => {
    const ac = asyncActionCreator('GET_PENDING', 'GET_SUCCESS', 'GET_ERROR');

    expect(ac.pending().type).toBe('GET_PENDING');
    expect(ac.success().type).toBe('GET_SUCCESS');
    expect(ac.error().type).toBe('GET_ERROR');
  });
});
