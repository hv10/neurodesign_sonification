import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
//import openSocket from 'socket.io-client';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import CSVReader from "react-csv-reader";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import BottomAppBar from "./components/BottomAppBar";
import AudioField from "./components/AudioField";
import ChannelControl from "./components/ChannelControl";
import TransportControls from "./components/TransportControls";
import { Transport } from "tone";
import { ResponsiveContainer, LineChart, Brush, XAxis } from "recharts";

import demoData from "./assets/demoData";
import { emitterData } from "./reducers/emitters";

const useStyles = makeStyles((theme) => ({
  container_max: { width: "100%", height: "100%" },
  max_height: { height: "100vh", overflowY: "scroll" },
  responsive_img: { width: "100%", height: "auto" },
  transportControls: { position: "absolute", bottom: 25, left: 100 },
  controlFab: { position: "relative", margin: "0 5px" },
}));

function App({ emitterData }) {
  const classes = useStyles();
  const containerRef = React.useRef();
  const [data, setData] = React.useState([]);
  const [fDOpen, setFDOpen] = React.useState(false);
  React.useEffect(() => {
    Transport.clear();
    for (var i = 0; i < data.length; i++) {
      emitterData({ name: `Channel ${i}`, data: data[i] });
    }
  }, [data]);
  function handleFDClose() {
    setFDOpen(false);
  }
  function handleFileLoaded(data) {
    console.log(">>>LOAD", data);
    var res = [];
    for (var i = 0; i < data[0].length; i++) {
      var tmp = data.map((el) => {
        return el[i];
      });
      tmp = tmp.filter((v, i, a) => !isNaN(v));
      const min = Math.min(...tmp);
      const max = Math.max(...tmp);
      const scaled = tmp.map((el, i) => {
        return { x: i, y: (el - min) / (max - min) };
      });
      res[i] = scaled;
    }
    setData(res);
    handleFDClose();
  }
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Grid container direction="row">
        <Grid
          item
          component={Paper}
          xs={12}
          md={8}
          className={classes.max_height}
        >
          <AudioField sources={[]} ref={containerRef} />
          <TransportControls />
        </Grid>
        <div style={{ height: "5vh", width: 0 }} />
        <Grid
          item
          component={Paper}
          elevation={3}
          xs={12}
          md={4}
          className={classes.max_height}
          style={{ position: "relative" }}
        >
          <Container
            className={classes.container_max}
            style={{ overflowY: "scroll" }}
          >
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
                <br />
                <Button
                  color="primary"
                  onClick={() => handleFileLoaded(demoData)}
                >
                  Load Demo File
                </Button>
                <div style={{ minHeight: "50px" }} />
              </DialogContent>
            </Dialog>
            {data.length > 0 ? (
              <ResponsiveContainer
                width="100%"
                height={50}
                style={{ position: "sticky" }}
              >
                <LineChart data={data[0]} syncId="anyId">
                  <Brush dataKey="x" />
                  <XAxis dataKey="x" />
                </LineChart>
              </ResponsiveContainer>
            ) : null}
            {data.length > 0
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

const mapDispatchToProps = {
  emitterData,
};

export default connect(null, mapDispatchToProps)(App);
