import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import {Transport} from 'tone';
import Typography from '@material-ui/core/Typography';

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

function TransportControls(length = 1) {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = React.useState(false);
  React.useEffect(() => {
    Transport.loop = true;
    Transport.setLoopPoints(0, '1m');
  }, []);
  function togglePlaying() {
    if (isPlaying) {
      Transport.pause();
      setIsPlaying(false);
    } else {
      Transport.start();
      setIsPlaying(true);
    }
  }
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
        {Math.round(Transport.seconds, 2)}
      </Typography>
    </span>
  );
}
export default TransportControls;
