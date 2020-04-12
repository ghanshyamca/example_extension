/* eslint-disable no-undef */
import greeting from '../../../src/store/reducers/greeting';
import * as actions from '../../../src/store/actions/greeting';

const initState = { message: 'Hello' };

describe('authAction', () => {
  it('should render without throwing an error', () => {
    // console.log(accessTokenData(accessTokenState, actions));
    expect(greeting(initState, actions)).toEqual(initState);
  });
});
