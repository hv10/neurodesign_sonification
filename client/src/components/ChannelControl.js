import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Portal from '@material-ui/core/Portal';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ZoomAndBrush from '../components/ZoomAndBrush';
import {AutoSizer} from 'react-virtualized';
import {connect} from 'react-redux';
import emitterIdentity from '../actions/emitterIdentityFilter';
import {Transport, Event} from 'tone';

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
}

function ChannelControl({name, visibility, data, id, dispatch}) {
  React.useEffect(() => {
    dispatch({
      type: 'ADD_EMITTER',
      name: name,
      position: {x: 0, y: 0},
      id: uuidv4(),
    });
    data.map((el, i) => {
      dispatch({type: 'ADD_AUDIO_EVENT', name: name, index: i, value: el.y});
    });
  }, []);
  return (
    <Card style={{margin: '10px 0'}}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <AutoSizer disableHeight>
          {({width}) => (
            <ZoomAndBrush
              width={width}
              height={250}
              heightSm={75}
              lineData={data}
            />
          )}
        </AutoSizer>
      </CardContent>
      <CardActions>
        <Button
          color={visibility ? 'default' : 'secondary'}
          variant="outlined"
          onClick={() =>
            dispatch({type: 'TOGGLE_EMITTER_ENABLED', name: name})
          }>
          {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </Button>
        {id ? (
          <Typography>
            ID: <strong>{id.slice(0, 3)}</strong>
            <em>{id.slice(3)}</em>
          </Typography>
        ) : null}
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    visibility: emitterIdentity(state.emitters, ownProps.name).enabled,
    id: emitterIdentity(state.emitters, ownProps.name).id,
  };
};

export default connect(mapStateToProps)(ChannelControl);
