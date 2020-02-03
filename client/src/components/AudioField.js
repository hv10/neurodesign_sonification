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
import {connect} from 'react-redux';

import BrainSource from '../assets/images/brain-overview.jpg';

const useStyles = makeStyles(theme => ({
  container_max: {
    width: '100%',
    height: '100%',
  },
  max_height: {height: '100vh'},
  responsive_img: {width: '100%', height: 'auto'},
}));

const SCALE = 10;

function AudioField({sources, dispatch}) {
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
    const x = recvPosition.x / containerRef.current.clientWidth;
    const y = recvPosition.y / containerRef.current.clientHeight;
    const z = 0.0;
    Listener.setPosition(x, y, z).setOrientation(0, 1, 0, 0, 0, 1);
    for (var em in emitters) {
      updateEmitterPosition(em, emitters[em].position);
    }
  }, [recvPosition]);

  function registerSoundEmitter(name, synth, panner3D, position) {
    let state = emitters;
    state[name] = {synth: synth, panner3D: panner3D, position: position};
    setEmitters(state);
  }

  function updateEmitterPosition(name, position) {
    let delta = {
      x: (position.x - recvPosition.x) / containerRef.current.clientWidth,
      y: (recvPosition.y - position.y) / containerRef.current.clientHeight,
    };
    if (emitters[name] !== null) {
      emitters[name].position = position;
      emitters[name].panner3D.setPosition(delta.x * SCALE, delta.y * SCALE, 0);
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
            name={source.name}
            onPositionChange={position =>
              updateEmitterPosition(source.name, position)
            }
            callback={(s, p, pos) => {
              registerSoundEmitter(source.name, s, p, pos);
            }}
          />
        ))}
        <SoundReceiver callback={setRecvPosition} />
      </div>
    </Container>
  );
}
const mapStateToProps = state => {
  return {
    sources: state.emitters,
  };
};

export default connect(mapStateToProps)(AudioField);
