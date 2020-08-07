import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TreeElement from './TreeElement';
import TreeItem from '@material-ui/lab/TreeItem'
configure({ adapter: new Adapter() });

describe('<TreeElement />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TreeElement />);
    });

    it('should render empty elements ', () => {
        expect(wrapper.find(TreeItem)).toHaveLength(1);
    });

    it('should render element if passed id and name', () => {
        wrapper.setProps({ id: 1, name: "myElement" });
        expect(wrapper.find(TreeItem)).toHaveLength(1);
    });

    it('should render children element if passed id and name', () => {
        wrapper = shallow(<TreeElement name="parent" id="id"><TreeElement name="child" id="childId"></TreeElement></TreeElement>);
        expect(wrapper.find(TreeItem)).toHaveLength(1);
        expect(wrapper.contains(<TreeItem nodeId='id' label='parent'><TreeElement name='child' id='childId' /></TreeItem>)).toEqual(true);
    });

});