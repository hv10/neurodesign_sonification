import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Portal from "@material-ui/core/Portal";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import ZoomAndBrush from "../components/ZoomAndBrush";
import { AutoSizer } from "react-virtualized";
import { connect } from "react-redux";
import emitterIdentity from "../actions/emitterIdentityFilter";
import { Transport, Event } from "tone";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";
import Divider from "@material-ui/core/Divider";

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function customTick({ x, y, stroke, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} fill="#666">
        {payload.value}
      </text>
    </g>
  );
}

function ChannelControl({ name, visibility, data, signal_data, id, dispatch }) {
  const [signalMap, setSignalMap] = React.useState({});
  React.useEffect(() => {
    dispatch({
      type: "ADD_EMITTER",
      name: name,
      position: { x: 0, y: 100 },
      id: uuidv4(),
    });
  }, []);
  React.useEffect(() => {
    let s_map = [];
    for (var i = 0; i < data.length; i++) {
      s_map.push({ x: i, y: data[i].y, y_s: signal_data[i] });
    }
    setSignalMap(s_map);
  }, [data, signal_data]);
  return (
    <>
      <Typography variant="h6">
        {name}
        <Button
          color={visibility ? "default" : "secondary"}
          onClick={() =>
            dispatch({ type: "TOGGLE_EMITTER_ENABLED", name: name })
          }
        >
          {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </Button>
      </Typography>
      {visibility ? (
        <>
          <AutoSizer disableHeight>
            {({ width }) => (
              <LineChart
                width={width}
                height={200}
                data={signalMap}
                syncId="anyId"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis type="number" domain={[0, 1]} />
                <Tooltip />
                <Line
                  type="step"
                  dot={false}
                  activeDot={false}
                  dataKey="y_s"
                  stroke="grey"
                />
                <Line
                  type="monotone"
                  dot={false}
                  activeDot={{ stroke: "red" }}
                  dataKey="y"
                  stroke="lightgreen"
                />
              </LineChart>
            )}
          </AutoSizer>
          {id ? (
            <Typography>
              ID: <strong>{id.slice(0, 3)}</strong>
              <em>{id.slice(3)}</em>
            </Typography>
          ) : null}
        </>
      ) : null}
      <Divider light />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    visibility: emitterIdentity(state.emitters, ownProps.name).enabled,
    id: emitterIdentity(state.emitters, ownProps.name).id,
    signal_data:
      emitterIdentity(state.emitters, ownProps.name).signal_data || [],
    data: emitterIdentity(state.emitters, ownProps.name).data || [],
  };
};

export default connect(mapStateToProps)(ChannelControl);
