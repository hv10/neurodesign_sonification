import React from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
//import openSocket from 'socket.io-client';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import CSVReader from 'react-csv-reader';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {AutoSizer} from 'react-virtualized';

import BottomAppBar from './components/BottomAppBar';
import AudioField from './components/AudioField';
import ChannelControl from './components/ChannelControl';
import TransportControls from './components/TransportControls';
import {Transport} from 'tone';
import {LineChart, Brush, XAxis} from 'recharts';

const useStyles = makeStyles(theme => ({
  container_max: {width: '100%', height: '100%'},
  max_height: {height: '100vh', overflowY: 'scroll'},
  responsive_img: {width: '100%', height: 'auto'},
  transportControls: {position: 'absolute', bottom: 25, left: 100},
  controlFab: {position: 'relative', margin: '0 5px'},
}));

function App({dispatch}) {
  const classes = useStyles();
  const containerRef = React.useRef();
  const [data, setData] = React.useState([]);
  const [fDOpen, setFDOpen] = React.useState(false);
  React.useEffect(() => {
    Transport.clear();
    for (var i = 0; i < data.length; i++) {
      dispatch({type: 'EMITTER_DATA', name: `Channel ${i}`, data: data[i]});
    }
  }, [data]);
  function handleFDClose() {
    setFDOpen(false);
  }
  function handleFileLoaded(data) {
    console.log('>>>LOAD', data);
    var res = [];
    for (var i = 0; i < data[0].length; i++) {
      var tmp = data.map(el => {
        return el[i];
      });
      tmp = tmp.filter((v, i, a) => !isNaN(v));
      const min = Math.min(...tmp);
      const max = Math.max(...tmp);
      const scaled = tmp.map((el, i) => {
        return {x: i, y: (el - min) / (max - min)};
      });
      res[i] = scaled;
    }
    setData(res);
    handleFDClose();
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
          <TransportControls />
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
          <Container
            className={classes.container_max}
            style={{overflowY: 'scroll'}}>
            <Dialog open={fDOpen} onClose={handleFDClose}>
              <DialogTitle>Load CSV EEG Recording</DialogTitle>
              <DialogContent>
                <CSVReader
                  onFileLoaded={handleFileLoaded}
                  parserOptions={{
                    dynamicTyping: true,
                    skipEmptyLine: true,
                  }}
                />
                <div style={{minHeight: '50px'}} />
              </DialogContent>
            </Dialog>
            {data ? (
              <AutoSizer disableHeight style={{position: 'sticky'}}>
                {({width}) => (
                  <LineChart
                    width={width}
                    height={50}
                    data={data[0]}
                    syncId="anyId">
                    <Brush />
                    <XAxis dataKey="x" />
                  </LineChart>
                )}
              </AutoSizer>
            ) : null}
            {data
              ? data.map((d, i) => (
                  <ChannelControl key={i} name={`Channel ${i}`} />
                ))
              : null}
          </Container>
          <BottomAppBar fDialog={setFDOpen} />
        </Grid>
      </Grid>
    </div>
  );
}

export default connect()(App);
