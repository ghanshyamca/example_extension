// import { combineReducers } from 'redux';
import { createStore } from 'redux';
import accessTokenData from '../../../src/store/reducers/auth';
import greeting from '../../../src/store/reducers/greeting';
import combineReducers from '../../../src/store/reducers/index';


const store = createStore(combineReducers);
describe('authAction', () => {
  it('should render without throwing an error', () => {
    expect(store.getState().greeting).toEqual(greeting(undefined, {}))
    const action = { type: 'GREETING' };
    store.dispatch(action);
    expect(store.getState().greeting).toEqual(greeting(undefined, action));
  });
  it('should render without throwing an error', () => {
    expect(store.getState().token).toEqual(accessTokenData(undefined, {}))
    const action = { type: 'SET_ACCESS_TOKEN' };
    store.dispatch(action);
    expect(store.getState().token).toEqual(accessTokenData(undefined, action));
  });
});
