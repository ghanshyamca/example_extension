import * as React from 'react';
import { shallow } from 'enzyme';
import ProductSelect from '../../../src/components/ProductSelect/index';


describe('ProductSelect', () => {
  it('should render without throwing an error', () => {
    const cmsconfig = {
      extensionField: {
        field: {
          getData: jest.fn(),
          schema: {
            field_metadata: {
              instruction: 'data in the loop',
            },
          },
        },
      },
    };
    const wrap = shallow(<ProductSelect cms={cmsconfig} />);
    expect(wrap.render('div').text()).toBe('');
  });
});
