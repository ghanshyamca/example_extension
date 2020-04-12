import * as React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../../src/components/Layout/index';
import { jssPreset } from '@material-ui/core';


describe('ProductSelect', () => {
  it('should render without throwing an error', () => {
    const children = {
      children: ["1","2","3"],
      "1":"0",
    };
    const wrap = shallow(<Layout {...children} />);
    expect(wrap.render('div').text()).toBe('');
  });
});
