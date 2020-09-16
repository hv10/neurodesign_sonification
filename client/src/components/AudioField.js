import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Draggable from "react-draggable";
import SoundEmitter from "../components/SoundEmitter";
import SoundReceiver from "../components/SoundReceiver";
import { Listener } from "tone";
import { connect } from "react-redux";

import BrainSource from "../assets/images/brain-overview.jpg";
import {
  updateEmitterPannerPosition,
  updateEmitterPos,
} from "../reducers/emitters";

const useStyles = makeStyles((theme) => ({
  container_max: {
    width: "100%",
    height: "100%",
    minHeight: "100%",
  },
  max_height: { height: "100vh" },
  responsive_img: { width: "100%", height: "auto" },
}));

const SCALE = 15;

function AudioField({
  sources,
  updateEmitterPos,
  updateEmitterPannerPosition,
}) {
  const classes = useStyles();
  const [audio, setAudio] = React.useState(null);
  const [recvPosition, setRecvPosition] = React.useState({
    x: 0.0,
    y: 0.0,
    z: 0.0,
  });
  const containerRef = React.useRef();

  //set Up Audio Context in Effect Hook
  React.useEffect(() => {
    (async () => {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      setAudio(audio);
    })();
  }, []);
  React.useEffect(() => {
    console.log("new Audio Input");
  }, [audio]);

  React.useEffect(() => {
    const x = recvPosition.x / containerRef.current.clientWidth;
    const y = recvPosition.y / containerRef.current.clientHeight;
    const z = 0.0;
    Listener.setPosition(x, y, z).setOrientation(0, 1, 0, 0, 0, 1);
    for (var i = 0; i < sources.length; i++) {
      const { name, position } = sources[i];
      updateEmitterPos({
        name: name,
        position: position,
      });
      let delta = {
        x:
          ((position.x - recvPosition.x) / containerRef.current.clientWidth) *
          SCALE,
        y:
          ((recvPosition.y - position.y) / containerRef.current.clientHeight) *
          SCALE,
        z: 0,
      };
      updateEmitterPannerPosition({
        name: name,
        position: delta,
      });
    }
  }, [recvPosition]);

  function panic() {
    for (var i = 0; i < sources.length; i++) {
      sources[i].synth.oscillator.stop();
      sources[i].synth.triggerRelease();
    }
  }

  return (
    <Container className={classes.container_max}>
      <div
        className={classes.container_max}
        style={{
          backgroundImage: "url(" + BrainSource + ")",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        ref={containerRef}
      >
        {sources.map((source) => (
          <SoundEmitter
            key={source.name}
            name={source.name}
            onPositionChange={(position) =>
              updateEmitterPos(source.name, position)
            }
          />
        ))}
        <SoundReceiver callback={setRecvPosition} />
        <Button
          variant="outlined"
          color="secondary"
          onClick={panic}
          style={{ position: "absolute", top: "2vh", left: "2vh" }}
        >
          Panic!
        </Button>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    sources: state.emitters,
  };
};

const mapDispatchToProps = {
  updateEmitterPos,
  updateEmitterPannerPosition,
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioField);
