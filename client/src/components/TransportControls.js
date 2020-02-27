import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import LinearProgress from '@material-ui/core/LinearProgress';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import {Transport} from 'tone';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
  transportControls: {
    backgroundColor: '#eee',
    borderRadius: 50,
    padding: '10px 20px',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '50vw',
    bottom: 25,
    left: 100,
  },
  controlFab: {position: 'relative', margin: '0 5px'},
  progressBar: {margin: '0 10px'},
}));

function TransportControls({length}) {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [counter, setCounter] = React.useState(false);
  React.useEffect(() => {
    Transport.loop = true;
    Transport.setLoopPoints(0, length);
  }, [length]);
  function togglePlaying() {
    if (isPlaying) {
      Transport.pause();
      setIsPlaying(false);
    } else {
      Transport.start();
      setIsPlaying(true);
      if (counter === false) {
        var id = Transport.scheduleRepeat(
          time => {
            setProgress(Transport.progress);
          },
          0.2,
          0,
        );
        setCounter(id);
        console.log(id);
      }
    }
  }
  function handleStop() {
    Transport.seconds = 0;
    Transport.stop();
    Transport.seconds = 0;
    Transport.start();
    Transport.stop();
    Transport.clear(counter);
    setCounter(false);
    setProgress(0);
    setIsPlaying(false);
  }
  return (
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
      <LinearProgress
        variant="determinate"
        style={{width: 200}}
        value={progress * 100}
      />
      <Typography variant="h5" className={classes.progressBar}>
        {(progress * length).toFixed(1)}/{length.toFixed(1)}s
      </Typography>
    </span>
  );
}

const mapStateToProps = state => {
  return {
    length: state.transport.max_length,
  };
};
export default connect(mapStateToProps)(TransportControls);
