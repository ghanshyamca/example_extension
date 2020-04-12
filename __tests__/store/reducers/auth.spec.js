/* eslint-disable no-undef */
import accessTokenData from '../../../src/store/reducers/auth';
import * as actions from '../../../src/store/actions/auth';

const accessTokenState = {
  accessToken: '',
};

describe('authAction', () => {
  it('should render without throwing an error', () => {
    // console.log(accessTokenData(accessTokenState, actions));
    expect(accessTokenData(accessTokenState, actions)).toEqual(accessTokenState);
  });
});
