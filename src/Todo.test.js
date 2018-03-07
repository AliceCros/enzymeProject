import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Todo from './Todo';

describe('<Todo />', () => {
    const todo = {
        id: 1,
        text: 'Manger'
    }

    it('simulate a click', () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow((
            <Todo onDeleteItem={onButtonClick} />
        ));
        wrapper.find('button').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    })

});