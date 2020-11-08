import React from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {TCoin} from './types';
import {ConverterBlock, CryptoTable} from './components';
import useStyles from './styles';


function App() {
    const classes:any = useStyles();
    return (
        <Container className={classes.root} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <CryptoTable  classes={classes}/>
                </Grid>
                <Grid item xs={4}>
                    <ConverterBlock classes={classes}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
