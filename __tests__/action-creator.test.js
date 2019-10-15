/* eslint-env jest */
import { actionCreator } from '../index'

describe('Create action from type string', () => {
  it('Returns an object with type and payload', () => {
    const tests = [
      {
        input: {
          type: 'SET_NAME',
          payload: 'Robert Sapolsky'
        },
        output: {
          type: 'SET_NAME',
          payload: 'Robert Sapolsky'
        }
      },
      {
        input: {},
        output: {
          type: '',
          payload: {}
        }
      }
    ]

    tests.forEach((item) => {
      const { input, output } = item;
      expect(actionCreator(input.type)(input.payload)).toStrictEqual(output)
    })
  })
})
