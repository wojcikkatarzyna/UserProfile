import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '../js/Components/Alert.jsx';
import UserInfo from '../js/Components/UserInfo.jsx';

describe('Alert', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Alert/>, div);
    });
});

const alert = shallow(<Alert />);
const Info = shallow(<UserInfo />);
expect(Info.state().displayAlert).toBe(false);
alert.find('button').simulate('click');
expect(Info.state().displayAlert).toBe(true);
