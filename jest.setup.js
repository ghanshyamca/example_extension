/* eslint-disable import/no-extraneous-dependencies */
import { setConfig } from 'next/config';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { publicRuntimeConfig } from './next.config';

// NextJS
setConfig({ publicRuntimeConfig });

// Enzyme
configure({ adapter: new Adapter() });
