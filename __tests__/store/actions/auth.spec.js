/* eslint-disable no-undef */
import { setAccessToken } from '../../../src/store/actions/auth';


describe('authAction', () => {
  it('should render without throwing an error', () => {
    const payload = 'Finish docs';
    const expectedAction = {
      type: 'SET_ACCESS_TOKEN',
      payload,
    };
    expect(setAccessToken(payload)).toEqual(expectedAction);
  });
});
