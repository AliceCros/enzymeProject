import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from "./App";

describe('testing App component', () => {

    it('renders without crashing', () => {
        expect(
            shallow(
                <App />
            ).length
        ).is.equal(1);
    });

        describe('testing css elements on App component', () => {

            const wrapper = shallow(
                <App
                    todos={{}}
                />
            )

            // Show css elements in App.js
            console.log(wrapper.debug());

            it('should render 1 img with class "App-logo"', () => {
                expect(wrapper.find('.App-logo')).to.have.length(1);
            });

            it('should render 2 div in < App />', () => {
                expect(wrapper.find('div')).to.have.length(2);
            });

            it('should render 1 h2', () => {
                expect(wrapper.find('h2').exists()).to.equal(true);
                expect(wrapper.find('h2')).to.have.length(1);

            });

            it('should display a welcome message', () => {
                const title = <h2>Welcome to React</h2>;
                expect(wrapper.contains(title)).equal(true);

            });

            it('should have 3 todos in the state', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.state().todos).to.have.length(3)
            });

        });

});
