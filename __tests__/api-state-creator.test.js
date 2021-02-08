/* eslint-env jest */
const { apiStateCreator } = require('../src');

describe('test apiStateCreator', () => {
  it('creates default state', () => {
    const state = apiStateCreator();
    expect(state.pending).toBe(false);
    expect(state.error).toBe(false);
    expect(state.success).toBe(false);
  });

  it('creates some other state', () => {
    const state = apiStateCreator({
      pending: true
    });
    expect(state.pending).toBe(true);
  });
});
