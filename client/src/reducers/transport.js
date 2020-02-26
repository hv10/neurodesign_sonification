const transport = (state = {events: []}, action) => {
  switch (action.type) {
    case 'PLAY_STATE_CHANGE':
      return {
        ...state,
        playState: action.state,
      };
    case 'INDEX_INC':
      return {...state, index: state.index++};
    case 'INDEX_SET':
      return {...state, index: action.index};
    case 'INDEX_RESET':
      return {...state, index: 0};
    case 'ADD_AUDIO_EVENT':
      return {
        ...state,
        events: [
          ...state.events,
          {name: action.name, index: action.index, value: action.value},
        ],
      };
    default:
      return state;
  }
};
export default transport;
