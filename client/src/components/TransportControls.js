import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
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
    }
  }
  React.useEffect(() => {
    setProgress(Transport.progress);
    console.log(Transport.progress);
  }, [Transport.progress]);
  function handleStop() {
    Transport.seconds = 0;
    Transport.stop();
    Transport.seconds = 0;
    Transport.start();
    Transport.stop();
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
      <Typography variant="h5" className={classes.progressBar}>
        {progress}/{length}
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
