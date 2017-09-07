import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import AddComment from '../js/Components/AddComment.jsx';

describe('AddComment', () => {
    it('renders without crashing', () => {
        const footer = document.createElement('footer');
        ReactDOM.render(<AddComment/>, footer);
    });
});
