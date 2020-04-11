import React from 'react';
import { configure,shallow } from "enzyme";
import NavigationlItems from "./NavigationItems";
import NavigationlItem from "./NavigationItem/NavigationItem";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<NavigationItems />',() => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationlItems />);
    });

    it('should render two <NavigationlItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationlItem)).toHaveLength(2);
    });

    it('should render three <NavigationlItem /> elements if authenticated', () => {
//        wrapper = shallow(<NavigationlItems isAuthenticated />);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationlItem)).toHaveLength(3);
    });    

    it('should an exact logout button', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationlItem link="/logout">Logout</NavigationlItem>)).toEqual(true);
    });        
});