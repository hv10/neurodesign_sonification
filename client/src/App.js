import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import openSocket from 'socket.io-client';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import BottomAppBar from './components/BottomAppBar';

const useStyles = makeStyles(theme => ({
  container_max: {width: '100%', height: '100%'},
  max_height: {height: '100vh'},
  responsive_img: {width: '100%', height: 'auto'},
}));

function App() {
  const classes = useStyles();
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Grid container direction="row">
        <Grid
          item
          component={Paper}
          xs={12}
          md={8}
          className={classes.max_height}></Grid>
        <div style={{height: '5vh', width: 0}} />
        <Grid
          item
          component={Paper}
          elevation={3}
          xs={12}
          md={4}
          className={classes.max_height}
          style={{position: 'relative'}}>
          <Container></Container>
          <BottomAppBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
