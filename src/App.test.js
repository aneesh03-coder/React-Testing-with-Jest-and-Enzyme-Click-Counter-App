
import App from './App';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({adapter: new EnzymeAdapter()})

test('the app component renders without crashing', () => {
    const wrapper=shallow(<App/>)
    expect(wrapper.exists()).toBe(true)
});
