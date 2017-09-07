import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '../js/Components/Alert.jsx';

describe('Alert', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Alert/>, div);
    });
});
