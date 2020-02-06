/* eslint-env jest */
import { asyncActionCreator } from '../lib/index';

describe('Create async action from 3 type strings', () => {
  it('Returns an object with 3 actions (pending, success, error)', () => {
    const tests = [
      {
        input: {
          pending: 'GET_DATA_PENDING',
          success: 'GET_DATA_SUCCESS',
          error: 'GET_DATA_ERROR'
        },
        output: {
          pending: {
            type: 'GET_DATA_PENDING',
            payload: {}
          },
          success: {
            type: 'GET_DATA_SUCCESS',
            payload: {}
          },
          error: {
            type: 'GET_DATA_ERROR',
            payload: {}
          }
        }
      }
    ];

    tests.forEach((item) => {
      const { input, output } = item;
      const asyncAction = asyncActionCreator(
        input.pending,
        input.success,
        input.error
      );
      expect(asyncAction.pending()).toStrictEqual(output.pending);
      expect(asyncAction.success()).toStrictEqual(output.success);
      expect(asyncAction.error()).toStrictEqual(output.error);
    });
  });
});
