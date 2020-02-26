const emitters = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMITTER':
      return [
        ...state,
        {
          name: action.name,
          position: action.position,
          synth: action.synth,
          panner: action.panner3D,
          enabled: true,
          id: action.id,
        },
      ];
    case 'UPDATE_EMITTER_AUDIO_NODES':
      return state.map(emitter =>
        emitter.name === action.name
          ? {...emitter, synth: action.synth, panner: action.panner}
          : emitter,
      );
    case 'TOGGLE_EMITTER_ENABLED':
      return state.map(emitter =>
        emitter.name === action.name
          ? {...emitter, enabled: !emitter.enabled}
          : emitter,
      );
    case 'UPDATE_EMITTER_POS':
      return state.map(emitter =>
        emitter.name === action.name
          ? {...emitter, position: action.position}
          : emitter,
      );
    case 'REMOVE EMITTER':
      return state.filter(function(value, index, arr) {
        return value.name !== action.name;
      });
    default:
      return state;
  }
};
export default emitters;
