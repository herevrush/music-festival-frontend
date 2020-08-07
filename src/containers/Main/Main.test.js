import { CircularProgress, Button, Typography } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import Main from './Main';
import MusicFestivalTreeView from '../../components/MusicFestivalTreeView/MusicFestivalTreeView';


describe('<Main />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Main />);
    });

    it('should render loading elements ', () => {
        const mockState = {
            loading: true,
            musicFestivals: [],
            error: false,
            errorMessage: null,
        };
        wrapper.setState({
            ...mockState
        });
        const instance = wrapper.instance();
        expect(instance.state).toEqual(mockState);
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
        expect(wrapper.find(MusicFestivalTreeView)).toHaveLength(0);
    });

    it('should render MusicFestivalTreeView element ', () => {
        const mockState = {
            loading: false,
            musicFestivals: [{ "name": "ACR", "bands": [] }],
            error: false,
            errorMessage: null,
        };
        wrapper.setState({
            ...mockState
        });
        const instance = wrapper.instance();
        expect(instance.state).toEqual(mockState);
        expect(wrapper.find(CircularProgress)).toHaveLength(0);
        expect(wrapper.find(MusicFestivalTreeView)).toHaveLength(1);
    });

    it('should render error element ', () => {
        const mockState = {
            loading: false,
            musicFestivals: [],
            error: true,
            errorMessage: "error",
        };
        wrapper.setState({
            ...mockState
        });
        const instance = wrapper.instance();
        expect(instance.state).toEqual(mockState);
        expect(wrapper.find(CircularProgress)).toHaveLength(0);
        expect(wrapper.find(MusicFestivalTreeView)).toHaveLength(0);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.contains(<Typography variant="h6" align="center" color="primary">
            <b>Something Went Wrong!! Please try again</b>
        </Typography>)).toEqual(true);
    });
});