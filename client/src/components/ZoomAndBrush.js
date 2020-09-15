import React from 'react';
import {connect} from 'react-redux';
import {
  VictoryChart,
  VictoryLine,
  VictoryBrushContainer,
  createContainer,
  VictoryAxis,
} from 'victory';

const VictoryZoomVoronoiContainer = createContainer('zoom', 'cursor');

function ZoomAndBrush({width, height, heightSm, lineData = [], index}) {
  const [zoomDomain, setZoomDomain] = React.useState();
  function handleZoom(domain) {
    setZoomDomain(domain);
  }
  function handleBrush(domain) {
    setZoomDomain(domain);
  }
  return (
    <div style={{width: width}}>
      <VictoryChart
        width={width}
        height={height}
        containerComponent={
          <VictoryZoomVoronoiContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
            cursorLabel={({datum}) => `${Math.round(datum.x, 0)}`}
            cursorDimension="x"
            defaultCursorValue={index}
          />
        }>
        <VictoryLine
          style={{
            data: {stroke: 'tomato'},
          }}
          data={lineData}
          x="x"
          y="y"
        />
      </VictoryChart>
      <VictoryChart
        padding={{top: 0, left: 50, right: 50, bottom: 30}}
        width={width}
        height={heightSm}
        containerComponent={
          <VictoryBrushContainer
            brushDimension="x"
            brushDomain={zoomDomain}
            onBrushDomainChange={handleZoom}
          />
        }>
        <VictoryAxis />
        <VictoryLine
          style={{
            data: {stroke: 'tomato'},
          }}
          data={lineData}
          x="x"
          y="y"
        />
      </VictoryChart>
    </div>
  );
}
const mapStateToProps = state => {
  return {index: state.transport.index};
};
export default connect(mapStateToProps)(ZoomAndBrush);
