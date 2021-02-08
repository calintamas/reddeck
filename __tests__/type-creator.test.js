/* eslint-env jest */
const { typeCreator } = require('../src');

describe('Create types from strings', () => {
  it('Returns an object with types', () => {
    const tests = [
      {
        param1: `
          SET_NAME

          GET_PENDING
          GET_ERROR
          GET_SUCCESS
        `,
        param2: undefined,
        result: {
          SET_NAME: 'SET_NAME',
          GET_PENDING: 'GET_PENDING',
          GET_ERROR: 'GET_ERROR',
          GET_SUCCESS: 'GET_SUCCESS'
        }
      },
      {
        param1: 'SET_NAME    str a',
        param2: { prefix: 'home/' },
        result: {
          SET_NAME: 'home/SET_NAME',
          str: 'home/str',
          a: 'home/a'
        }
      },
      {
        param1: 'SET_NAME',
        param2: undefined,
        result: {
          SET_NAME: 'SET_NAME'
        }
      },
      {
        param1: '',
        param2: undefined,
        result: {}
      }
    ];

    tests.forEach((item) => {
      const { param1, param2, result } = item;
      expect(typeCreator(param1, param2)).toEqual(result);
    });
  });

  it('has leading and trailing lines that will be trimmed', () => {
    expect(typeCreator(`  FOO  BAR  `)).toEqual({
      FOO: 'FOO',
      BAR: 'BAR'
    });
  });
});
