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
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';

import BottomAppBar from './components/BottomAppBar';
import AudioField from './components/AudioField';
import ChannelControl from './components/ChannelControl';
import {Transport} from 'tone';

const useStyles = makeStyles(theme => ({
  container_max: {width: '100%', height: '100%'},
  max_height: {height: '100vh', overflowY: 'scroll'},
  responsive_img: {width: '100%', height: 'auto'},
  transportControls: {position: 'absolute', bottom: 25, left: 100},
  controlFab: {position: 'relative', margin: '0 5px'},
}));
const data = [...Array(250)].map((el, i) => {
  return {x: i, y: (128 * (i / 2)) % 1024};
});

function App() {
  const classes = useStyles();
  const containerRef = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);
  React.useEffect(() => {
    Transport.loop = true;
  }, []);
  function togglePlaying() {
    if (isPlaying) {
      Transport.pause();
    } else {
      Transport.start();
    }
    setIsPlaying(!isPlaying);
  }
  function handleStop() {
    Transport.stop();
    Transport.seconds = 0;
    setIsPlaying(false);
  }
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Grid container direction="row">
        <Grid
          item
          component={Paper}
          xs={12}
          md={8}
          className={classes.max_height}>
          <AudioField sources={[]} ref={containerRef} />
          <span className={classes.transportControls}>
            <Fab
              color="primary"
              size="large"
              className={classes.controlFab}
              onClick={togglePlaying}>
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </Fab>
            <Fab
              color="primary"
              size="large"
              className={classes.controlFab}
              onClick={handleStop}>
              <StopIcon />
            </Fab>
          </span>
        </Grid>
        <div style={{height: '5vh', width: 0}} />
        <Grid
          item
          component={Paper}
          elevation={3}
          xs={12}
          md={4}
          className={classes.max_height}
          style={{position: 'relative'}}>
          <ChannelControl name="Channel 1" data={data} />
          <ChannelControl name="Channel 2" data={data} />
          <ChannelControl name="Channel 3" data={data} />
          <BottomAppBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
