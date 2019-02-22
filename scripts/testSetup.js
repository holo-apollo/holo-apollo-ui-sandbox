import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const env = {
  API_ROOT: '/',
  STATIC_ROOT: '/',
};

global.window.env = env;
global.process.env = env;
