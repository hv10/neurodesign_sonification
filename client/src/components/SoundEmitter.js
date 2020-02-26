import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Draggable from 'react-draggable';
import {
  Transport,
  PolySynth,
  Synth,
  Panner3D,
  Reverb,
  Part,
  Master as MasterOut,
} from 'tone';
import {connect} from 'react-redux';
import emitterIdentity from '../actions/emitterIdentityFilter';
import smoothed_z_score from '../smoothedzscore';

function setUpSynthDevice(cb) {
  const synth = new Synth();
  const panner3D = new Panner3D();
  synth.sync();
  panner3D.panningModel = 'HRTF';
  synth.chain(panner3D, MasterOut);
  cb(true);
  return [synth, panner3D];
}

function SoundEmitter({
  name,
  onPositionChange,
  callback = console.log,
  enabled,
  synth,
  panner3D,
  position,
  events,
  id,
  dispatch,
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [emitterEvents, setEmitterEvents] = React.useState([]);
  React.useEffect(() => {
    const [synth_d, panner3D_d] = setUpSynthDevice(setIsLoaded);
    dispatch({
      type: 'UPDATE_EMITTER_AUDIO_NODES',
      name: name,
      synth: synth_d,
      panner: panner3D_d,
    });
  }, []);
  React.useEffect(() => {
    if (isLoaded) {
      callback(synth, panner3D, position);
    }
  }, [synth, panner3D]);
  React.useEffect(() => {
    if (isLoaded) {
      onPositionChange(position);
    }
  }, [position]);
  React.useEffect(() => {
    Transport.clear();
    if (isLoaded) {
      synth.triggerRelease();
      const signals = smoothed_z_score(events.map((el, i) => el.value), {
        lag: 30,
        threshold: 1.5,
      });
      const ev = events.filter((v, i, a) => signals[i] !== 0);
      console.log(ev);
      const em = new Part(
        function(time, value) {
          value = value * 1000 + 250; // maps between 250 and 1250hz
          synth.triggerAttackRelease(value, 0.5, time);
        },
        ev.map((el, i) => {
          return [i / 10, el.value];
        }),
      );
      em.start();
    }
  }, [events]);

  function onControlledDrag(e, data) {
    const {x, y, node} = data;
    dispatch({type: 'UPDATE_EMITTER_POS', name: name, position: {x, y}});
  }
  if (enabled) {
    return (
      <Draggable
        bounds="parent"
        grid={[10, 10]}
        position={position}
        onStop={onControlledDrag}>
        <Fab color="secondary" disabled={!isLoaded}>
          {id.slice(0, 3)}
          <VolumeUpIcon />
        </Fab>
      </Draggable>
    );
  } else {
    return <div />;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    enabled: emitterIdentity(state.emitters, ownProps.name).enabled,
    synth: emitterIdentity(state.emitters, ownProps.name).synth,
    panner3D: emitterIdentity(state.emitters, ownProps.name).panner,
    position: emitterIdentity(state.emitters, ownProps.name).position,
    id: emitterIdentity(state.emitters, ownProps.name).id,
    events: state.transport.events.filter(
      (v, i, a) => v.name === ownProps.name,
    ),
  };
};

export default connect(mapStateToProps)(SoundEmitter);
