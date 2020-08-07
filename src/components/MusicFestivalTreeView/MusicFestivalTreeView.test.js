import TreeView from '@material-ui/lab/TreeView';
import { mount, shallow } from 'enzyme';
import React from 'react';
import TreeElement from '../UI/TreeElement/TreeElement';
import MusicFestivalTreeView from './MusicFestivalTreeView';


describe('<MusicFestivalTreeView />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MusicFestivalTreeView />);
    });

    it('should render empty elements ', () => {
        expect(wrapper.find(TreeView)).toHaveLength(1);
        expect(wrapper.find(TreeElement)).toHaveLength(0);
    });

    it('should render element if passed record label with no brands', () => {
        wrapper.setProps({
            musicFestData: [{ "name": "ACR", "bands": [] }]
        });
        expect(wrapper.find(TreeView)).toHaveLength(1);
        expect(wrapper.find(TreeElement)).toHaveLength(1);
        expect(wrapper.find('TreeElement').children()).toHaveLength(0);
    });

    it('should render brands elements if passed single brand details', () => {
        wrapper.setProps({
            musicFestData: [{ "name": "ACR", "bands": [{ "name": "Critter Girls", "musicFestivals": ["Unknown"] }] }]
        });
        expect(wrapper.find(TreeView)).toHaveLength(1);
        expect(wrapper.find(TreeView).children()).toHaveLength(1);
        expect(wrapper.find(TreeElement).children()).toHaveLength(3);
    });

    it('should render brands elements if passed multiple brand details', () => {
        wrapper.setProps({
            musicFestData: [{ "name": "ACR", "bands": [{ "name": "Critter Girls", "musicFestivals": ["Unknown"] }, { "name": "Manish Ditch", "musicFestivals": ["Trainerella"] }] }, { "name": "Fourth Woman Records", "bands": [{ "name": "The Black Dashes", "musicFestivals": ["Small Night In"] }] }]
        });
        expect(wrapper.find(TreeView)).toHaveLength(1);
        expect(wrapper.find(TreeView).children()).toHaveLength(2);
        expect(wrapper.find(TreeElement).children()).toHaveLength(9);
    });
});