/* eslint-disable no-undef */
const configActionContext = (commit) => ({
  commit,
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {},
  rootGetters: jest.fn(),
});

const configActionContextDispatch = (dispatch) => ({
  commit: jest.fn(),
  dispatch,
  getters: jest.fn(),
  rootState: {},
  rootGetters: jest.fn(),
});

export { configActionContext, configActionContextDispatch };
