import { createSlice } from "@reduxjs/toolkit";

const transport = createSlice({
  name: "transport",
  initialState: { events: [], max_length: 0.01 },
  reducers: {
    playStateChange(state, action) {
      state.playState = action.payload;
    },
    indexInc(state) {
      state.index = state.index++;
    },
    indexSet(state, action) {
      state.index = action.payload;
    },
    indexReset(state) {
      state.index = 0;
    },
    updateMaxLength(state, action) {
      const { max_length } = action.payload;
      state.max_length = max_length;
    },
    addAudioEvent(state, action) {
      state.events.push(action.payload);
    },
  },
});
export const {
  playStateChange,
  updateMaxLength,
  addAudioEvent,
} = transport.actions;
export default transport.reducer;
