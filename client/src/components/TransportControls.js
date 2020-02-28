import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import SettingsIcon from '@material-ui/icons/Settings';
import {Transport} from 'tone';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
  transportControls: {
    backgroundColor: '#eee',
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'center',
    maxWidth: '50vw',
    bottom: 25,
    left: 100,
  },
  controlFab: {position: 'relative', margin: '0 5px'},
  progressBar: {margin: '0 10px'},
  settingsDialog: {padding: theme.spacing(2), minWidth: 250, width: '30vw'},
}));

function TransportControls({length}) {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [counter, setCounter] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
  const [settingsAnchor, setSettingsAnchor] = React.useState(null);
  const [tempo, setTempo] = React.useState(1);
  const [loopPoints, setLoopPoints] = React.useState([0, length]);
  const [cLoopPoints, setCLoopPoints] = React.useState([0, length]);
  React.useEffect(() => {
    Transport.loop = true;
    Transport.setLoopPoints(0, length);
    setLoopPoints([0, length]);
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
    Transport.seconds = loopPoints[0];
    Transport.stop();
    Transport.seconds = loopPoints[0];
    Transport.start();
    Transport.stop();
    Transport.clear(counter);
    setCounter(false);
    setProgress(0);
    setIsPlaying(false);
  }

  function handleSettingsOpen(event) {
    setSettingsAnchor(event.currentTarget);
  }
  function handleSettingsClose() {
    setSettingsAnchor(null);
  }
  function handleSettingsChange() {
    Transport.setLoopPoints(loopPoints[0], loopPoints[1]);
    setCLoopPoints(loopPoints);
    Transport.bpm.rampTo(120 * tempo, 1);
  }
  function currentRelPos() {
    return cLoopPoints[0] + progress * (length - cLoopPoints[1]);
  }
  function handleJump(v) {
    Transport.seconds = v;
  }
  const settingsOpen = Boolean(settingsAnchor);
  return (
    <Grid container className={classes.transportControls} spacing={3}>
      <Grid item xs={1}>
        <Fab
          color="primary"
          size="large"
          className={classes.controlFab}
          onClick={togglePlaying}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </Fab>
      </Grid>
      <Grid item>
        <Fab
          color="primary"
          size="large"
          className={classes.controlFab}
          onClick={handleStop}>
          <StopIcon />
        </Fab>
      </Grid>
      <Grid item xs={7}>
        <Grid container>
          <Grid item xs={10}>
            <Slider
              variant="determinate"
              value={current}
              min={0}
              max={length}
              style={{width: '100%'}}
              onChange={(e, v) => setCurrent(v)}
              onChangeCommited={(e, v) => handleJump(v)}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6" className={classes.progressBar}>
              {(cLoopPoints[0] + progress * (length - cLoopPoints[1])).toFixed(
                1,
              )}
              /{length.toFixed(1)}s
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={handleSettingsOpen}>
          <SettingsIcon />
        </Button>
        <Popover
          open={settingsOpen}
          onClose={handleSettingsClose}
          anchorEl={settingsAnchor}
          PaperProps={{className: classes.settingsDialog}}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <FormControl style={{width: '100%'}}>
                <InputLabel id="tempo-select">Tempo</InputLabel>
                <Select
                  labelId="tempo-select"
                  value={tempo}
                  onChange={e => setTempo(e.target.value)}>
                  <MenuItem value={0.25}>.25x</MenuItem>
                  <MenuItem value={0.5}>.5x</MenuItem>
                  <MenuItem value={1}>1x</MenuItem>
                  <MenuItem value={2}>2x</MenuItem>
                  <MenuItem value={3}>3x</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl style={{width: '100%'}}>
                <InputLabel id="tempo-select">Loop Points</InputLabel>
                <Slider
                  labelId="tempo-select"
                  value={loopPoints}
                  max={length}
                  step={0.1}
                  min={0}
                  onChange={(e, v) => setLoopPoints(v)}
                  valueLabelDisplay="auto"
                />
              </FormControl>
            </Grid>
            <Grid item>
              <Button onClick={handleSettingsChange}>Apply</Button>
            </Grid>
          </Grid>
        </Popover>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    length: state.transport.max_length,
  };
};
export default connect(mapStateToProps)(TransportControls);
