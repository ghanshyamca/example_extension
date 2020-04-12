/* eslint-disable no-undef */
import { sayHello } from '../../../src/store/actions/greeting';


describe('authAction', () => {
  it('should render without throwing an error', () => {
    const message = 'Finish docs';
    const expectedAction = {
      type: 'GREETING',
      message,
    };
    expect(sayHello(message)).toEqual(expectedAction);
  });
});
