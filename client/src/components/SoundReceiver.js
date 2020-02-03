import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import MicIcon from '@material-ui/icons/Mic';
import Draggable from 'react-draggable';

const useStyle = makeStyles({
  rhombus: {
    width: 75,
    height: 75,
    transform: 'rotate(45deg)',
    borderRadius: 0,
  },
  micIcon: {
    width: 45,
    height: 45,
    transform: 'rotate(-45deg)',
  },
});

function SoundReceiver({
  callback = console.log,
  defaultPos = {x: 512, y: 512},
}) {
  const classes = useStyle();
  const [position, setPosition] = React.useState({
    x: defaultPos.x,
    y: defaultPos.y,
  });
  const [parentSize, setParentSize] = React.useState({width: 0, height: 0});
  function onControlledDrag(e, data) {
    const {x, y, node} = data;
    setPosition({x, y});
  }
  React.useEffect(() => {
    callback(position);
  }, [position]);
  return (
    <Draggable
      bounds="parent"
      grid={[10, 10]}
      position={position}
      onStop={onControlledDrag}>
      <div style={{display: 'inline-block'}}>
        <Fab
          color="primary"
          size="large"
          variant="extended"
          className={classes.rhombus}>
          <MicIcon className={classes.micIcon} />
        </Fab>
      </div>
    </Draggable>
  );
}

export default SoundReceiver;
