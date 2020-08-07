import React, { Component } from 'react';
import { Typography, CircularProgress, Container, Grid, Button } from "@material-ui/core";
import MusicFestivalTreeView from '../../components/MusicFestivalTreeView/MusicFestivalTreeView';
import Axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            musicFestivals: [],
            error: false,
            errorMessage: null,
        };
    }

    handleRefresh = (event) => {
        window.location.reload();
    };


    componentDidMount() {
        Axios.get('http://localhost:8080/music-festivals')
            .then((response) => {
                this.setState({ musicFestivals: response.data, loading: false, error: false });
            })
            .catch((error) => {
                this.setState({ loading: false, error: true, errorMessage: error.message });
            });
    }

    render() {
        let element = <CircularProgress />;
        if (!this.state.loading) {
            if (!this.state.error && this.state.musicFestivals.length > 0) {
                element = <MusicFestivalTreeView musicFestData={this.state.musicFestivals} />
            }
            else {
                element = (
                    <Grid container alignItems="center" alignContent="center" spacing={5}>
                        <Grid item md={12} >
                            <Typography variant="h6" align="center" color="primary">
                                {/* <b>{this.state.errorMessage ? this.state.errorMessage : "Something Went Wrong!! Please try again"}</b> */}
                                <b>Something Went Wrong!! Please try again</b>
                            </Typography>
                        </Grid>
                        <Grid item md={12} >
                            <Button
                                variant="contained"
                                fullWidth
                                color="primary"
                                onClick={this.handleRefresh}
                            >
                                Refresh
                        </Button>
                        </Grid>
                    </Grid >);
            }
        }
        return (
            <Container component="main" maxWidth="md">
                <Grid container alignItems="center" alignContent="center" spacing={3}>
                    <Grid item md={12}>
                        <Typography variant="h6" align="center" color="primary">
                            <b>Record Labels and Bands participated in Music Festivals </b>
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        {element}
                    </Grid>
                </Grid>


            </Container>
        );
    }
}

export default Main;