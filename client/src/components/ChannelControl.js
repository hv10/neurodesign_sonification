import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { connect } from "react-redux";
import emitterIdentity from "../actions/emitterIdentityFilter";
import {
  ResponsiveContainer,
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
  ReferenceLine,
} from "recharts";
import Divider from "@material-ui/core/Divider";
import { addEmitter, toggleEmitterEnabled } from "../reducers/emitters";

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

function ChannelControl({
  name,
  visibility,
  data,
  signal_data,
  id,
  addEmitter,
  toggleEmitterEnabled,
  progress,
}) {
  const [signalMap, setSignalMap] = React.useState({});
  React.useEffect(() => {
    addEmitter({ name: name, position: { x: 0, y: 100 }, id: uuidv4() });
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
          onClick={() => toggleEmitterEnabled(name)}
        >
          {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </Button>
      </Typography>
      {visibility ? (
        <div>
          <ResponsiveContainer width="100%" aspect={3} minHeight={50}>
            <LineChart data={signalMap} syncId="anyId">
              <CartesianGrid strokeDasharray="3 3" />
              <ReferenceLine
                x={Math.floor(signalMap.length * progress)}
                stroke="red"
              >
                <Label position="insideTopLeft" offset={5} value="▸" />
              </ReferenceLine>
              <XAxis
                dataKey="x"
                interval={Math.max(signalMap.length / 100, 250)}
              />
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
          </ResponsiveContainer>
          {id ? (
            <Typography>
              ID: <strong>{id.slice(0, 3)}</strong>
              <em>{id.slice(3)}</em>
            </Typography>
          ) : null}
        </div>
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
    progress: state.transport.progress,
  };
};

const mapDispatch = {
  addEmitter,
  toggleEmitterEnabled,
};

export default connect(mapStateToProps, mapDispatch)(ChannelControl);
