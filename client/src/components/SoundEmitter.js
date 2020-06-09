import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Draggable from "react-draggable";
import {
  Transport,
  PolySynth,
  Synth,
  Panner3D,
  Reverb,
  Part,
  Master as MasterOut,
} from "tone";
import { connect } from "react-redux";
import emitterIdentity from "../actions/emitterIdentityFilter";
import smoothed_z_score from "../smoothedzscore";

import {
  updateEmitterAudioNodes,
  updateEmitterPos,
  emitterSignalData,
} from "../reducers/emitters";
import { updateMaxLength } from "../reducers/transport";

function setUpSynthDevice(cb) {
  const synth = new Synth();
  const panner3D = new Panner3D();
  synth.sync();
  panner3D.panningModel = "HRTF";
  synth.chain(panner3D, MasterOut);
  cb(true);
  return [synth, panner3D];
}

function SoundEmitter({
  name,
  onPositionChange,
  enabled,
  synth,
  position,
  events,
  id,
  max_length,
  updateEmitterPos,
  updateEmitterAudioNodes,
  emitterSignalData,
  updateMaxLength,
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    const [synth_d, panner_d] = setUpSynthDevice(setIsLoaded);
    updateEmitterAudioNodes({ name: name, synth: synth_d, panner: panner_d });
  }, []);
  React.useEffect(() => {
    if (isLoaded) {
      onPositionChange(position);
    }
  }, [position]);
  React.useEffect(() => {
    if (isLoaded) {
      synth.triggerRelease();
      const signals = smoothed_z_score(
        events.map((el, i) => el.y),
        {
          lag: 5,
          threshold: 3.5,
        }
      );
      emitterSignalData({
        name: name,
        signal_data: signals.map((el) => el / 3 + 0.5),
      });
      const ev = events.filter((v, i, a) => signals[i] !== 0);
      const em = new Part(
        function (time, value) {
          value = value * 1000 + 250; // maps between 250 and 1250hz
          synth.triggerAttackRelease(value, 0.5, time);
        },
        ev.map((el, i) => {
          return [el.x / 10, el.y];
        })
      );
      em.start(0);
      if (ev[ev.length - 1].x / 10 > max_length) {
        updateMaxLength({ max_length: ev[ev.length - 1].x / 10 });
      }
    }
  }, [events, isLoaded]);

  function onControlledDrag(e, data) {
    const { x, y, node } = data;
    updateEmitterPos({ name: name, position: { x, y } });
  }

  if (enabled) {
    return (
      <Draggable
        bounds="parent"
        grid={[10, 10]}
        position={position}
        onStop={onControlledDrag}
      >
        <Fab
          color="secondary"
          disabled={!isLoaded}
          style={{ position: "absolute" }}
        >
          {id.slice(0, 3)}
          <VolumeUpIcon />
        </Fab>
      </Draggable>
    );
  } else {
    return <></>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    enabled: emitterIdentity(state.emitters, ownProps.name).enabled,
    synth: emitterIdentity(state.emitters, ownProps.name).synth,
    panner: emitterIdentity(state.emitters, ownProps.name).panner,
    position: emitterIdentity(state.emitters, ownProps.name).position,
    id: emitterIdentity(state.emitters, ownProps.name).id,
    events: emitterIdentity(state.emitters, ownProps.name).data,
    max_length: state.transport.max_length,
  };
};

const mapDispatch = {
  updateEmitterPos,
  updateEmitterAudioNodes,
  emitterSignalData,
  updateMaxLength,
};

export default connect(mapStateToProps, mapDispatch)(SoundEmitter);
