import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Draggable from 'react-draggable';
import SoundEmitter from '../components/SoundEmitter';
import SoundReceiver from '../components/SoundReceiver';
import {Listener} from 'tone';

import BrainSource from '../assets/images/brain-overview.jpg';

const SCALE = 500;

const useStyles = makeStyles(theme => ({
  container_max: {
    width: '100%',
    height: '100%',
    minWidth: 1024,
    minHeight: 1024,
  },
  max_height: {height: '100vh'},
  responsive_img: {width: '100%', height: 'auto'},
}));

function AudioField({sources}) {
  const classes = useStyles();
  const [audio, setAudio] = React.useState(null);
  const [emitters, setEmitters] = React.useState({});
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
    console.log('new Audio Input');
  }, [audio]);

  React.useEffect(() => {
    let delta = {
      x: recvPosition.x / containerRef.current.clientWidth,
      y: recvPosition.y / containerRef.current.clientHeight,
      z: recvPosition.z,
    };
    //Listener.setPosition(delta);
    for (var em in emitters) {
      console.log(em);
      updateEmitterPosition(em, emitters[em].position);
    }
  }, [recvPosition]);

  function registerSoundEmitter(name, synth, panner3D, position) {
    console.log('New Emitter', name);
    let state = emitters;
    state[name] = {synth: synth, panner3D: panner3D, position: position};
    setEmitters(state);
  }

  function updateEmitterPosition(name, position) {
    console.log('>>>', name);
    let delta = {
      x:
        ((recvPosition.x - position.x) / containerRef.current.clientWidth) *
        SCALE,
      y:
        ((recvPosition.y - position.y) / containerRef.current.clientHeight) *
        SCALE,
    };
    if (emitters[name] !== null) {
      emitters[name].position = position;
      emitters[name].panner3D.setPosition(delta.x, delta.y, 0);
    }
  }
  return (
    <Container className={classes.container_max}>
      <div
        className={classes.container_max}
        style={{
          backgroundImage: 'url(' + BrainSource + ')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        ref={containerRef}>
        {sources.map(source => (
          <SoundEmitter
            key={source.name}
            onPositionChange={position =>
              updateEmitterPosition(source.name, position)
            }
            callback={(s, p, pos) => {
              console.log(s, p, pos);
              registerSoundEmitter(source.name, s, p, pos);
            }}
          />
        ))}
        <SoundReceiver callback={setRecvPosition} />
      </div>
    </Container>
  );
}

export default AudioField;
