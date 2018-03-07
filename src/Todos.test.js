import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import Todos from './Todos';
import Todo from './Todo';

describe('<Todos/>', () => {
    const todos = [
        {
            id: 1,
            text: 'Manger'
        },
        {
            id: 2,
            text: 'Boire'
        },
        {
            id: 3,
            text: 'Dormir'
        },
    ]

    const wrapper = shallow(< Todos todos={todos} />);

    it('renders "Mes todos"', () => {
        const textHeader = <h2>Mes todos</h2>;
        expect(wrapper.contains(textHeader)).equal(true);
    });

    it('should not renders just 1 todo item', () => {
        expect(wrapper.find(Todo)).to.not.have.length(1);
    });

    it('renders 3 todo items', () => {
        expect(wrapper.find(Todo)).to.have.length(3);
    });

    it('should have todos props', () => {
        const mountedWrapper = mount(<Todos todos={todos} />);
        expect(mountedWrapper.props().todos).to.have.length(3)
    });


});