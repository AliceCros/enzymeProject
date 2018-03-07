import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TodoForm from './TodoForm'

describe('<TodoForm />', () => {

    it('should display a title', () => {
        const wrapper = shallow(<TodoForm />)
        const textHeader = <h2>Ajouter une todo</h2>;
        expect(wrapper.contains(textHeader)).equal(true);
    });

    it('should submit event when click on submit', () => {
        const onSubmit = sinon.spy();
        const wrapper = mount(<TodoForm onSubmitForm={onSubmit} />);
        const button = wrapper.find('button');

        button.simulate('submit');
        expect(onSubmit).to.have.property('callCount', 1);
    })

})