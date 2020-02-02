import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Draggable from 'react-draggable';
import {AMSynth, Panner3D, Master as MasterOut} from 'tone';

function setUpSynthDevice(cb) {
  let synth = new AMSynth();
  let panner3D = new Panner3D();
  panner3D.panningModel = 'HRTF';
  panner3D.rolloffFactor = 2;
  panner3D.refDistance = 1;
  synth.chain(panner3D, MasterOut);
  return [synth, panner3D];
}

function SoundEmitter({onPositionChange, callback = console.log}) {
  const [position, setPosition] = React.useState({x: 0, y: 0});
  const [synth, setSynth] = React.useState(null);
  const [panner3D, setPanner3D] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    const [synth_d, panner3D_d] = setUpSynthDevice();
    setSynth(synth_d);
    setPanner3D(panner3D_d);
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

  function onControlledDrag(e, data) {
    const {x, y, node} = data;
    setPosition({x, y});
    synth.triggerAttackRelease('C2', 0.5);
  }

  return (
    <Draggable
      bounds="parent"
      grid={[50, 50]}
      position={position}
      onStop={onControlledDrag}>
      <Fab color="secondary">
        <VolumeUpIcon />
      </Fab>
    </Draggable>
  );
}

export default SoundEmitter;
