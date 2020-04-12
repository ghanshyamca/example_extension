/* eslint-disable no-undef */
import React, { reactMock } from 'react';
import { mount } from 'enzyme';
import IndexPage from '../src/pages/index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(<IndexPage />);
      expect(wrap.find('div').text()).toBe('');
    });
  });
});
